import { getColor, IColor, IColorMap, IColorShade } from ".";

/**
 * {@link https://tailwindcss.com/docs/customizing-colors}
 */

export function getOutlineColor(color: IColor, shade: IColorShade = "500") {
  return getColor(outlineColorMap, color, shade);
}

const outlineColorMap: IColorMap = {
  transparent: {
    none: "outline-transparent",
  },
  black: {
    none: "outline-black",
  },
  white: {
    none: "outline-white",
  },
  brand: {
    "50": "outline-brand-50",
    "100": "outline-brand-100",
    "200": "outline-brand-200",
    "300": "outline-brand-300",
    "400": "outline-brand-400",
    "500": "outline-brand-500",
    "600": "outline-brand-600",
    "700": "outline-brand-700",
    "800": "outline-brand-800",
    "900": "outline-brand-900",
  },
  slate: {
    "50": "outline-slate-50",
    "100": "outline-slate-100",
    "200": "outline-slate-200",
    "300": "outline-slate-300",
    "400": "outline-slate-400",
    "500": "outline-slate-500",
    "600": "outline-slate-600",
    "700": "outline-slate-700",
    "800": "outline-slate-800",
    "900": "outline-slate-900",
  },
  gray: {
    "50": "outline-gray-50",
    "100": "outline-gray-100",
    "200": "outline-gray-200",
    "300": "outline-gray-300",
    "400": "outline-gray-400",
    "500": "outline-gray-500",
    "600": "outline-gray-600",
    "700": "outline-gray-700",
    "800": "outline-gray-800",
    "900": "outline-gray-900",
  },
  zinc: {
    "50": "outline-zinc-50",
    "100": "outline-zinc-100",
    "200": "outline-zinc-200",
    "300": "outline-zinc-300",
    "400": "outline-zinc-400",
    "500": "outline-zinc-500",
    "600": "outline-zinc-600",
    "700": "outline-zinc-700",
    "800": "outline-zinc-800",
    "900": "outline-zinc-900",
  },
  neutral: {
    "50": "outline-neutral-50",
    "100": "outline-neutral-100",
    "200": "outline-neutral-200",
    "300": "outline-neutral-300",
    "400": "outline-neutral-400",
    "500": "outline-neutral-500",
    "600": "outline-neutral-600",
    "700": "outline-neutral-700",
    "800": "outline-neutral-800",
    "900": "outline-neutral-900",
  },
  stone: {
    "50": "outline-stone-50",
    "100": "outline-stone-100",
    "200": "outline-stone-200",
    "300": "outline-stone-300",
    "400": "outline-stone-400",
    "500": "outline-stone-500",
    "600": "outline-stone-600",
    "700": "outline-stone-700",
    "800": "outline-stone-800",
    "900": "outline-stone-900",
  },
  red: {
    "50": "outline-red-50",
    "100": "outline-red-100",
    "200": "outline-red-200",
    "300": "outline-red-300",
    "400": "outline-red-400",
    "500": "outline-red-500",
    "600": "outline-red-600",
    "700": "outline-red-700",
    "800": "outline-red-800",
    "900": "outline-red-900",
  },
  orange: {
    "50": "outline-orange-50",
    "100": "outline-orange-100",
    "200": "outline-orange-200",
    "300": "outline-orange-300",
    "400": "outline-orange-400",
    "500": "outline-orange-500",
    "600": "outline-orange-600",
    "700": "outline-orange-700",
    "800": "outline-orange-800",
    "900": "outline-orange-900",
  },
  amber: {
    "50": "outline-amber-50",
    "100": "outline-amber-100",
    "200": "outline-amber-200",
    "300": "outline-amber-300",
    "400": "outline-amber-400",
    "500": "outline-amber-500",
    "600": "outline-amber-600",
    "700": "outline-amber-700",
    "800": "outline-amber-800",
    "900": "outline-amber-900",
  },
  yellow: {
    "50": "outline-yellow-50",
    "100": "outline-yellow-100",
    "200": "outline-yellow-200",
    "300": "outline-yellow-300",
    "400": "outline-yellow-400",
    "500": "outline-yellow-500",
    "600": "outline-yellow-600",
    "700": "outline-yellow-700",
    "800": "outline-yellow-800",
    "900": "outline-yellow-900",
  },
  lime: {
    "50": "outline-lime-50",
    "100": "outline-lime-100",
    "200": "outline-lime-200",
    "300": "outline-lime-300",
    "400": "outline-lime-400",
    "500": "outline-lime-500",
    "600": "outline-lime-600",
    "700": "outline-lime-700",
    "800": "outline-lime-800",
    "900": "outline-lime-900",
  },
  green: {
    "50": "outline-green-50",
    "100": "outline-green-100",
    "200": "outline-green-200",
    "300": "outline-green-300",
    "400": "outline-green-400",
    "500": "outline-green-500",
    "600": "outline-green-600",
    "700": "outline-green-700",
    "800": "outline-green-800",
    "900": "outline-green-900",
  },
  emerald: {
    "50": "outline-emerald-50",
    "100": "outline-emerald-100",
    "200": "outline-emerald-200",
    "300": "outline-emerald-300",
    "400": "outline-emerald-400",
    "500": "outline-emerald-500",
    "600": "outline-emerald-600",
    "700": "outline-emerald-700",
    "800": "outline-emerald-800",
    "900": "outline-emerald-900",
  },
  teal: {
    "50": "outline-teal-50",
    "100": "outline-teal-100",
    "200": "outline-teal-200",
    "300": "outline-teal-300",
    "400": "outline-teal-400",
    "500": "outline-teal-500",
    "600": "outline-teal-600",
    "700": "outline-teal-700",
    "800": "outline-teal-800",
    "900": "outline-teal-900",
  },
  cyan: {
    "50": "outline-cyan-50",
    "100": "outline-cyan-100",
    "200": "outline-cyan-200",
    "300": "outline-cyan-300",
    "400": "outline-cyan-400",
    "500": "outline-cyan-500",
    "600": "outline-cyan-600",
    "700": "outline-cyan-700",
    "800": "outline-cyan-800",
    "900": "outline-cyan-900",
  },
  sky: {
    "50": "outline-sky-50",
    "100": "outline-sky-100",
    "200": "outline-sky-200",
    "300": "outline-sky-300",
    "400": "outline-sky-400",
    "500": "outline-sky-500",
    "600": "outline-sky-600",
    "700": "outline-sky-700",
    "800": "outline-sky-800",
    "900": "outline-sky-900",
  },
  blue: {
    "50": "outline-blue-50",
    "100": "outline-blue-100",
    "200": "outline-blue-200",
    "300": "outline-blue-300",
    "400": "outline-blue-400",
    "500": "outline-blue-500",
    "600": "outline-blue-600",
    "700": "outline-blue-700",
    "800": "outline-blue-800",
    "900": "outline-blue-900",
  },
  indigo: {
    "50": "outline-indigo-50",
    "100": "outline-indigo-100",
    "200": "outline-indigo-200",
    "300": "outline-indigo-300",
    "400": "outline-indigo-400",
    "500": "outline-indigo-500",
    "600": "outline-indigo-600",
    "700": "outline-indigo-700",
    "800": "outline-indigo-800",
    "900": "outline-indigo-900",
  },
  violet: {
    "50": "outline-violet-50",
    "100": "outline-violet-100",
    "200": "outline-violet-200",
    "300": "outline-violet-300",
    "400": "outline-violet-400",
    "500": "outline-violet-500",
    "600": "outline-violet-600",
    "700": "outline-violet-700",
    "800": "outline-violet-800",
    "900": "outline-violet-900",
  },
  purple: {
    "50": "outline-purple-50",
    "100": "outline-purple-100",
    "200": "outline-purple-200",
    "300": "outline-purple-300",
    "400": "outline-purple-400",
    "500": "outline-purple-500",
    "600": "outline-purple-600",
    "700": "outline-purple-700",
    "800": "outline-purple-800",
    "900": "outline-purple-900",
  },
  fuchsia: {
    "50": "outline-fuchsia-50",
    "100": "outline-fuchsia-100",
    "200": "outline-fuchsia-200",
    "300": "outline-fuchsia-300",
    "400": "outline-fuchsia-400",
    "500": "outline-fuchsia-500",
    "600": "outline-fuchsia-600",
    "700": "outline-fuchsia-700",
    "800": "outline-fuchsia-800",
    "900": "outline-fuchsia-900",
  },
  pink: {
    "50": "outline-pink-50",
    "100": "outline-pink-100",
    "200": "outline-pink-200",
    "300": "outline-pink-300",
    "400": "outline-pink-400",
    "500": "outline-pink-500",
    "600": "outline-pink-600",
    "700": "outline-pink-700",
    "800": "outline-pink-800",
    "900": "outline-pink-900",
  },
  rose: {
    "50": "outline-rose-50",
    "100": "outline-rose-100",
    "200": "outline-rose-200",
    "300": "outline-rose-300",
    "400": "outline-rose-400",
    "500": "outline-rose-500",
    "600": "outline-rose-600",
    "700": "outline-rose-700",
    "800": "outline-rose-800",
    "900": "outline-rose-900",
  },
};
