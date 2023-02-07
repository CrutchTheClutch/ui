import { clsx } from "@clutchd/clsx";
import { createConfigUtils } from "./config-utils";
import { mergeClassList } from "./merge-classlist";
import { getDefaultConfig } from "./default-config";

type TailwindMerge = (...classLists: any[]) => string;
type ConfigUtils = ReturnType<typeof createConfigUtils>;

export function createTailwindMerge(): TailwindMerge {
  let configUtils: ConfigUtils;
  let cacheGet: ConfigUtils["cache"]["get"];
  let cacheSet: ConfigUtils["cache"]["set"];
  let functionToCall = initTailwindMerge;

  function initTailwindMerge(classList: string) {
    configUtils = createConfigUtils(getDefaultConfig());
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;

    return tailwindMerge(classList);
  }

  function tailwindMerge(classList: string) {
    const cachedResult = cacheGet(classList);

    if (cachedResult) {
      return cachedResult;
    }

    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);

    return result;
  }

  return function callTailwindMerge() {
    return functionToCall(clsx.apply(null, arguments as any));
  };
}
