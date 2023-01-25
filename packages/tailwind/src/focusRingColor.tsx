import { getColor, IColor, IColorMap, IColorShade } from ".";

/**
 * {@link https://tailwindcss.com/docs/customizing-colors}
 */

export function getFocusRingColor(color: IColor, shade: IColorShade = "500") {
  return getColor(focusRingColorMap, color, shade);
}

const focusRingColorMap: IColorMap = {
  transparent: {
    none: "focus:ring-transparent",
  },
  black: {
    none: "focus:ring-black",
  },
  white: {
    none: "focus:ring-white",
  },
  brand: {
    "50": "focus:ring-brand-50",
    "100": "focus:ring-brand-100",
    "200": "focus:ring-brand-200",
    "300": "focus:ring-brand-300",
    "400": "focus:ring-brand-400",
    "500": "focus:ring-brand-500",
    "600": "focus:ring-brand-600",
    "700": "focus:ring-brand-700",
    "800": "focus:ring-brand-800",
    "900": "focus:ring-brand-900",
  },
  slate: {
    "50": "focus:ring-slate-50",
    "100": "focus:ring-slate-100",
    "200": "focus:ring-slate-200",
    "300": "focus:ring-slate-300",
    "400": "focus:ring-slate-400",
    "500": "focus:ring-slate-500",
    "600": "focus:ring-slate-600",
    "700": "focus:ring-slate-700",
    "800": "focus:ring-slate-800",
    "900": "focus:ring-slate-900",
  },
  gray: {
    "50": "focus:ring-gray-50",
    "100": "focus:ring-gray-100",
    "200": "focus:ring-gray-200",
    "300": "focus:ring-gray-300",
    "400": "focus:ring-gray-400",
    "500": "focus:ring-gray-500",
    "600": "focus:ring-gray-600",
    "700": "focus:ring-gray-700",
    "800": "focus:ring-gray-800",
    "900": "focus:ring-gray-900",
  },
  zinc: {
    "50": "focus:ring-zinc-50",
    "100": "focus:ring-zinc-100",
    "200": "focus:ring-zinc-200",
    "300": "focus:ring-zinc-300",
    "400": "focus:ring-zinc-400",
    "500": "focus:ring-zinc-500",
    "600": "focus:ring-zinc-600",
    "700": "focus:ring-zinc-700",
    "800": "focus:ring-zinc-800",
    "900": "focus:ring-zinc-900",
  },
  neutral: {
    "50": "focus:ring-neutral-50",
    "100": "focus:ring-neutral-100",
    "200": "focus:ring-neutral-200",
    "300": "focus:ring-neutral-300",
    "400": "focus:ring-neutral-400",
    "500": "focus:ring-neutral-500",
    "600": "focus:ring-neutral-600",
    "700": "focus:ring-neutral-700",
    "800": "focus:ring-neutral-800",
    "900": "focus:ring-neutral-900",
  },
  stone: {
    "50": "focus:ring-stone-50",
    "100": "focus:ring-stone-100",
    "200": "focus:ring-stone-200",
    "300": "focus:ring-stone-300",
    "400": "focus:ring-stone-400",
    "500": "focus:ring-stone-500",
    "600": "focus:ring-stone-600",
    "700": "focus:ring-stone-700",
    "800": "focus:ring-stone-800",
    "900": "focus:ring-stone-900",
  },
  red: {
    "50": "focus:ring-red-50",
    "100": "focus:ring-red-100",
    "200": "focus:ring-red-200",
    "300": "focus:ring-red-300",
    "400": "focus:ring-red-400",
    "500": "focus:ring-red-500",
    "600": "focus:ring-red-600",
    "700": "focus:ring-red-700",
    "800": "focus:ring-red-800",
    "900": "focus:ring-red-900",
  },
  orange: {
    "50": "focus:ring-orange-50",
    "100": "focus:ring-orange-100",
    "200": "focus:ring-orange-200",
    "300": "focus:ring-orange-300",
    "400": "focus:ring-orange-400",
    "500": "focus:ring-orange-500",
    "600": "focus:ring-orange-600",
    "700": "focus:ring-orange-700",
    "800": "focus:ring-orange-800",
    "900": "focus:ring-orange-900",
  },
  amber: {
    "50": "focus:ring-amber-50",
    "100": "focus:ring-amber-100",
    "200": "focus:ring-amber-200",
    "300": "focus:ring-amber-300",
    "400": "focus:ring-amber-400",
    "500": "focus:ring-amber-500",
    "600": "focus:ring-amber-600",
    "700": "focus:ring-amber-700",
    "800": "focus:ring-amber-800",
    "900": "focus:ring-amber-900",
  },
  yellow: {
    "50": "focus:ring-yellow-50",
    "100": "focus:ring-yellow-100",
    "200": "focus:ring-yellow-200",
    "300": "focus:ring-yellow-300",
    "400": "focus:ring-yellow-400",
    "500": "focus:ring-yellow-500",
    "600": "focus:ring-yellow-600",
    "700": "focus:ring-yellow-700",
    "800": "focus:ring-yellow-800",
    "900": "focus:ring-yellow-900",
  },
  lime: {
    "50": "focus:ring-lime-50",
    "100": "focus:ring-lime-100",
    "200": "focus:ring-lime-200",
    "300": "focus:ring-lime-300",
    "400": "focus:ring-lime-400",
    "500": "focus:ring-lime-500",
    "600": "focus:ring-lime-600",
    "700": "focus:ring-lime-700",
    "800": "focus:ring-lime-800",
    "900": "focus:ring-lime-900",
  },
  green: {
    "50": "focus:ring-green-50",
    "100": "focus:ring-green-100",
    "200": "focus:ring-green-200",
    "300": "focus:ring-green-300",
    "400": "focus:ring-green-400",
    "500": "focus:ring-green-500",
    "600": "focus:ring-green-600",
    "700": "focus:ring-green-700",
    "800": "focus:ring-green-800",
    "900": "focus:ring-green-900",
  },
  emerald: {
    "50": "focus:ring-emerald-50",
    "100": "focus:ring-emerald-100",
    "200": "focus:ring-emerald-200",
    "300": "focus:ring-emerald-300",
    "400": "focus:ring-emerald-400",
    "500": "focus:ring-emerald-500",
    "600": "focus:ring-emerald-600",
    "700": "focus:ring-emerald-700",
    "800": "focus:ring-emerald-800",
    "900": "focus:ring-emerald-900",
  },
  teal: {
    "50": "focus:ring-teal-50",
    "100": "focus:ring-teal-100",
    "200": "focus:ring-teal-200",
    "300": "focus:ring-teal-300",
    "400": "focus:ring-teal-400",
    "500": "focus:ring-teal-500",
    "600": "focus:ring-teal-600",
    "700": "focus:ring-teal-700",
    "800": "focus:ring-teal-800",
    "900": "focus:ring-teal-900",
  },
  cyan: {
    "50": "focus:ring-cyan-50",
    "100": "focus:ring-cyan-100",
    "200": "focus:ring-cyan-200",
    "300": "focus:ring-cyan-300",
    "400": "focus:ring-cyan-400",
    "500": "focus:ring-cyan-500",
    "600": "focus:ring-cyan-600",
    "700": "focus:ring-cyan-700",
    "800": "focus:ring-cyan-800",
    "900": "focus:ring-cyan-900",
  },
  sky: {
    "50": "focus:ring-sky-50",
    "100": "focus:ring-sky-100",
    "200": "focus:ring-sky-200",
    "300": "focus:ring-sky-300",
    "400": "focus:ring-sky-400",
    "500": "focus:ring-sky-500",
    "600": "focus:ring-sky-600",
    "700": "focus:ring-sky-700",
    "800": "focus:ring-sky-800",
    "900": "focus:ring-sky-900",
  },
  blue: {
    "50": "focus:ring-blue-50",
    "100": "focus:ring-blue-100",
    "200": "focus:ring-blue-200",
    "300": "focus:ring-blue-300",
    "400": "focus:ring-blue-400",
    "500": "focus:ring-blue-500",
    "600": "focus:ring-blue-600",
    "700": "focus:ring-blue-700",
    "800": "focus:ring-blue-800",
    "900": "focus:ring-blue-900",
  },
  indigo: {
    "50": "focus:ring-indigo-50",
    "100": "focus:ring-indigo-100",
    "200": "focus:ring-indigo-200",
    "300": "focus:ring-indigo-300",
    "400": "focus:ring-indigo-400",
    "500": "focus:ring-indigo-500",
    "600": "focus:ring-indigo-600",
    "700": "focus:ring-indigo-700",
    "800": "focus:ring-indigo-800",
    "900": "focus:ring-indigo-900",
  },
  violet: {
    "50": "focus:ring-violet-50",
    "100": "focus:ring-violet-100",
    "200": "focus:ring-violet-200",
    "300": "focus:ring-violet-300",
    "400": "focus:ring-violet-400",
    "500": "focus:ring-violet-500",
    "600": "focus:ring-violet-600",
    "700": "focus:ring-violet-700",
    "800": "focus:ring-violet-800",
    "900": "focus:ring-violet-900",
  },
  purple: {
    "50": "focus:ring-purple-50",
    "100": "focus:ring-purple-100",
    "200": "focus:ring-purple-200",
    "300": "focus:ring-purple-300",
    "400": "focus:ring-purple-400",
    "500": "focus:ring-purple-500",
    "600": "focus:ring-purple-600",
    "700": "focus:ring-purple-700",
    "800": "focus:ring-purple-800",
    "900": "focus:ring-purple-900",
  },
  fuchsia: {
    "50": "focus:ring-fuchsia-50",
    "100": "focus:ring-fuchsia-100",
    "200": "focus:ring-fuchsia-200",
    "300": "focus:ring-fuchsia-300",
    "400": "focus:ring-fuchsia-400",
    "500": "focus:ring-fuchsia-500",
    "600": "focus:ring-fuchsia-600",
    "700": "focus:ring-fuchsia-700",
    "800": "focus:ring-fuchsia-800",
    "900": "focus:ring-fuchsia-900",
  },
  pink: {
    "50": "focus:ring-pink-50",
    "100": "focus:ring-pink-100",
    "200": "focus:ring-pink-200",
    "300": "focus:ring-pink-300",
    "400": "focus:ring-pink-400",
    "500": "focus:ring-pink-500",
    "600": "focus:ring-pink-600",
    "700": "focus:ring-pink-700",
    "800": "focus:ring-pink-800",
    "900": "focus:ring-pink-900",
  },
  rose: {
    "50": "focus:ring-rose-50",
    "100": "focus:ring-rose-100",
    "200": "focus:ring-rose-200",
    "300": "focus:ring-rose-300",
    "400": "focus:ring-rose-400",
    "500": "focus:ring-rose-500",
    "600": "focus:ring-rose-600",
    "700": "focus:ring-rose-700",
    "800": "focus:ring-rose-800",
    "900": "focus:ring-rose-900",
  },
};
