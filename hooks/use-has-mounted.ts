"use client";

import { useSyncExternalStore } from "react";

/** Nothing to subscribe to — the value flips once, at hydration. */
const subscribe = () => () => {};

/**
 * True once the component has hydrated on the client, false during SSR and on
 * the first (hydrating) client render.
 *
 * This is the `useSyncExternalStore` form of the usual
 * `useState(false)` + `useEffect(() => setMounted(true), [])` guard. It reports
 * the same thing without setting state from an effect, which would schedule a
 * second render pass on every mount.
 */
export function useHasMounted(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true, // client
    () => false // server / hydration
  );
}
