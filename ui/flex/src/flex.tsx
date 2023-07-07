import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import * as React from "react";

/**
 * Type to define `Flex` element
 */
type IFlex = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Flex` props
 */
interface IFlexProps extends IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * Class names used to style the `Flex` component
 */
const FlexClassNames = `flex h-full w-full`;

/**
 * `Flex` - A primitive flex container that powers various layouts
 * @param props `IFlexProps` used to render this `Flex`
 * @returns `Flex` component
 */
const Flex = React.forwardRef<IFlex, IFlexProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <Component.div
        className={[FlexClassNames, className].filter(Boolean).join(" ")}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

Flex.displayName = "Flex";

export { Flex, FlexClassNames };
export type { IFlex, IFlexProps };
