"use client";

import { useState, useEffect } from "react";

/**
 * A custom hook to detect if a media query matches
 * @param query The media query to check
 * @returns True if the media query matches, false otherwise
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Set initial value
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    // Create event listener for changes
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

    // Add event listener
    mediaQuery.addEventListener("change", handler);

    // Clean up
    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, [query]);

  return matches;
}
