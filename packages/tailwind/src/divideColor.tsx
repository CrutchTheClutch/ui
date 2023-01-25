import { getColor, IColor, IColorMap, IColorShade } from ".";

/**
 * {@link https://tailwindcss.com/docs/customizing-colors}
 */

export function getDivideColor(color: IColor, shade: IColorShade = "500") {
  return getColor(divideColorMap, color, shade);
}

const divideColorMap: IColorMap = {
  transparent: {
    none: "divide-transparent",
  },
  black: {
    none: "divide-black",
  },
  white: {
    none: "divide-white",
  },
  brand: {
    "50": "divide-brand-50",
    "100": "divide-brand-100",
    "200": "divide-brand-200",
    "300": "divide-brand-300",
    "400": "divide-brand-400",
    "500": "divide-brand-500",
    "600": "divide-brand-600",
    "700": "divide-brand-700",
    "800": "divide-brand-800",
    "900": "divide-brand-900",
  },
  slate: {
    "50": "divide-slate-50",
    "100": "divide-slate-100",
    "200": "divide-slate-200",
    "300": "divide-slate-300",
    "400": "divide-slate-400",
    "500": "divide-slate-500",
    "600": "divide-slate-600",
    "700": "divide-slate-700",
    "800": "divide-slate-800",
    "900": "divide-slate-900",
  },
  gray: {
    "50": "divide-gray-50",
    "100": "divide-gray-100",
    "200": "divide-gray-200",
    "300": "divide-gray-300",
    "400": "divide-gray-400",
    "500": "divide-gray-500",
    "600": "divide-gray-600",
    "700": "divide-gray-700",
    "800": "divide-gray-800",
    "900": "divide-gray-900",
  },
  zinc: {
    "50": "divide-zinc-50",
    "100": "divide-zinc-100",
    "200": "divide-zinc-200",
    "300": "divide-zinc-300",
    "400": "divide-zinc-400",
    "500": "divide-zinc-500",
    "600": "divide-zinc-600",
    "700": "divide-zinc-700",
    "800": "divide-zinc-800",
    "900": "divide-zinc-900",
  },
  neutral: {
    "50": "divide-neutral-50",
    "100": "divide-neutral-100",
    "200": "divide-neutral-200",
    "300": "divide-neutral-300",
    "400": "divide-neutral-400",
    "500": "divide-neutral-500",
    "600": "divide-neutral-600",
    "700": "divide-neutral-700",
    "800": "divide-neutral-800",
    "900": "divide-neutral-900",
  },
  stone: {
    "50": "divide-stone-50",
    "100": "divide-stone-100",
    "200": "divide-stone-200",
    "300": "divide-stone-300",
    "400": "divide-stone-400",
    "500": "divide-stone-500",
    "600": "divide-stone-600",
    "700": "divide-stone-700",
    "800": "divide-stone-800",
    "900": "divide-stone-900",
  },
  red: {
    "50": "divide-red-50",
    "100": "divide-red-100",
    "200": "divide-red-200",
    "300": "divide-red-300",
    "400": "divide-red-400",
    "500": "divide-red-500",
    "600": "divide-red-600",
    "700": "divide-red-700",
    "800": "divide-red-800",
    "900": "divide-red-900",
  },
  orange: {
    "50": "divide-orange-50",
    "100": "divide-orange-100",
    "200": "divide-orange-200",
    "300": "divide-orange-300",
    "400": "divide-orange-400",
    "500": "divide-orange-500",
    "600": "divide-orange-600",
    "700": "divide-orange-700",
    "800": "divide-orange-800",
    "900": "divide-orange-900",
  },
  amber: {
    "50": "divide-amber-50",
    "100": "divide-amber-100",
    "200": "divide-amber-200",
    "300": "divide-amber-300",
    "400": "divide-amber-400",
    "500": "divide-amber-500",
    "600": "divide-amber-600",
    "700": "divide-amber-700",
    "800": "divide-amber-800",
    "900": "divide-amber-900",
  },
  yellow: {
    "50": "divide-yellow-50",
    "100": "divide-yellow-100",
    "200": "divide-yellow-200",
    "300": "divide-yellow-300",
    "400": "divide-yellow-400",
    "500": "divide-yellow-500",
    "600": "divide-yellow-600",
    "700": "divide-yellow-700",
    "800": "divide-yellow-800",
    "900": "divide-yellow-900",
  },
  lime: {
    "50": "divide-lime-50",
    "100": "divide-lime-100",
    "200": "divide-lime-200",
    "300": "divide-lime-300",
    "400": "divide-lime-400",
    "500": "divide-lime-500",
    "600": "divide-lime-600",
    "700": "divide-lime-700",
    "800": "divide-lime-800",
    "900": "divide-lime-900",
  },
  green: {
    "50": "divide-green-50",
    "100": "divide-green-100",
    "200": "divide-green-200",
    "300": "divide-green-300",
    "400": "divide-green-400",
    "500": "divide-green-500",
    "600": "divide-green-600",
    "700": "divide-green-700",
    "800": "divide-green-800",
    "900": "divide-green-900",
  },
  emerald: {
    "50": "divide-emerald-50",
    "100": "divide-emerald-100",
    "200": "divide-emerald-200",
    "300": "divide-emerald-300",
    "400": "divide-emerald-400",
    "500": "divide-emerald-500",
    "600": "divide-emerald-600",
    "700": "divide-emerald-700",
    "800": "divide-emerald-800",
    "900": "divide-emerald-900",
  },
  teal: {
    "50": "divide-teal-50",
    "100": "divide-teal-100",
    "200": "divide-teal-200",
    "300": "divide-teal-300",
    "400": "divide-teal-400",
    "500": "divide-teal-500",
    "600": "divide-teal-600",
    "700": "divide-teal-700",
    "800": "divide-teal-800",
    "900": "divide-teal-900",
  },
  cyan: {
    "50": "divide-cyan-50",
    "100": "divide-cyan-100",
    "200": "divide-cyan-200",
    "300": "divide-cyan-300",
    "400": "divide-cyan-400",
    "500": "divide-cyan-500",
    "600": "divide-cyan-600",
    "700": "divide-cyan-700",
    "800": "divide-cyan-800",
    "900": "divide-cyan-900",
  },
  sky: {
    "50": "divide-sky-50",
    "100": "divide-sky-100",
    "200": "divide-sky-200",
    "300": "divide-sky-300",
    "400": "divide-sky-400",
    "500": "divide-sky-500",
    "600": "divide-sky-600",
    "700": "divide-sky-700",
    "800": "divide-sky-800",
    "900": "divide-sky-900",
  },
  blue: {
    "50": "divide-blue-50",
    "100": "divide-blue-100",
    "200": "divide-blue-200",
    "300": "divide-blue-300",
    "400": "divide-blue-400",
    "500": "divide-blue-500",
    "600": "divide-blue-600",
    "700": "divide-blue-700",
    "800": "divide-blue-800",
    "900": "divide-blue-900",
  },
  indigo: {
    "50": "divide-indigo-50",
    "100": "divide-indigo-100",
    "200": "divide-indigo-200",
    "300": "divide-indigo-300",
    "400": "divide-indigo-400",
    "500": "divide-indigo-500",
    "600": "divide-indigo-600",
    "700": "divide-indigo-700",
    "800": "divide-indigo-800",
    "900": "divide-indigo-900",
  },
  violet: {
    "50": "divide-violet-50",
    "100": "divide-violet-100",
    "200": "divide-violet-200",
    "300": "divide-violet-300",
    "400": "divide-violet-400",
    "500": "divide-violet-500",
    "600": "divide-violet-600",
    "700": "divide-violet-700",
    "800": "divide-violet-800",
    "900": "divide-violet-900",
  },
  purple: {
    "50": "divide-purple-50",
    "100": "divide-purple-100",
    "200": "divide-purple-200",
    "300": "divide-purple-300",
    "400": "divide-purple-400",
    "500": "divide-purple-500",
    "600": "divide-purple-600",
    "700": "divide-purple-700",
    "800": "divide-purple-800",
    "900": "divide-purple-900",
  },
  fuchsia: {
    "50": "divide-fuchsia-50",
    "100": "divide-fuchsia-100",
    "200": "divide-fuchsia-200",
    "300": "divide-fuchsia-300",
    "400": "divide-fuchsia-400",
    "500": "divide-fuchsia-500",
    "600": "divide-fuchsia-600",
    "700": "divide-fuchsia-700",
    "800": "divide-fuchsia-800",
    "900": "divide-fuchsia-900",
  },
  pink: {
    "50": "divide-pink-50",
    "100": "divide-pink-100",
    "200": "divide-pink-200",
    "300": "divide-pink-300",
    "400": "divide-pink-400",
    "500": "divide-pink-500",
    "600": "divide-pink-600",
    "700": "divide-pink-700",
    "800": "divide-pink-800",
    "900": "divide-pink-900",
  },
  rose: {
    "50": "divide-rose-50",
    "100": "divide-rose-100",
    "200": "divide-rose-200",
    "300": "divide-rose-300",
    "400": "divide-rose-400",
    "500": "divide-rose-500",
    "600": "divide-rose-600",
    "700": "divide-rose-700",
    "800": "divide-rose-800",
    "900": "divide-rose-900",
  },
};
