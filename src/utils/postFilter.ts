import { SITE } from "@config";
import type { CollectionEntry } from "astro:content";

/**
 * ブログ投稿をフィルタリングする関数
 * @param {CollectionEntry<"blog">} param0 - ブログ投稿のデータ
 * @returns {boolean} - 投稿がドラフトでなく、公開時間が過ぎているか、開発環境である場合にtrueを返す
 */
const postFilter = ({ data }: CollectionEntry<"blog">) => {
  // 公開時間が過ぎているかどうかをチェック
  const isPublishTimePassed =
    Date.now() >
    new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
  // ドラフトでないか、開発環境である場合にtrueを返す
  return !data.draft && (import.meta.env.DEV || isPublishTimePassed);
};

export default postFilter;
