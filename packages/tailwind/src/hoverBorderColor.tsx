import { getColor, IColor, IColorMap, IColorShade } from ".";

/**
 * {@link https://tailwindcss.com/docs/customizing-colors}
 */

export function getHoverBorderColor(color: IColor, shade: IColorShade = "500") {
  return getColor(hoverBorderColorMap, color, shade);
}

const hoverBorderColorMap: IColorMap = {
  transparent: {
    none: "hover:border-transparent",
  },
  black: {
    none: "hover:border-black",
  },
  white: {
    none: "hover:border-white",
  },
  brand: {
    "50": "hover:border-brand-50",
    "100": "hover:border-brand-100",
    "200": "hover:border-brand-200",
    "300": "hover:border-brand-300",
    "400": "hover:border-brand-400",
    "500": "hover:border-brand-500",
    "600": "hover:border-brand-600",
    "700": "hover:border-brand-700",
    "800": "hover:border-brand-800",
    "900": "hover:border-brand-900",
  },
  slate: {
    "50": "hover:border-slate-50",
    "100": "hover:border-slate-100",
    "200": "hover:border-slate-200",
    "300": "hover:border-slate-300",
    "400": "hover:border-slate-400",
    "500": "hover:border-slate-500",
    "600": "hover:border-slate-600",
    "700": "hover:border-slate-700",
    "800": "hover:border-slate-800",
    "900": "hover:border-slate-900",
  },
  gray: {
    "50": "hover:border-gray-50",
    "100": "hover:border-gray-100",
    "200": "hover:border-gray-200",
    "300": "hover:border-gray-300",
    "400": "hover:border-gray-400",
    "500": "hover:border-gray-500",
    "600": "hover:border-gray-600",
    "700": "hover:border-gray-700",
    "800": "hover:border-gray-800",
    "900": "hover:border-gray-900",
  },
  zinc: {
    "50": "hover:border-zinc-50",
    "100": "hover:border-zinc-100",
    "200": "hover:border-zinc-200",
    "300": "hover:border-zinc-300",
    "400": "hover:border-zinc-400",
    "500": "hover:border-zinc-500",
    "600": "hover:border-zinc-600",
    "700": "hover:border-zinc-700",
    "800": "hover:border-zinc-800",
    "900": "hover:border-zinc-900",
  },
  neutral: {
    "50": "hover:border-neutral-50",
    "100": "hover:border-neutral-100",
    "200": "hover:border-neutral-200",
    "300": "hover:border-neutral-300",
    "400": "hover:border-neutral-400",
    "500": "hover:border-neutral-500",
    "600": "hover:border-neutral-600",
    "700": "hover:border-neutral-700",
    "800": "hover:border-neutral-800",
    "900": "hover:border-neutral-900",
  },
  stone: {
    "50": "hover:border-stone-50",
    "100": "hover:border-stone-100",
    "200": "hover:border-stone-200",
    "300": "hover:border-stone-300",
    "400": "hover:border-stone-400",
    "500": "hover:border-stone-500",
    "600": "hover:border-stone-600",
    "700": "hover:border-stone-700",
    "800": "hover:border-stone-800",
    "900": "hover:border-stone-900",
  },
  red: {
    "50": "hover:border-red-50",
    "100": "hover:border-red-100",
    "200": "hover:border-red-200",
    "300": "hover:border-red-300",
    "400": "hover:border-red-400",
    "500": "hover:border-red-500",
    "600": "hover:border-red-600",
    "700": "hover:border-red-700",
    "800": "hover:border-red-800",
    "900": "hover:border-red-900",
  },
  orange: {
    "50": "hover:border-orange-50",
    "100": "hover:border-orange-100",
    "200": "hover:border-orange-200",
    "300": "hover:border-orange-300",
    "400": "hover:border-orange-400",
    "500": "hover:border-orange-500",
    "600": "hover:border-orange-600",
    "700": "hover:border-orange-700",
    "800": "hover:border-orange-800",
    "900": "hover:border-orange-900",
  },
  amber: {
    "50": "hover:border-amber-50",
    "100": "hover:border-amber-100",
    "200": "hover:border-amber-200",
    "300": "hover:border-amber-300",
    "400": "hover:border-amber-400",
    "500": "hover:border-amber-500",
    "600": "hover:border-amber-600",
    "700": "hover:border-amber-700",
    "800": "hover:border-amber-800",
    "900": "hover:border-amber-900",
  },
  yellow: {
    "50": "hover:border-yellow-50",
    "100": "hover:border-yellow-100",
    "200": "hover:border-yellow-200",
    "300": "hover:border-yellow-300",
    "400": "hover:border-yellow-400",
    "500": "hover:border-yellow-500",
    "600": "hover:border-yellow-600",
    "700": "hover:border-yellow-700",
    "800": "hover:border-yellow-800",
    "900": "hover:border-yellow-900",
  },
  lime: {
    "50": "hover:border-lime-50",
    "100": "hover:border-lime-100",
    "200": "hover:border-lime-200",
    "300": "hover:border-lime-300",
    "400": "hover:border-lime-400",
    "500": "hover:border-lime-500",
    "600": "hover:border-lime-600",
    "700": "hover:border-lime-700",
    "800": "hover:border-lime-800",
    "900": "hover:border-lime-900",
  },
  green: {
    "50": "hover:border-green-50",
    "100": "hover:border-green-100",
    "200": "hover:border-green-200",
    "300": "hover:border-green-300",
    "400": "hover:border-green-400",
    "500": "hover:border-green-500",
    "600": "hover:border-green-600",
    "700": "hover:border-green-700",
    "800": "hover:border-green-800",
    "900": "hover:border-green-900",
  },
  emerald: {
    "50": "hover:border-emerald-50",
    "100": "hover:border-emerald-100",
    "200": "hover:border-emerald-200",
    "300": "hover:border-emerald-300",
    "400": "hover:border-emerald-400",
    "500": "hover:border-emerald-500",
    "600": "hover:border-emerald-600",
    "700": "hover:border-emerald-700",
    "800": "hover:border-emerald-800",
    "900": "hover:border-emerald-900",
  },
  teal: {
    "50": "hover:border-teal-50",
    "100": "hover:border-teal-100",
    "200": "hover:border-teal-200",
    "300": "hover:border-teal-300",
    "400": "hover:border-teal-400",
    "500": "hover:border-teal-500",
    "600": "hover:border-teal-600",
    "700": "hover:border-teal-700",
    "800": "hover:border-teal-800",
    "900": "hover:border-teal-900",
  },
  cyan: {
    "50": "hover:border-cyan-50",
    "100": "hover:border-cyan-100",
    "200": "hover:border-cyan-200",
    "300": "hover:border-cyan-300",
    "400": "hover:border-cyan-400",
    "500": "hover:border-cyan-500",
    "600": "hover:border-cyan-600",
    "700": "hover:border-cyan-700",
    "800": "hover:border-cyan-800",
    "900": "hover:border-cyan-900",
  },
  sky: {
    "50": "hover:border-sky-50",
    "100": "hover:border-sky-100",
    "200": "hover:border-sky-200",
    "300": "hover:border-sky-300",
    "400": "hover:border-sky-400",
    "500": "hover:border-sky-500",
    "600": "hover:border-sky-600",
    "700": "hover:border-sky-700",
    "800": "hover:border-sky-800",
    "900": "hover:border-sky-900",
  },
  blue: {
    "50": "hover:border-blue-50",
    "100": "hover:border-blue-100",
    "200": "hover:border-blue-200",
    "300": "hover:border-blue-300",
    "400": "hover:border-blue-400",
    "500": "hover:border-blue-500",
    "600": "hover:border-blue-600",
    "700": "hover:border-blue-700",
    "800": "hover:border-blue-800",
    "900": "hover:border-blue-900",
  },
  indigo: {
    "50": "hover:border-indigo-50",
    "100": "hover:border-indigo-100",
    "200": "hover:border-indigo-200",
    "300": "hover:border-indigo-300",
    "400": "hover:border-indigo-400",
    "500": "hover:border-indigo-500",
    "600": "hover:border-indigo-600",
    "700": "hover:border-indigo-700",
    "800": "hover:border-indigo-800",
    "900": "hover:border-indigo-900",
  },
  violet: {
    "50": "hover:border-violet-50",
    "100": "hover:border-violet-100",
    "200": "hover:border-violet-200",
    "300": "hover:border-violet-300",
    "400": "hover:border-violet-400",
    "500": "hover:border-violet-500",
    "600": "hover:border-violet-600",
    "700": "hover:border-violet-700",
    "800": "hover:border-violet-800",
    "900": "hover:border-violet-900",
  },
  purple: {
    "50": "hover:border-purple-50",
    "100": "hover:border-purple-100",
    "200": "hover:border-purple-200",
    "300": "hover:border-purple-300",
    "400": "hover:border-purple-400",
    "500": "hover:border-purple-500",
    "600": "hover:border-purple-600",
    "700": "hover:border-purple-700",
    "800": "hover:border-purple-800",
    "900": "hover:border-purple-900",
  },
  fuchsia: {
    "50": "hover:border-fuchsia-50",
    "100": "hover:border-fuchsia-100",
    "200": "hover:border-fuchsia-200",
    "300": "hover:border-fuchsia-300",
    "400": "hover:border-fuchsia-400",
    "500": "hover:border-fuchsia-500",
    "600": "hover:border-fuchsia-600",
    "700": "hover:border-fuchsia-700",
    "800": "hover:border-fuchsia-800",
    "900": "hover:border-fuchsia-900",
  },
  pink: {
    "50": "hover:border-pink-50",
    "100": "hover:border-pink-100",
    "200": "hover:border-pink-200",
    "300": "hover:border-pink-300",
    "400": "hover:border-pink-400",
    "500": "hover:border-pink-500",
    "600": "hover:border-pink-600",
    "700": "hover:border-pink-700",
    "800": "hover:border-pink-800",
    "900": "hover:border-pink-900",
  },
  rose: {
    "50": "hover:border-rose-50",
    "100": "hover:border-rose-100",
    "200": "hover:border-rose-200",
    "300": "hover:border-rose-300",
    "400": "hover:border-rose-400",
    "500": "hover:border-rose-500",
    "600": "hover:border-rose-600",
    "700": "hover:border-rose-700",
    "800": "hover:border-rose-800",
    "900": "hover:border-rose-900",
  },
};
