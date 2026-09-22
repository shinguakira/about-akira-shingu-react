"use client";

import { useEffect, useState } from "react";

/**
 * Client-side counterpart of `services/portfolioApi.ts`.
 *
 * Most pages fetch in a server component and pass the data down. The nav bar
 * has no server component above it, so the components living there fetch from
 * the browser instead. Nothing here reads local constants: the API is the only
 * source.
 */

const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_PORTFOLIO_API_URL
  ? `${process.env.NEXT_PUBLIC_VERCEL_PORTFOLIO_API_URL}/api`
  : "https://portfolio-api-ten-delta.vercel.app/api";

type ApiEnvelope<T> = { message: string; data: T };

export type PortfolioRequest = {
  /** Endpoint path without a leading slash, e.g. `"skills"`. */
  path: string;
  /** Language code for localized endpoints. Omit for unlocalized ones. */
  lang?: string;
};

/**
 * Fetches several endpoints once, the first time `enabled` turns true.
 *
 * The nav bar renders on every route, so nothing is requested until the user
 * actually opens the modal that needs the data.
 *
 * @returns the responses in the same order as `requests`, `null` until loaded
 */
export function usePortfolioApi<T extends unknown[]>(
  requests: PortfolioRequest[],
  enabled: boolean
): { data: T | null; error: Error | null } {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  // Requests are a fixed list per call site; key on the URLs so the effect does
  // not re-run when the caller rebuilds the array.
  const key = requests
    .map((r) => `${r.path}${r.lang ? `?lang=${r.lang}` : ""}`)
    .join("|");

  useEffect(() => {
    if (!enabled) return;

    const controller = new AbortController();

    const load = async () => {
      try {
        const responses = await Promise.all(
          key.split("|").map(async (suffix) => {
            const response = await fetch(`${BASE_URL}/${suffix}`, {
              signal: controller.signal,
            });
            if (!response.ok) {
              throw new Error(`API error: ${response.status} for ${suffix}`);
            }
            const body: ApiEnvelope<unknown> = await response.json();
            return body.data;
          })
        );
        setData(responses as T);
        setError(null);
      } catch (caught) {
        if (controller.signal.aborted) return;
        console.error("Error fetching from portfolio API:", caught);
        setError(caught instanceof Error ? caught : new Error(String(caught)));
      }
    };

    void load();
    return () => controller.abort();
  }, [key, enabled]);

  return { data, error };
}
