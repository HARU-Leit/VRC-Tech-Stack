import type { CollectionEntry } from "astro:content";
import getSortedPosts from "./getSortedPosts";
import { slugifyAll } from "./slugify";

/**
 * 指定されたタグに一致する投稿を取得する関数
 * @param posts - 投稿の配列
 * @param tag - フィルタリングするタグ
 * @returns 指定されたタグに一致するソートされた投稿の配列
 */
const getPostsByTag = (posts: CollectionEntry<"blog">[], tag: string) =>
  getSortedPosts(
    posts.filter(post =>
      // 投稿のタグをスラグ化してフィルタリング
      slugifyAll(post.data.tags).includes(tag)
    )
  );

export default getPostsByTag;
