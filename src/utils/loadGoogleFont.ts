import type { FontStyle, FontWeight } from "satori";

export type FontOptions = {
  name: string;
  data: ArrayBuffer;
  weight: FontWeight | undefined;
  style: FontStyle | undefined;
};

/**
 * Googleフォントをロードする非同期関数
 * @param font フォント名
 * @param text テキスト
 * @returns フォントデータのArrayBuffer
 */
async function loadGoogleFont(
  font: string,
  text: string
): Promise<ArrayBuffer> {
  // Google Fonts APIのURLを生成
  const API = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;

  // CSSを取得
  const css = await (
    await fetch(API, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    })
  ).text();

  // フォントリソースのURLを抽出
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (!resource) throw new Error("Failed to download dynamic font");

  // フォントデータを取得
  const res = await fetch(resource[1]);

  if (!res.ok) {
    throw new Error("Failed to download dynamic font. Status: " + res.status);
  }

  // フォントデータをArrayBufferとして返す
  const fonts: ArrayBuffer = await res.arrayBuffer();
  return fonts;
}

/**
 * 複数のGoogleフォントをロードする非同期関数
 * @param text テキスト
 * @returns フォントデータの配列
 */
async function loadGoogleFonts(
  text: string
): Promise<
  Array<{ name: string; data: ArrayBuffer; weight: number; style: string }>
> {
  // ロードするフォントの設定
  const fontsConfig = [
    {
      name: "IBM Plex Mono",
      font: "IBM+Plex+Mono",
      weight: 400,
      style: "normal",
    },
    {
      name: "IBM Plex Mono",
      font: "IBM+Plex+Mono:wght@700",
      weight: 700,
      style: "bold",
    },
  ];

  // フォントを並行してロード
  const fonts = await Promise.all(
    fontsConfig.map(async ({ name, font, weight, style }) => {
      const data = await loadGoogleFont(font, text);
      return { name, data, weight, style };
    })
  );

  return fonts;
}

export default loadGoogleFonts;
