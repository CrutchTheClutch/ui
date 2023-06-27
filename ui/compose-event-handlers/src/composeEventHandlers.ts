import { IPossibleEventHandler, mergeEventHandlers } from "./common";

/**
 * Composes multiple event handlers into a single event handler function
 * @param handlers Array of event handlers that will be composed
 * @returns A single event handler function composed from all provided handlers
 */
function composeEventHandlers<E>(...handlers: IPossibleEventHandler<E>[]) {
  // return the composed event handler
  return function (event: E) {
    return mergeEventHandlers(event, ...handlers);
  };
}

export { composeEventHandlers };