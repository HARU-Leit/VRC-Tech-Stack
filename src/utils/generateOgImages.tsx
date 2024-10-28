import { Resvg } from "@resvg/resvg-js";
import { type CollectionEntry } from "astro:content";
import postOgImage from "./og-templates/post";
import siteOgImage from "./og-templates/site";

/**
 * SVGバッファをPNGバッファに変換する関数
 * @param svg - 変換するSVG文字列
 * @returns PNGバッファ
 */
function svgBufferToPngBuffer(svg: string) {
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  return pngData.asPng();
}

/**
 * 投稿のOG画像を生成する関数
 * @param post - OG画像を生成する投稿
 * @returns 生成されたOG画像のPNGバッファ
 */
export async function generateOgImageForPost(post: CollectionEntry<"blog">) {
  const svg = await postOgImage(post); // 投稿用のOG画像テンプレートを取得
  return svgBufferToPngBuffer(svg); // SVGをPNGに変換して返す
}

/**
 * サイト全体のOG画像を生成する関数
 * @returns 生成されたOG画像のPNGバッファ
 */
export async function generateOgImageForSite() {
  const svg = await siteOgImage(); // サイト用のOG画像テンプレートを取得
  return svgBufferToPngBuffer(svg); // SVGをPNGに変換して返す
}
