import type { Site, SocialObjects } from "./types";

// サイトの設定
export const SITE: Site = {
  website: "https://www.google.co.jp/", // これをデプロイされたドメインに置き換えてください
  author: "Haru",
  profile: "",
  desc: "VRChatの技術スタックについてのブログです。",
  title: "VRC Tech Stack",
  ogImage: "VTS-og.jpg",
  lightAndDarkMode: true, // ライトモードとダークモードのサポート
  postPerIndex: 4, // インデックスページごとの投稿数
  postPerPage: 3, // ページごとの投稿数
  scheduledPostMargin: 15 * 60 * 1000, // 15分
  showArchives: true, // アーカイブを表示するかどうか
  editPost: {
    url: "https://github.com/satnaing/astro-paper/edit/main/src/content/blog",
    text: "変更を提案", // 編集リンクのテキスト
    appendFilePath: true, // ファイルパスをリンクに追加するかどうか
  },
};

// ロケールの設定
export const LOCALE = {
  lang: "ja", // htmlのlangコード。これを空にするとデフォルトは"ja"になります
  langTag: ["ja-JP"], // BCP 47言語タグ。これを空の[]に設定すると環境のデフォルトが使用されます
} as const;

// ロゴ画像の設定
export const LOGO_IMAGE = {
  enable: false, // ロゴ画像を有効にするかどうか
  svg: true, // SVG形式のロゴ画像を使用するかどうか
  width: 216, // ロゴ画像の幅
  height: 46, // ロゴ画像の高さ
};

/**
 * ソーシャルリンクの設定
 * @type {SocialObjects}
 */
export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: ` ${SITE.title} on Github`,
    active: true, // ソーシャルリンクを有効にするかどうか
  },
  {
    name: "Facebook",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/Haru0416_VRC",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
  {
    name: "BuyMeACoffee",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on BuyMeACoffee`,
    active: true,
  },
];
