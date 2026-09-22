"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * A custom hook to detect if a media query matches
 * @param query The media query to check
 * @returns True if the media query matches, false otherwise
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const mediaQuery = window.matchMedia(query);
      mediaQuery.addEventListener("change", onStoreChange);
      return () => {
        mediaQuery.removeEventListener("change", onStoreChange);
      };
    },
    [query]
  );

  const getSnapshot = useCallback(
    () => window.matchMedia(query).matches,
    [query]
  );

  // matchMedia does not exist on the server; false matches what the old
  // useState(false) initial value rendered.
  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
