import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

interface Tag {
  tag: string;
  tagName: string;
}

/**
 * ブログ投稿から一意のタグを取得する関数
 * @param posts - ブログ投稿のコレクション
 * @returns 一意のタグの配列
 */
const getUniqueTags = (posts: CollectionEntry<"blog">[]) => {
  // 投稿をフィルタリング
  const tags: Tag[] = posts
    .filter(postFilter)
    // タグをフラット化
    .flatMap(post => post.data.tags)
    // タグをスラグ化
    .map(tag => ({ tag: slugifyStr(tag), tagName: tag }))
    // 一意のタグをフィルタリング
    .filter(
      (value, index, self) =>
        self.findIndex(tag => tag.tag === value.tag) === index
    )
    // タグをアルファベット順にソート
    .sort((tagA, tagB) => tagA.tag.localeCompare(tagB.tag));
  return tags;
};

export default getUniqueTags;
