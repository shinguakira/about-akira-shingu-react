/**
 * Generic portfolio API service for fetching data
 * Uses Next.js App Router data fetching with caching
 */

// Use environment variable with fallback to default URL
const BASE_URL =
  process.env.NEXT_PUBLIC_VERCEL_PORTFOLIO_API_URL ||
  "https://portfolio-api-ten-delta.vercel.app/api";

type FetchOptions = {
  /** Cache revalidation time in seconds (default: 1 week) */
  revalidateSeconds?: number;
  /** Request headers */
  headers?: HeadersInit;
  /** Request cache policy */
  cache?: RequestCache;
  /** Query parameters to append to URL */
  queryParams?: Record<string, string>;
};

/**
 * Fetches data from portfolio API
 * @param path - API endpoint path (without leading slash)
 * @param options - Fetch options including cache settings
 * @returns Promise with the fetched data
 */
export async function fetchFromPortfolioApi<T = any>(
  path: string,
  options: FetchOptions = {}
): Promise<T> {
  const {
    revalidateSeconds = 604800, // 1 week default
    headers = {},
    cache,
    queryParams = {},
  } = options;

  // Build URL with query parameters
  let url = `${BASE_URL}/${path}`;
  const searchParams = new URLSearchParams();

  // Add all query parameters
  Object.entries(queryParams).forEach(([key, value]) => {
    if (value) searchParams.append(key, value);
  });

  // Append query parameters if any exist
  const queryString = searchParams.toString();
  if (queryString) {
    url = `${url}?${queryString}`;
  }

  try {
    const response = await fetch(url, {
      headers,
      // When using next.revalidate, don't specify cache: 'force-cache'
      // to avoid the warning about specifying both
      ...(cache ? { cache } : {}),
      next: {
        revalidate: revalidateSeconds,
      },
    });
    const responseJson = await response.json();

    if (!response.ok) {
      throw new Error(
        `API error: ${response.status} for ${url} ${responseJson.message}`
      );
    }
    return responseJson.data;
  } catch (error) {
    console.error(`Error fetching ${path} from portfolio API:`, error);
    throw error;
  }
}

/**
 * Fetches certification data with 1 week cache
 * @param lang - Optional language code for localized content
 */
export async function fetchCertifications(
  lang?: string
): Promise<CertificationItemProps[]> {
  return fetchFromPortfolioApi("certifications", {
    queryParams: lang ? { lang } : undefined,
  });
}

/**
 * Fetches project data with 1 week cache
 * @param lang - Optional language code for localized content
 */
export async function fetchProjects(lang?: string): Promise<any> {
  return fetchFromPortfolioApi("projects", {
    queryParams: lang ? { lang } : undefined,
  });
}

/**
 * Example: Fetch skill data with custom cache (for future use)
 */
export async function fetchSkills() {
  return fetchFromPortfolioApi("skills", { revalidateSeconds: 86400 }); // 1 day cache
}

/**
 * Type definition for certification items
 */
export type CertificationItemProps = {
  name: string;
  issuer: string;
  date: string;
  verifyLink?: string;
  image?: string;
};

/**
 * Type for strong point data
 * The API returns already localized content based on the lang parameter
 */
export type StrongPointProps = {
  size: string;
  category?: string;
  question: string;
  answer: string;
};

/**
 * Fetches strong points data with 1 week cache
 * Falls back to local constants if API endpoint doesn't exist
 * @param lang - Optional language code for localized content
 */
export async function fetchStrongPoints(
  lang?: string
): Promise<StrongPointProps[]> {
  try {
    // Try to fetch from API first
    return await fetchFromPortfolioApi("strong-points", {
      queryParams: lang ? { lang } : undefined,
    });
  } catch (error) {
    console.error("Falling back to local strong points data", error);
    // Fallback to local data if API fails
    const { strongPoint } = await import("../constants/strong-point");

    // Convert the local data format to match the expected API format
    // Local data has separate ja/en objects, but the API would return
    // data already localized for the requested language
    const languageKey = lang === "ja" ? "ja" : "en";
    return strongPoint.map((item) => ({
      size: item.size,
      category: item.category,
      question: item[languageKey].question,
      answer: item[languageKey].answer,
    }));
  }
}
