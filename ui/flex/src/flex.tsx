import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import * as React from "react";

/**
 * Type to define `Flex` element
 */
type IFlex = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Flex` props
 */
interface IFlexProps {
  direction: "row" | "col" | "row-reverse" | "col-reverse";
}

/**
 * Map of `Flex` directions to Tailwind CSS classes
 */
const twDirection = {
  row: "flex-row",
  col: "flex-col",
  "row-reverse": "flex-row-reverse",
  "col-reverse": "flex-col-reverse",
};

/**
 * `Flex` - A primitive flex container that powers various layouts
 * @param props `IFlexProps` used to render this `Flex`
 * @returns `Flex` component
 */
const Flex = React.forwardRef<
  IFlex,
  IFlexProps & IComponentPropsWithoutRef<typeof Component.div>
>(({ className, direction = "col", ...props }, forwardedRef) => {
  return (
    <Component.div
      className={["flex h-full w-full", twDirection[direction], className].join(
        " "
      )}
      ref={forwardedRef}
      {...props}
    />
  );
});

Flex.displayName = "Flex";

export { Flex };
export type { IFlex, IFlexProps };
