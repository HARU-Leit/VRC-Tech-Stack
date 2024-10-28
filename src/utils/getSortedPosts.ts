import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

/**
 * 投稿をフィルタリングしてソートする関数
 * @param posts - フィルタリングとソートを行う投稿の配列
 * @returns フィルタリングされ、日付でソートされた投稿の配列
 */
const getSortedPosts = (posts: CollectionEntry<"blog">[]) => {
  return posts
    .filter(postFilter) // postFilter関数でフィルタリング
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        ) // 日付を秒単位で比較してソート
    );
};

export default getSortedPosts;
