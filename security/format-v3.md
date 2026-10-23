# Cobolt vault format and security boundaries

Current disk format: **3**. This describes the implementation, not an independent security audit. Do not use real secrets as test vectors. Copy a closed vault as a complete directory; do not merge individual manifest/object files from different copies.

## Directory and public metadata

```text
Name.vault/
  header.json
  manifest.enc
  objects/<file-UUID>.vlt
  versions/<current-item-UUID>/<version-UUID>.vlt
```

`header.json` is UTF-8 JSON. `formatVersion`, UUID `id`, `displayName`, ISO-8601 `created`, Base64 `kdfSalt`, `kdfIterations`, Base64 `passwordWrap`, Base64 `recoveryWrap` and a historical `touchIDEnabled` hint are public. Vault names, approximate sizes and object counts are not concealed from someone who can inspect the directory. The local app catalog, preferences and health records are not the encrypted file manifest.

## Keys and authenticated encryption

The randomly generated vault master key is 32 bytes. Password bytes are UTF-8; password hardening uses CommonCrypto PBKDF2-HMAC-SHA256 with a random 16-byte salt, a 32-byte output and 600,000 iterations for newly created vaults. Readers accept header iteration counts from 100,000 through 5,000,000. The master key is wrapped with AES-256-GCM. Recovery uses a separate random 32-byte recovery key encoded as uppercase RFC-4648 Base32, without padding, grouped with hyphens every four characters. It directly wraps the same master key; it is not the password.

GCM combined values are `nonce (12 bytes) || ciphertext || tag (16 bytes)`. Each encryption generates a fresh random nonce. Authenticated data is the exact UTF-8 string below, without a trailing newline:

```text
Password wrap: vault=<vault-ID>;wrap=password;format=3
Recovery wrap: vault=<vault-ID>;wrap=recovery;format=3
Manifest:      manifest=<vault-ID>;format=3
File chunk:    vault=<vault-ID>;file=<source-file-ID>;chunk=<zero-based decimal index>;format=3
```

Each file key is HKDF-SHA256 of the master key, salt = UTF-8 vault UUID, info = UTF-8 `Cobolt.file.v3.<source-file-ID>`, output = 32 bytes. IDs use the exact stored lowercase UUID spelling. Do not substitute a current item ID when a historical version supplies a different `sourceFileID`.

## Manifest and object records

`manifest.enc` is a GCM combined value encrypted directly with the master key. Its authenticated plaintext is JSON with `version`, `items`, `trashItems`, `sourceReferences` and `versions`. Dates are ISO-8601. Each item includes UUID `id`, `name`, vault-relative `relativePath`, `kind`, optional `contentType`, `isDirectory`, plaintext `size`, `modified`, `group`, `isFavorite` and optional string-array `tags`. Tags default to an empty array in older format-3 manifests. File names, tags, source paths/bookmarks and version metadata inside this manifest are encrypted.

Each `.vlt` object is a sequence of `8-byte unsigned big-endian record length || GCM combined record`. Plaintext chunks are at most 4 MiB. Even an empty file has one authenticated empty chunk. Readers reject absent records, invalid lengths, failed tags, reordered chunks, and a total plaintext length different from the authenticated manifest size. Directories are manifest entries, not file objects.

`versions` maps current item IDs to arrays of records containing version `id`, `itemID`, `sourceFileID`, `name`, `size`, `modified` and `created`. The corresponding ciphertext is under `versions/<itemID>/<versionID>.vlt`. Full verification authenticates active files, encrypted Trash and all referenced versions without writing verification plaintext. Unreferenced objects are not counted as user files.

## Recovery and write safety

The same password or recovery key opens the complete vault on another Mac. Touch ID enrollment is local to one vault and one device; copying the directory does not copy a usable biometric Keychain entry. Free read-only opening and exporting do not depend on an App Store purchase or account. A forgotten password and missing recovery key cannot be bypassed by support.

Imports and edits write new encrypted objects before the atomic manifest replacement. Editing preserves the previous object as a version, and only removes old unreferenced objects after the commit. Save conflicts leave the working copy intact. A failed editing save postpones lock/quit rather than silently discarding the copy; the app warns and asks the user to finish or discard it. This exception matters on sleep and user switching too. Do not leave an unsuccessful lock unresolved on a shared Mac.

The recovery CLI uses the same VaultCore code as the app. Verify a copied vault, export into a new folder, open the output and compare known files before deleting any original. A verified copy is not evidence that a separate disk, backup schedule or restore rehearsal exists. Locked backups are copies, not authenticated full verifications.

## Threat model and limitations

- Password forms and the one-time recovery-key display are part of the bundled local React interface. Passwords cross the local WebKit bridge to Swift; master keys and file contents are not returned to JavaScript. Nothing is sent to a Cobolt server.
- A six-character password is permitted for usability, but a long, unique passphrase is strongly preferable. The app’s failed-attempt delay does **not** prevent an attacker from making offline guesses against a copied vault or resetting local app state.
- An unlocked vault, compromised OS, memory inspection, malware, external editors, exported files, backups and screenshots are outside “locked ciphertext on disk” protection. FileVault and macOS account locking remain important. Swift values and OS caches do not provide a guarantee of forensic memory erasure.
- Quick Look, editing and export intentionally create plaintext. Controlled copies use private temporary directories and owner-only files. External editors may retain independent caches, versions and autosaved documents; Cobolt cannot erase those. SSD deletion is best effort, not forensic erasure.
- Content search is opt-in and local. Text caching is bounded in memory and cleared on lock. Its limits are 500 files, 40 MiB per file, 100 PDF pages, 20 OCR pages and 100,000 characters per extraction. An unavailable advanced recognizer may fall back to basic English OCR, which the UI discloses. Unsupported/unreadable files are counted as skipped.
- Concurrent writes from two app instances or devices, rollback attacks using an older valid vault copy, cloud conflict merging, secure sharing of the recovery key, and independent cryptographic audit remain separate concerns. This app does not implement cloud synchronization, multi-user permissions or an anti-rollback server.

Apple references: [CryptoKit](https://developer.apple.com/documentation/cryptokit), [AES.GCM](https://developer.apple.com/documentation/cryptokit/aes/gcm), [Vision text recognition](https://developer.apple.com/documentation/vision/vnrecognizetextrequest). Source of truth: `CryptoEngine.swift`, `ChunkCipher.swift`, `Models.swift` and `VaultService.swift`.
