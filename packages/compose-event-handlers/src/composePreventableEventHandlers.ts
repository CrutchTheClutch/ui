import { mergeEventHandlers } from "./mergeEventHandlers";

/**
 * Composes multiple preventable event handlers into a single handler
 * @param original Original event handler that we are composing from, this handler will always execute
 * @param handlers Array of additional event handlers that will only execute when the event has not been prevented
 * @returns A single event handler function composed from all provided handlers
 */
function composePreventableEventHandlers<E>(
  original: (event: E) => void,
  ...handlers: { (event: E): void }[]
) {
  // return the composed event handler
  return function (event: E) {
    // original event handler will always execute
    original?.(event);

    // additional event handlers will only execute when default is not prevented
    if (!(event as Event)?.defaultPrevented) {
      return mergeEventHandlers(event, ...handlers);
    }
  };
}

export { composePreventableEventHandlers };
