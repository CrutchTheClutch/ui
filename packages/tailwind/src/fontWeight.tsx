/**
 * {@link https://tailwindcss.com/docs/font-weight}
 */

const fontWeight = [
  "font-thin",
  "font-extralight",
  "font-light",
  "font-normal",
  "font-medium",
  "font-semibold",
  "font-bold",
  "font-extrabold",
  "font-black",
] as const;

export type IFontWeight = typeof fontWeight[number];

export interface IWithFontWeight {
  fontWeight?: IFontWeight;
}
