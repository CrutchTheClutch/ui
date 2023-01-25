import { getColor, IColor, IColorMap, IColorShade } from ".";

/**
 * {@link https://tailwindcss.com/docs/customizing-colors}
 */

export function getHoverBgColor(color: IColor, shade: IColorShade = "500") {
  return getColor(hoverBgColorMap, color, shade);
}

export const hoverBgColorMap: IColorMap = {
  transparent: {
    none: "hover:bg-transparent",
  },
  black: {
    none: "hover:bg-black",
  },
  white: {
    none: "hover:bg-white",
  },
  brand: {
    "50": "hover:bg-brand-50",
    "100": "hover:bg-brand-100",
    "200": "hover:bg-brand-200",
    "300": "hover:bg-brand-300",
    "400": "hover:bg-brand-400",
    "500": "hover:bg-brand-500",
    "600": "hover:bg-brand-600",
    "700": "hover:bg-brand-700",
    "800": "hover:bg-brand-800",
    "900": "hover:bg-brand-900",
  },
  slate: {
    "50": "hover:bg-slate-50",
    "100": "hover:bg-slate-100",
    "200": "hover:bg-slate-200",
    "300": "hover:bg-slate-300",
    "400": "hover:bg-slate-400",
    "500": "hover:bg-slate-500",
    "600": "hover:bg-slate-600",
    "700": "hover:bg-slate-700",
    "800": "hover:bg-slate-800",
    "900": "hover:bg-slate-900",
  },
  gray: {
    "50": "hover:bg-gray-50",
    "100": "hover:bg-gray-100",
    "200": "hover:bg-gray-200",
    "300": "hover:bg-gray-300",
    "400": "hover:bg-gray-400",
    "500": "hover:bg-gray-500",
    "600": "hover:bg-gray-600",
    "700": "hover:bg-gray-700",
    "800": "hover:bg-gray-800",
    "900": "hover:bg-gray-900",
  },
  zinc: {
    "50": "hover:bg-zinc-50",
    "100": "hover:bg-zinc-100",
    "200": "hover:bg-zinc-200",
    "300": "hover:bg-zinc-300",
    "400": "hover:bg-zinc-400",
    "500": "hover:bg-zinc-500",
    "600": "hover:bg-zinc-600",
    "700": "hover:bg-zinc-700",
    "800": "hover:bg-zinc-800",
    "900": "hover:bg-zinc-900",
  },
  neutral: {
    "50": "hover:bg-neutral-50",
    "100": "hover:bg-neutral-100",
    "200": "hover:bg-neutral-200",
    "300": "hover:bg-neutral-300",
    "400": "hover:bg-neutral-400",
    "500": "hover:bg-neutral-500",
    "600": "hover:bg-neutral-600",
    "700": "hover:bg-neutral-700",
    "800": "hover:bg-neutral-800",
    "900": "hover:bg-neutral-900",
  },
  stone: {
    "50": "hover:bg-stone-50",
    "100": "hover:bg-stone-100",
    "200": "hover:bg-stone-200",
    "300": "hover:bg-stone-300",
    "400": "hover:bg-stone-400",
    "500": "hover:bg-stone-500",
    "600": "hover:bg-stone-600",
    "700": "hover:bg-stone-700",
    "800": "hover:bg-stone-800",
    "900": "hover:bg-stone-900",
  },
  red: {
    "50": "hover:bg-red-50",
    "100": "hover:bg-red-100",
    "200": "hover:bg-red-200",
    "300": "hover:bg-red-300",
    "400": "hover:bg-red-400",
    "500": "hover:bg-red-500",
    "600": "hover:bg-red-600",
    "700": "hover:bg-red-700",
    "800": "hover:bg-red-800",
    "900": "hover:bg-red-900",
  },
  orange: {
    "50": "hover:bg-orange-50",
    "100": "hover:bg-orange-100",
    "200": "hover:bg-orange-200",
    "300": "hover:bg-orange-300",
    "400": "hover:bg-orange-400",
    "500": "hover:bg-orange-500",
    "600": "hover:bg-orange-600",
    "700": "hover:bg-orange-700",
    "800": "hover:bg-orange-800",
    "900": "hover:bg-orange-900",
  },
  amber: {
    "50": "hover:bg-amber-50",
    "100": "hover:bg-amber-100",
    "200": "hover:bg-amber-200",
    "300": "hover:bg-amber-300",
    "400": "hover:bg-amber-400",
    "500": "hover:bg-amber-500",
    "600": "hover:bg-amber-600",
    "700": "hover:bg-amber-700",
    "800": "hover:bg-amber-800",
    "900": "hover:bg-amber-900",
  },
  yellow: {
    "50": "hover:bg-yellow-50",
    "100": "hover:bg-yellow-100",
    "200": "hover:bg-yellow-200",
    "300": "hover:bg-yellow-300",
    "400": "hover:bg-yellow-400",
    "500": "hover:bg-yellow-500",
    "600": "hover:bg-yellow-600",
    "700": "hover:bg-yellow-700",
    "800": "hover:bg-yellow-800",
    "900": "hover:bg-yellow-900",
  },
  lime: {
    "50": "hover:bg-lime-50",
    "100": "hover:bg-lime-100",
    "200": "hover:bg-lime-200",
    "300": "hover:bg-lime-300",
    "400": "hover:bg-lime-400",
    "500": "hover:bg-lime-500",
    "600": "hover:bg-lime-600",
    "700": "hover:bg-lime-700",
    "800": "hover:bg-lime-800",
    "900": "hover:bg-lime-900",
  },
  green: {
    "50": "hover:bg-green-50",
    "100": "hover:bg-green-100",
    "200": "hover:bg-green-200",
    "300": "hover:bg-green-300",
    "400": "hover:bg-green-400",
    "500": "hover:bg-green-500",
    "600": "hover:bg-green-600",
    "700": "hover:bg-green-700",
    "800": "hover:bg-green-800",
    "900": "hover:bg-green-900",
  },
  emerald: {
    "50": "hover:bg-emerald-50",
    "100": "hover:bg-emerald-100",
    "200": "hover:bg-emerald-200",
    "300": "hover:bg-emerald-300",
    "400": "hover:bg-emerald-400",
    "500": "hover:bg-emerald-500",
    "600": "hover:bg-emerald-600",
    "700": "hover:bg-emerald-700",
    "800": "hover:bg-emerald-800",
    "900": "hover:bg-emerald-900",
  },
  teal: {
    "50": "hover:bg-teal-50",
    "100": "hover:bg-teal-100",
    "200": "hover:bg-teal-200",
    "300": "hover:bg-teal-300",
    "400": "hover:bg-teal-400",
    "500": "hover:bg-teal-500",
    "600": "hover:bg-teal-600",
    "700": "hover:bg-teal-700",
    "800": "hover:bg-teal-800",
    "900": "hover:bg-teal-900",
  },
  cyan: {
    "50": "hover:bg-cyan-50",
    "100": "hover:bg-cyan-100",
    "200": "hover:bg-cyan-200",
    "300": "hover:bg-cyan-300",
    "400": "hover:bg-cyan-400",
    "500": "hover:bg-cyan-500",
    "600": "hover:bg-cyan-600",
    "700": "hover:bg-cyan-700",
    "800": "hover:bg-cyan-800",
    "900": "hover:bg-cyan-900",
  },
  sky: {
    "50": "hover:bg-sky-50",
    "100": "hover:bg-sky-100",
    "200": "hover:bg-sky-200",
    "300": "hover:bg-sky-300",
    "400": "hover:bg-sky-400",
    "500": "hover:bg-sky-500",
    "600": "hover:bg-sky-600",
    "700": "hover:bg-sky-700",
    "800": "hover:bg-sky-800",
    "900": "hover:bg-sky-900",
  },
  blue: {
    "50": "hover:bg-blue-50",
    "100": "hover:bg-blue-100",
    "200": "hover:bg-blue-200",
    "300": "hover:bg-blue-300",
    "400": "hover:bg-blue-400",
    "500": "hover:bg-blue-500",
    "600": "hover:bg-blue-600",
    "700": "hover:bg-blue-700",
    "800": "hover:bg-blue-800",
    "900": "hover:bg-blue-900",
  },
  indigo: {
    "50": "hover:bg-indigo-50",
    "100": "hover:bg-indigo-100",
    "200": "hover:bg-indigo-200",
    "300": "hover:bg-indigo-300",
    "400": "hover:bg-indigo-400",
    "500": "hover:bg-indigo-500",
    "600": "hover:bg-indigo-600",
    "700": "hover:bg-indigo-700",
    "800": "hover:bg-indigo-800",
    "900": "hover:bg-indigo-900",
  },
  violet: {
    "50": "hover:bg-violet-50",
    "100": "hover:bg-violet-100",
    "200": "hover:bg-violet-200",
    "300": "hover:bg-violet-300",
    "400": "hover:bg-violet-400",
    "500": "hover:bg-violet-500",
    "600": "hover:bg-violet-600",
    "700": "hover:bg-violet-700",
    "800": "hover:bg-violet-800",
    "900": "hover:bg-violet-900",
  },
  purple: {
    "50": "hover:bg-purple-50",
    "100": "hover:bg-purple-100",
    "200": "hover:bg-purple-200",
    "300": "hover:bg-purple-300",
    "400": "hover:bg-purple-400",
    "500": "hover:bg-purple-500",
    "600": "hover:bg-purple-600",
    "700": "hover:bg-purple-700",
    "800": "hover:bg-purple-800",
    "900": "hover:bg-purple-900",
  },
  fuchsia: {
    "50": "hover:bg-fuchsia-50",
    "100": "hover:bg-fuchsia-100",
    "200": "hover:bg-fuchsia-200",
    "300": "hover:bg-fuchsia-300",
    "400": "hover:bg-fuchsia-400",
    "500": "hover:bg-fuchsia-500",
    "600": "hover:bg-fuchsia-600",
    "700": "hover:bg-fuchsia-700",
    "800": "hover:bg-fuchsia-800",
    "900": "hover:bg-fuchsia-900",
  },
  pink: {
    "50": "hover:bg-pink-50",
    "100": "hover:bg-pink-100",
    "200": "hover:bg-pink-200",
    "300": "hover:bg-pink-300",
    "400": "hover:bg-pink-400",
    "500": "hover:bg-pink-500",
    "600": "hover:bg-pink-600",
    "700": "hover:bg-pink-700",
    "800": "hover:bg-pink-800",
    "900": "hover:bg-pink-900",
  },
  rose: {
    "50": "hover:bg-rose-50",
    "100": "hover:bg-rose-100",
    "200": "hover:bg-rose-200",
    "300": "hover:bg-rose-300",
    "400": "hover:bg-rose-400",
    "500": "hover:bg-rose-500",
    "600": "hover:bg-rose-600",
    "700": "hover:bg-rose-700",
    "800": "hover:bg-rose-800",
    "900": "hover:bg-rose-900",
  },
};
