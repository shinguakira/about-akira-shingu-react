/**
 * Generic portfolio API service for fetching data
 * Uses Next.js App Router data fetching with caching
 */

import type {
  ApiResponse,
  CertificationsResponse,
  ChangelogResponse,
  EducationResponse,
  ExperienceResponse,
  FaqResponse,
  ProjectsResponse,
  SkillsResponse,
  StrongPointsResponse,
} from "@shinguakira/portfolio-api-types";

// Use environment variable with fallback to default URL
const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_PORTFOLIO_API_URL
  ? `${process.env.NEXT_PUBLIC_VERCEL_PORTFOLIO_API_URL}/api`
  : "https://portfolio-api-ten-delta.vercel.app/api";

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
export async function fetchFromPortfolioApi<T = unknown>(
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
  console.log(url);
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
    const responseJson: ApiResponse<T> = await response.json();

    if (!response.ok) {
      throw new Error(
        `API error: ${response.status} for ${url} ${responseJson.message}`
      );
    }
    return responseJson.data as T;
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
): Promise<CertificationsResponse> {
  return fetchFromPortfolioApi<CertificationsResponse>("certifications", {
    queryParams: lang ? { lang } : undefined,
  });
}

/**
 * Fetches project data with 1 week cache
 * @param lang - Optional language code for localized content
 */
export async function fetchProjects(lang?: string): Promise<ProjectsResponse> {
  return fetchFromPortfolioApi<ProjectsResponse>("projects", {
    queryParams: lang ? { lang } : undefined,
  });
}

/**
 * Fetches skill data with 1 day cache
 * @param lang - Optional language code for localized content
 */
export async function fetchSkills(lang?: string): Promise<SkillsResponse> {
  return fetchFromPortfolioApi<SkillsResponse>("skills", {
    queryParams: lang ? { lang } : undefined,
    revalidateSeconds: 86400, // 1 day cache
  });
}

/**
 * Fetches other skills data with 1 day cache
 * @param lang - Optional language code for localized content
 */
export async function fetchOtherSkills(lang?: string): Promise<SkillsResponse> {
  return fetchFromPortfolioApi<SkillsResponse>("other-skills", {
    queryParams: lang ? { lang } : undefined,
    revalidateSeconds: 86400, // 1 day cache
  });
}

/**
 * Fetches work experience with 1 week cache
 *
 * Entries come back already localized for `lang`, and each one carries
 * `startDate`/`endDate` (`YYYY-MM`, or `YYYY` where only the year is known;
 * `endDate` absent while ongoing) next to the `period` display string.
 * @param lang - Optional language code for localized content
 */
export async function fetchExperience(
  lang?: string
): Promise<ExperienceResponse> {
  return fetchFromPortfolioApi<ExperienceResponse>("experience", {
    queryParams: lang ? { lang } : undefined,
    revalidateSeconds: 604800, // 1 week cache
  });
}

/**
 * Fetches education history with 1 week cache
 * @param lang - Optional language code for localized content
 */
export async function fetchEducation(
  lang?: string
): Promise<EducationResponse> {
  return fetchFromPortfolioApi<EducationResponse>("education", {
    queryParams: lang ? { lang } : undefined,
    revalidateSeconds: 604800, // 1 week cache
  });
}

/**
 * Fetches strong points data with 1 week cache
 * @param lang - Optional language code for localized content
 */
export async function fetchStrongPoints(
  lang?: string
): Promise<StrongPointsResponse> {
  return fetchFromPortfolioApi<StrongPointsResponse>("strong-points", {
    queryParams: lang ? { lang } : undefined,
  });
}

/**
 * Fetches FAQ data with 1 week cache
 * @param lang - Optional language code for localized content
 */
export async function fetchFaqs(lang?: string): Promise<FaqResponse> {
  return fetchFromPortfolioApi<FaqResponse>("faqs", {
    queryParams: lang ? { lang } : undefined,
    revalidateSeconds: 604800, // 1 week cache
  });
}

/**
 * Fetches the changelog with 1 week cache
 *
 * Unlike the other endpoints this one is not localized: each change carries
 * both `ja` and `en` descriptions, so the caller picks.
 */
export async function fetchChangelogs(): Promise<ChangelogResponse> {
  return fetchFromPortfolioApi<ChangelogResponse>("changelogs", {
    revalidateSeconds: 604800, // 1 week cache
  });
}
