(() => {
  const translations = {
    zh: {
      "brand.home": "Cobolt 首页",
      "menu.open": "打开菜单",
      "nav.main": "主导航",
      "nav.secondary": "辅助导航",
      "nav.features": "为什么 Cobolt",
      "nav.screens": "产品预览",
      "nav.privacy": "隐私",
      "nav.support": "支持",
      "nav.home": "首页",
      "nav.guides": "文档与备份指南",
      "nav.security": "安全与文件取回",
      "nav.backToProduct": "返回产品页 <span aria-hidden=\"true\">↗</span>",
      "nav.comingSoon": "macOS <span class=\"dot\"></span> 即将上线",
      "home.heroTitle": "私密文件，<br /><em>留在你的 Mac。</em>",
      "home.eyebrow": "本地优先的 macOS 文件保险箱",
      "home.heroLede": "Cobolt 把敏感文件放进一个只在需要时解锁的本地保险箱。没有账号，没有云端依赖，核心任务不追踪你的行为。",
      "home.heroAction": "在 Mac App Store 下载",
      "home.privacyAction": "查看隐私声明",
      "home.nativeExperience": "macOS 原生体验",
      "home.heroArt": "Cobolt 本地保险库实际工作区截图",
      "home.appIcon": "Cobolt 应用图标",
      "home.heroCaption": "真实 Cobolt 界面；示例文件仅用于演示。",
      "home.highlights": "Cobolt 特性",
      "home.proofLocal": "本地优先，核心数据不离开 Mac",
      "home.proofAccess": "密码、Touch ID 与 recovery key",
      "home.proofWorkspace": "像 Finder 一样自然的工作区",
      "home.promiseTitle": "保护应该是默认状态，<br /><em>而不是额外负担。</em>",
      "home.promiseEyebrow": "COBOLT 的承诺",
      "home.promiseLede": "为税务文件、身份证件、个人笔记、备份码和其他不想交给云端的内容而做。",
      "home.featureLocalTitle": "你的文件，留在你的设备",
      "home.featureLocalBody": "文件对象、加密目录和保险箱设置都在本机保存。核心流程不需要账号，不依赖云端，也不发送遥测。",
      "home.featureLocalIndex": "01 / 默认本地保存",
      "home.offlineReady": "离线可用",
      "home.featureAccessTitle": "需要时解锁，用完即锁",
      "home.featureAccessBody": "密码、Touch ID 和 recovery key 给你清晰的控制感；自动锁定帮你收尾。",
      "home.featureAccessIndex": "02 / 按需解锁",
      "home.autoLock": "自动锁定",
      "home.featureHonestTitle": "验证、备份，并放心恢复",
      "home.featureHonestBody": "保险箱健康检查会验证加密对象；加密备份和文件版本为你保留恢复路径。偏好设置还会显示 Quick Look 产生的已跟踪临时明文副本。",
      "home.featureHonestIndex": "03 / 放心恢复",
      "home.integrityChecks": "完整性检查",
      "home.encryptedBackups": "加密备份",
      "home.screensTitle": "清晰的工作区，<br /><em>把复杂藏起来。</em>",
      "home.screensEyebrow": "为产品而生的空间",
      "home.screensLede": "左右滑动或滚动查看已解锁的工作区、已锁定的保险箱和安全偏好设置。",
      "home.slotWorkspace": "已解锁工作区",
      "home.slotLocked": "已锁定保险箱",
      "home.slotPreferences": "偏好设置",
      "home.screensGalleryLabel": "产品截图",
      "home.screenshotWorkspaceAlt": "Cobolt 已解锁工作区，显示受保护文件和文件操作菜单",
      "home.screenshotLockedAlt": "Cobolt 已锁定的保险箱和解锁操作",
      "home.screenshotPreferencesAlt": "Cobolt 偏好设置，包含 Touch ID、加密备份、临时副本和 recovery key",
      "home.zoomWorkspace": "放大已解锁工作区截图",
      "home.zoomLocked": "放大锁定保险箱截图",
      "home.zoomPreferences": "放大偏好设置截图",
      "home.viewLarge": "查看大图 ↗",
      "home.screenshotPreviewTitle": "截图预览",
      "home.closeScreenshot": "关闭截图预览",
      "home.processTitle": "从放进去，<br /><em>到放心关上。</em>",
      "home.processEyebrow": "安静的三步",
      "home.stepCreateTitle": "创建保险箱",
      "home.stepCreate": "创建一个受密码保护的本地保险箱。你的密码用于解锁随机生成的保险箱密钥。",
      "home.stepDropTitle": "放入重要文件",
      "home.stepDrop": "拖入文件，Cobolt 使用本地 authenticated encryption 保存文件和目录。",
      "home.stepLockTitle": "用完即锁",
      "home.stepLock": "锁定后，临时解密副本会被尽力清理；加密内容留在保险箱里。",
      "home.securityEyebrow": "不玩安全话术",
      "home.securityTitle": "把安全边界说清楚，<br /><em>比做一个黑盒更重要。</em>",
      "home.securityBody": "密码在随应用打包的本地界面输入，通过本地 WebKit bridge 传给 Swift；恢复密钥会在该界面显示一次。主密钥和文件加密在原生层处理，不会将密码、密钥或文件上传到 Cobolt 服务器。快速查看和外部编辑器可能需要明文副本。SSD 删除并非取证级擦除，目前也尚未完成独立安全审计。",
      "home.securityLink": "了解安全边界与文件取回",
      "home.ctaTitle": "先把重要的东西，<br /><em>放回自己的手里。</em>",
      "home.ctaEyebrow": "随时开始",
      "home.ctaAction": "在 Mac App Store 下载",
      "art.local": "本地",
      "art.vaults": "保险箱",
      "art.locations": "位置",
      "art.personal": "个人",
      "art.archive": "存档",
      "art.onMyMac": "我的 Mac",
      "art.personalVault": "个人保险箱",
      "art.lockVault": "锁定保险箱",
      "art.protectedFiles": "受保护的文件",
      "art.dropFiles": "拖入文件以保护",
      "art.encryptedImport": "导入时在本地加密",
      "art.taxDocuments": "税务文件",
      "art.recoveryCodes": "恢复码",
      "art.personalNotes": "个人笔记",
      "art.unlocked": "已解锁",
      "art.ready": "随时可以开始。<br />你的文件留在这台 Mac 上。",
      "art.vaultStatus": "保险箱状态",
      "art.autoLock": "自动锁定",
      "art.after15": "15 分钟后",
      "footer.home": "首页",
      "footer.privacy": "隐私",
      "footer.support": "支持",
      "footer.built": "为 macOS 打造",
      "footer.tagline": "私密文件，受 Mac 保护。",
      "privacy.title": "隐私声明",
      "privacy.eyebrow": "隐私政策",
      "privacy.lede": "Cobolt 是一款 local-first 的 macOS 私密文件保险箱。本声明说明当前 Cobolt macOS 版本、官网与支持页面如何处理信息。",
      "privacy.date": "生效日期：2026 年 8 月 17 日 · 更新日期：2026 年 10 月 24 日",
      "privacy.tocSummary": "一页摘要",
      "privacy.tocApp": "App 中的信息",
      "privacy.tocPurchases": "购买与 Apple",
      "privacy.tocWebsite": "官网与第三方",
      "privacy.tocRetention": "保存与删除",
      "privacy.tocContact": "联系我们",
      "privacy.tocHeading": "本页内容",
      "privacy.summaryTitle": "一页摘要",
      "privacy.summaryBody": "我们设计 Cobolt 的核心工作流为本地优先：你的文件、保险箱目录和解锁过程在你的 Mac 上完成。Cobolt 不要求账号，不把核心文件同步到 Cobolt 云端，也不为核心任务运行遥测或广告追踪。",
      "privacy.summaryCalloutStrong": "一句话：",
      "privacy.summaryCalloutBody": "你把文件交给 Cobolt，是为了让它们留在你的设备上，而不是交给我们保管。",
      "privacy.appTitle": "1. Cobolt App 中的信息",
      "privacy.appFilesTitle": "你主动放入保险箱的内容",
      "privacy.appFilesBody": "你选择导入的文件、保险箱名称、文件名、大小、类型、时间等目录元数据，以及保险箱的本地设置，会保存在你的 Mac 上。Cobolt 使用本地 authenticated encryption 保存保险箱内容；核心文件不会上传到 Cobolt 的服务器。",
      "privacy.appOperationsTitle": "本地引用与活动数据",
      "privacy.appOperationsBody": "为了支持“恢复到原始位置”，Cobolt 可能在 Mac 本地保存导入文件的路径和安全作用域书签。应用还会保存本地活动记录、完整性检查结果，以及在你使用时产生的加密备份位置和版本元数据。这些记录都留在你的 Mac 上。",
      "privacy.appSecurityTitle": "用于解锁和安全控制的信息",
      "privacy.appSecurityBody": "密码会派生用于包裹随机保险库主密钥的密钥。密码在随应用打包的本地界面输入，经本地 WebKit bridge 交给 Swift；生成的恢复密钥在该界面显示一次。主密钥与文件内容加密保留在原生层，不向 Cobolt 服务器传送密码、恢复密钥或保险库数据。触控 ID 使用 macOS API 和设备专属钥匙串条目。目前尚未完成独立安全审计。",
      "privacy.appTempTitle": "临时解密副本",
      "privacy.appTempBody": "快速查看和 Finder 切换可能创建受跟踪的临时明文副本。候选编辑功能也会在外部编辑器中打开工作副本，回存时保留前一个加密版本；锁定或退出前会先保存编辑，保存失败则暂停该操作并提示。外部应用可能产生 Cobolt 无法控制的缓存或副本。清理仅为最佳努力，不保证取证级擦除；建议同时启用 FileVault 并在离开时锁定 macOS 账户。",
      "privacy.appDiagnosticsTitle": "诊断、广告和账号",
      "privacy.appDiagnosticsBody": "当前核心工作流不要求创建 Cobolt 账号，不运行 Cobolt 广告追踪，也不把核心操作发送给 Cobolt 遥测服务。如果未来版本新增分析、崩溃报告、云同步或其他数据处理，我们会在功能发布前更新本声明，并在适用时提供选择。",
      "privacy.purchaseTitle": "2. 购买与 Apple",
      "privacy.purchaseBody": "Cobolt Pro 使用 Apple StoreKit 处理购买和恢复购买。付款卡信息由 Apple 处理，Cobolt 不接收你的完整支付信息。App 只需要读取 Apple 返回的商品或 entitlement 状态，以决定是否启用 Pro 功能。",
      "privacy.applePolicyLead": "Apple 可能按照其自身隐私政策处理 App Store、StoreKit 和设备相关信息。请参阅 ",
      "privacy.applePrivacy": "Apple 隐私政策",
      "privacy.applePolicyAnd": " 与 ",
      "privacy.appleTerms": "Apple 媒体服务条款",
      "privacy.applePolicyEnd": "。",
      "privacy.websiteTitle": "3. 官网与第三方",
      "privacy.websiteBody": "本官网是一个静态 GitHub Pages 站点。Cobolt 自己不设置广告 cookie、不要求登录，也不在此页面运行产品分析。GitHub 仍可能按照其服务条款和隐私声明处理标准的访问日志、网络安全信息与托管所需数据。请参阅 ",
      "privacy.githubPrivacy": "GitHub 隐私声明",
      "privacy.githubPrivacyEnd": "。",
      "privacy.thirdPartyBody": "页面中的 Apple、GitHub 或其他链接会把你带到第三方网站；第三方网站的处理方式由其各自的隐私声明负责。",
      "privacy.retentionTitle": "4. 保存、导出与删除",
      "privacy.retentionBody": "保险箱和文件会保留在你的 Mac 上，直到你在 Cobolt 或 Finder 中删除它们，或删除应用数据。你创建的加密备份和受密码保护的分享包是单独的本地副本，需要在各自的位置单独删除。Cobolt 没有一个替你保管这些文件的在线账号，因此不存在向 Cobolt 服务器申请“删除账户文件”的流程。",
      "privacy.retentionPassword": "如果你删除保险箱，请先确认已备份仍需要的内容。密码遗失且没有 recovery key 时，设计上无法恢复保险箱内容；这是一项安全边界，而不是 Cobolt 可以绕过的支持流程。",
      "privacy.contactTitle": "5. 联系我们",
      "privacy.contactBody": "如果你对隐私或数据处理有问题，请通过 ",
      "privacy.contactLink": "Cobolt GitHub Issues",
      "privacy.contactEnd": " 联系维护者。请不要在公开 issue 中上传密码、recovery key、真实身份证件或其他敏感文件。",
      "privacy.contactUpdate": "我们会在产品功能或数据实践发生实质变化时更新本页面，并在页面顶部更新生效日期。",
      "privacy.appStoreStrong": "面向 App Store 的链接：",
      "privacy.appStoreBody": "本页是 Cobolt 当前隐私政策的公开 URL，可在 App Store Connect 的 App Privacy 与 App Information 中使用。",
      "support.title": "需要帮忙？<br /><em>从这里开始。</em>",
      "support.eyebrow": "支持中心",
      "support.lede": "Cobolt 的目标是让“放进去、用完、锁上”足够简单。下面是当前 macOS 版本的快速说明。",
      "support.contactLabel": "支持联系",
      "support.contactLink": "在 GitHub Issues 留言 ↗",
      "support.startTitle": "创建你的第一个 vault",
      "support.startBody": "创建保险库并设置一个能妥善保存的密码。每个新保险库都会生成恢复密钥，仅显示一次；请存放在保险库之外，之后无法向 Cobolt 索取。",
      "support.stepCreate": "创建本地保险箱",
      "support.stepDrop": "拖入需要保护的文件",
      "support.stepLock": "锁定并确认状态回到“已锁定”",
      "support.startIndex": "从这里开始 / 01",
      "support.faqIndex": "常见问题 / 02",
      "support.faqTitle": "常见问题",
      "support.faqPasswordQ": "忘记密码怎么办？",
      "support.faqPasswordA": "使用创建保险库时保存的恢复密钥。如果密码与恢复密钥都已遗失，Cobolt 无法绕过加密。触控 ID 仅适用于当前设备，不能替代可携带的恢复密钥。",
      "support.faqUploadQ": "文件真的不会上传吗？",
      "support.faqUploadA": "当前核心工作流在 Mac 本地运行，文件对象、目录和解锁数据不会上传到 Cobolt 云端。购买 Cobolt Pro 时，Apple StoreKit 负责交易。",
      "support.faqQuickLookQ": "Quick Look 会不会留下明文？",
      "support.faqQuickLookA": "某些系统预览流程可能需要临时解密副本。Cobolt 在锁定或退出时会尽力清理；详细边界见",
      "support.faqQuickLookLink": "隐私声明",
      "support.faqQuickLookEnd": "。",
      "support.faqBackupQ": "可以备份或恢复保险箱吗？",
      "support.faqBackupA": "可以创建独立的加密备份并导出受保护文件。候选更新加入完整备份验证与恢复测试。请在另一块磁盘上保留副本，同一磁盘上的备份不能防止磁盘损坏。",
      "support.faqProQ": "Pro 版本多了什么？",
      "support.faqProA": "当前 App Store 1.0 版完全解锁。后续更新正在测试可选的一次性 Pro 内购，不是订阅。该更新的免费版包含一个管理位置的保险库、10 个文件和 1 GB；已有保险库的只读解锁、预览、导出及加密备份始终免费，无需购买。Pro 提供更大容量、自定义位置、编辑回存和本机正文搜索。",
      "support.contactTitle": "没有找到答案？",
      "support.contactBody": "在公开留言前，请不要附上密码、recovery key、身份证件或真实文件。描述你的 macOS 版本、Cobolt 版本和不含敏感信息的复现步骤，我们会尽力帮助。",
      "support.contactAction": "联系 Cobolt 支持",
      "support.contactIndex": "联系支持 / 03",
      "support.safetyTitle": "安全提示",
      "support.safetyBody": "密码遗失且没有 recovery key 时，设计上无法恢复保险箱内容。请把 recovery key 当作真正的备份钥匙。",
      "nav.download": "下载 Mac 版本",
      "home.availability": "支持 macOS 13 及以上。当前公开的 1.0 版完全解锁，后续更新正在测试可选的一次性 Pro 内购，不采用订阅；各地区价格以 App Store 为准。",
      "security.title": "安全与文件取回",
      "security.intro": "本地加密不应只有一句承诺，还应明确说明如何取回文件，以及它不能保护什么。",
      "security.date": "更新于 2026 年 10 月 24 日。编辑回存、正文搜索和完整备份演练属于候选版功能，尚未进入公开的 1.0 版。",
      "security.recoverTitle": "取回已有文件不以购买为前提",
      "security.recover": "妥善保存已关闭的完整 .vault 目录及密码或恢复密钥。在另一台 Mac 上选择“打开已有保险库”，即可用相同密码解锁。触控 ID 不会随目录迁移。候选版保留免费的只读解锁、预览、导出、历史版本导出和加密备份，无需购买或注册 Cobolt 账户。当前公开的 1.0 版完全解锁。",
      "security.keyTitle": "将恢复密钥放在保险库之外",
      "security.key": "每个新保险库都会生成仅显示一次的恢复密钥，建议单独保存在这台 Mac 之外。如果密码和恢复密钥都遗失，支持人员无法绕过加密。长且唯一的口令比允许的六字符最低长度更安全；应用的错误次数限制无法防止对复制出去的保险库进行离线猜测。",
      "security.backupTitle": "验证恢复，不只是复制",
      "security.backup": "请将备份保存在另一块磁盘。候选版只有在当前文件、加密废纸篓和历史版本全部认证成功后，才将解锁状态下创建的备份称为“已验证”；锁定时只是未验证的加密副本。请独立测试备份，导出样本并与原件比较后再依赖它，验证不能代替保留独立副本。",
      "security.boundaryTitle": "本地界面与明文边界",
      "security.bridge": "密码在随应用打包的本地 React 界面输入，经本地 WebKit bridge 传给 Swift，恢复密钥会在该界面显示一次。主密钥和文件内容加密留在原生层，不会向 Cobolt 服务器上传密码、密钥或文件。",
      "security.plaintext": "快速查看、外部编辑和导出可能产生明文文件，外部编辑器也可能保留自己的缓存或未保存文档。候选版会在锁定前保存工作副本；保存失败时会暂停锁定或退出并提示。离开 Mac 前请完成或丢弃编辑，同时锁定 macOS 账户。SSD 删除及 Swift/系统内存清理均为最佳努力，不是取证级擦除保证。",
      "security.search": "候选版正文搜索及可选 OCR 均在本机运行。正文仅在有上限的内存中缓存，锁定时清除，不写入 Spotlight。不支持或无法读取的文件会跳过；高级识别不可用时，界面会说明使用了基础英文 OCR。",
      "security.formatTitle": "公开格式说明，不冒充安全认证",
      "security.format": "格式 3 使用随机 256 位主密钥、PBKDF2-HMAC-SHA256 密码派生、逐文件 HKDF-SHA256 密钥及 AES-GCM 认证分块和清单。保险库名称与部分本地应用元数据仍可见，清单内的原文件名、标签和源文件引用经过加密。目录可以迁移，但不是自动处理云端冲突的同步格式。目前尚未完成独立安全审计。",
      "security.formatLink": "查看格式规范 →",
      "security.helpTitle": "求助时不要发送秘密",
      "security.help": "可以提供 Cobolt/macOS 版本、不含敏感内容的报错及使用示例文件的复现步骤。请勿在公开问题中发布密码、恢复密钥、私人原文件或证件。",
      "security.supportLink": "打开支持指南 →",
    }
  };



  const metadata = {
    guides: {
      title: "Private documents and tested backups — Cobolt",
      description: "Two practical Mac guides for protecting local documents and testing an encrypted vault backup.",
      zhTitle: "私密文档与备份实测指南 — Cobolt",
      zhDescription: "两篇可操作指南：保护 Mac 本地私密文档，以及验证加密保险库备份能否恢复。"
    },
    security: {
      title: "Security and recovery — Cobolt", description: "How Cobolt protects and recovers local files.",
      zhTitle: "安全与文件取回 — Cobolt", zhDescription: "了解 Cobolt 的本地加密、安全边界和文件取回方式。"
    },
    home: {
      title: "Cobolt — Private files. Protected on your Mac.",
      description: "Cobolt is a local-first private file safe for macOS. No account, no cloud dependency, and no tracking for the core task.",
      zhTitle: "Cobolt — 私密文件，留在你的 Mac",
      zhDescription: "Cobolt 是一款 local-first 的 macOS 私密文件保险箱。无需账号，不连接云端，让敏感文件留在你的 Mac。"
    },
    privacy: {
      title: "Privacy — Cobolt",
      description: "Cobolt privacy policy: how the app handles local files, purchases, and website visits.",
      zhTitle: "隐私声明 — Cobolt",
      zhDescription: "Cobolt 隐私声明：了解 Cobolt 如何处理本地文件、购买信息和网站访问。"
    },
    support: {
      title: "Support — Cobolt",
      description: "Cobolt support: learn about vaults, unlock, recovery keys, and Cobolt Pro.",
      zhTitle: "支持 — Cobolt",
      zhDescription: "Cobolt 支持中心：了解保险箱、解锁、recovery key 和 Cobolt Pro。"
    }
  };

  const storageKey = "cobolt-language";

  function readLanguage() {
    try {
      return window.localStorage.getItem(storageKey) === "zh" ? "zh" : "en";
    } catch (_) {
      return "en";
    }
  }

  function saveLanguage(language) {
    try {
      window.localStorage.setItem(storageKey, language);
    } catch (_) {
      // Private browsing can disable storage; the current page still switches.
    }
  }

  function applyLanguage(language, persist = true) {
    const activeLanguage = language === "zh" ? "zh" : "en";
    const isChinese = activeLanguage === "zh";
    const zh = translations.zh;

    document.documentElement.lang = isChinese ? "zh-CN" : "en";
    document.body.classList.toggle("lang-zh", isChinese);

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      if (!node.dataset.i18nEnglish) node.dataset.i18nEnglish = node.innerHTML;
      const value = isChinese && zh[node.dataset.i18n] ? zh[node.dataset.i18n] : node.dataset.i18nEnglish;
      node.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
      const [attribute, key] = node.dataset.i18nAttr.split("|");
      if (!attribute || !key) return;
      const originalAttribute = `data-i18n-original-${attribute}`;
      if (!node.hasAttribute(originalAttribute)) node.setAttribute(originalAttribute, node.getAttribute(attribute) || "");
      const value = isChinese && zh[key] ? zh[key] : node.getAttribute(originalAttribute);
      node.setAttribute(attribute, value);
    });

    const page = document.body.dataset.page;
    if (metadata[page]) {
      document.title = isChinese ? metadata[page].zhTitle : metadata[page].title;
      const description = document.querySelector("#meta-description");
      if (description) description.setAttribute("content", isChinese ? metadata[page].zhDescription : metadata[page].description);
    }

    const toggle = document.querySelector("#language-toggle");
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(isChinese));
      toggle.setAttribute("aria-label", isChinese ? "切换到英文" : "Switch to Chinese");
      const current = toggle.querySelector(".language-current");
      const other = toggle.querySelector(".language-other");
      if (current) current.textContent = isChinese ? "中文" : "EN";
      if (other) other.textContent = isChinese ? "EN" : "中文";
    }

    if (persist) saveLanguage(activeLanguage);
  }

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  const toggle = document.querySelector("#language-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      applyLanguage(document.documentElement.lang === "zh-CN" ? "en" : "zh");
    });
  }

  const lightbox = document.querySelector("#screenshot-lightbox");
  const lightboxImage = document.querySelector("#screenshot-lightbox-image");
  const lightboxClose = lightbox ? lightbox.querySelector(".screenshot-lightbox-close") : null;
  let lastScreenshotTrigger = null;

  function closeScreenshotLightbox() {
    if (!lightbox || lightbox.hidden) return;
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-open");
    if (lightboxImage) {
      lightboxImage.removeAttribute("src");
      lightboxImage.removeAttribute("alt");
    }
    if (lastScreenshotTrigger) lastScreenshotTrigger.focus();
  }

  if (lightbox && lightboxImage) {
    document.querySelectorAll(".screenshot-zoom").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const image = trigger.querySelector("img");
        if (!image) return;
        lastScreenshotTrigger = trigger;
        lightboxImage.src = image.currentSrc || image.src;
        lightboxImage.alt = image.alt;
        lightbox.hidden = false;
        document.body.classList.add("lightbox-open");
        if (lightboxClose) lightboxClose.focus();
      });
    });

    lightbox.querySelectorAll("[data-lightbox-close]").forEach((closeButton) => {
      closeButton.addEventListener("click", closeScreenshotLightbox);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeScreenshotLightbox();
    });
  }

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const revealNodes = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          instance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealNodes.forEach((node) => observer.observe(node));
  } else {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
  }

  applyLanguage(readLanguage(), false);
})();
