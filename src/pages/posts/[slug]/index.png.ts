import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { generateOgImageForPost } from "@utils/generateOgImages";
import { slugifyStr } from "@utils/slugify";

/**
 * ブログの投稿から静的パスを生成する関数
 * @returns 静的パスと投稿のプロパティを含むオブジェクトの配列
 */
export async function getStaticPaths() {
  // ブログの投稿を取得し、ドラフトとogImageがないものをフィルタリング
  const posts = await getCollection("blog").then(p =>
    p.filter(({ data }) => !data.draft && !data.ogImage)
  );

  // 各投稿のタイトルをスラグ化し、パスとプロパティを返す
  return posts.map(post => ({
    params: { slug: slugifyStr(post.data.title) },
    props: post,
  }));
}

/**
 * Open Graph画像を生成するAPIルート
 * @param props - 投稿のプロパティ
 * @returns 生成された画像のレスポンス
 */
export const GET: APIRoute = async ({ props }) =>
  // 生成された画像をレスポンスとして返す
  new Response(await generateOgImageForPost(props as CollectionEntry<"blog">), {
    headers: { "Content-Type": "image/png" },
  });
