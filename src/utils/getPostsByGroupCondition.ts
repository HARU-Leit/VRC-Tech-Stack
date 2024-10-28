import type { CollectionEntry } from "astro:content";

type GroupKey = string | number | symbol;

interface GroupFunction<T> {
  (item: T, index?: number): GroupKey;
}

/**
 * 投稿をグループ化する関数
 * @param posts - グループ化する投稿の配列
 * @param groupFunction - 各投稿をグループ化するための関数
 * @returns グループ化された投稿のオブジェクト
 */
const getPostsByGroupCondition = (
  posts: CollectionEntry<"blog">[],
  groupFunction: GroupFunction<CollectionEntry<"blog">>
) => {
  const result: Record<GroupKey, CollectionEntry<"blog">[]> = {};
  for (let i = 0; i < posts.length; i++) {
    const item = posts[i];
    const groupKey = groupFunction(item, i);
    // グループキーが存在しない場合、新しい配列を作成
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    // 投稿を対応するグループに追加
    result[groupKey].push(item);
  }
  return result;
};

export default getPostsByGroupCondition;
