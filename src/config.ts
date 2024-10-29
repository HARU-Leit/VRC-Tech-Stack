import type { Site, SocialObjects } from "./types";

// サイトの設定
export const SITE: Site = {
  website: "https://vts-2ss.pages.dev/", // これをデプロイされたドメインに置き換えてください
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
    url: "https://github.com/HARU-Leit/VRC-Tech-Stack/edit/main/src/content/blog",
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
    href: "https://github.com/HARU-Leit/VRC-Tech-Stack",
    linkTitle: ` ${SITE.title} on Github`,
    active: true, // ソーシャルリンクを有効にするかどうか
  },
  {
    name: "Mail",
    href: "mailto:haru.leit@gmail.com",
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
    name: "YouTube",
    href: "https://github.com/HARU-Leit/VRC-Tech-Stack",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/HARU-Leit/VRC-Tech-Stack",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "BuyMeACoffee",
    href: "https://buymeacoffee.com/haru0416",
    linkTitle: `${SITE.title} on BuyMeACoffee`,
    active: true,
  },
];
