import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import test from "node:test";

const pages = ["index.html", "privacy/index.html", "support/index.html", "security/index.html", "guides/index.html"];
const sources = await Promise.all(pages.map((p) => readFile(new URL(`../${p}`, import.meta.url), "utf8")));
const script = await readFile(new URL("../script.js", import.meta.url), "utf8");

test("actual download CTAs and screenshot replace the mock hero", () => {
  assert.ok((sources[0].match(/https:\/\/apps\.apple\.com\/app\/id6801119584\?mt=12/gu) || []).length >= 3);
  assert.match(sources[0], /class="hero-product-capture"/u);
  assert.doesNotMatch(sources[0], /class="vault-window"|Coming soon|coming soon/u);
});

test("public copy distinguishes the live release, candidate and actual bridge boundary", () => {
  assert.match(sources[0], /current 1\.0 release is fully unlocked/u);
  assert.match(sources[2], /candidate|being tested/u);
  for (const source of [sources[0], sources[1], sources[3]]) {
    assert.doesNotMatch(source, /do not leave the native.*through the web bridge/u);
    assert.match(source, /local WebKit bridge/u);
  }
  assert.match(script, /取回已有文件不以购买为前提/u);
  assert.match(script, /尚未完成独立安全审计/u);
  assert.doesNotMatch(script, /不会通过 web bridge 离开原生/u);
});

test("local page links and product images exist", async () => {
  for (let i = 0; i < pages.length; i += 1) {
    const base = new URL(`../${pages[i]}`, import.meta.url);
    for (const [, path] of sources[i].matchAll(/(?:href|src)="([^"]+)"/gu)) {
      if (/^(?:https?:|#|data:|mailto:)/u.test(path)) continue;
      const target = new URL(path, base);
      if (target.pathname.endsWith("/")) target.pathname += "index.html";
      await access(target);
    }
  }
});

test("practical guides cover source retention, recovery checks and live/candidate boundaries in both languages", () => {
  assert.match(sources[4], /guide-en/u);
  assert.match(sources[4], /guide-zh/u);
  assert.match(sources[4], /Keep the original while testing/u);
  assert.match(sources[4], /Test backup/u);
  assert.match(sources[4], /测试期间保留源文件/u);
  assert.match(sources[4], /仅候选版具备/u);
});
