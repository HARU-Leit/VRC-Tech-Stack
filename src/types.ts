import type socialIcons from "@assets/socialIcons";

/**
 * サイトの情報を表す型
 */
export type Site = {
  website: string; // サイトのURL
  author: string; // 著者の名前
  profile: string; // プロフィール情報
  desc: string; // サイトの説明
  title: string; // サイトのタイトル
  ogImage?: string; // OGイメージのURL（オプション）
  lightAndDarkMode: boolean; // ライトモードとダークモードの切り替え
  postPerIndex: number; // インデックスごとの投稿数
  postPerPage: number; // ページごとの投稿数
  scheduledPostMargin: number; // 予定投稿のマージン
  showArchives?: boolean; // アーカイブ表示の有無（オプション）
  editPost?: {
    url?: URL["href"]; // 編集URL（オプション）
    text?: string; // 編集テキスト（オプション）
    appendFilePath?: boolean; // ファイルパスの追加（オプション）
  };
};

/**
 * ソーシャルオブジェクトの配列を表す型
 */
export type SocialObjects = {
  name: keyof typeof socialIcons; // ソーシャルアイコンの名前
  href: string; // リンクのURL
  active: boolean; // アクティブ状態
  linkTitle: string; // リンクのタイトル
}[];
