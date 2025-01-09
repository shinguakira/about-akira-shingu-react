export const onBusiness: string = "practical";
export const selfStudy: string = "self-study";

// skillset for Voice Of Customer Management System
export const VOCSkillSet: string[] = [
  "Typescript",
  "React",
  "Java",
  "Springboot",
  "MySQL",
  "Selenium(Python)",
  "Mybatis(Java ORM)",
  "axios",
  "Backlog",
  "アジャイル開発(スクラム)",
];
export const receptionInnovationSkillSet: string[] = [
  "Typescript",
  "React",
  "Node.js",
  "MySQL",
  "Selenium(Python)",
  "little state machine",
  "React Hook Form",
  "axios",
  "TypeORM",
  "class-validator",
  "Apollo Client Server(GraphQL)",
  "Bootstrap5",
  "Azure(App Service,Azure Functions)",
  "Backlog",
  "Redmine",
  "Swagger",
  "アジャイル開発(スクラム)",
];
/**
 *  skillset for T3Stack
 */
export const T3StackSkillSet: string[] = [
  "React",
  "Typescript",
  "Next.js",
  "Prisma(or Drizzle)",
  "tRPC",
  "Tailwind CSS",
];
/**
 * skillset imported with create-next-app
 */
export const nextjsSkillSet: string[] = [
  "React",
  "Typescript",
  "Next.js",
  "Tailwind CSS",
  "Vercel",
];
// company names that I worked for
export const company = {
  eastCoast: "株式会社イースト・コースト・ワン",
  staffService: "株式会社スタッフサービス エンジニアリング",
  higashiTechLab: "株式会社東日本技術研究所",
  hotelTerrace: "株式会社ホテルテラスザスクエア日立",
};

// type for links
type Links = Record<string, string>;

export const links: Links = {
  // Creadly link for certifications object. refer env otherwise use default link
  creadlyLink:
    process.env.NEXT_PUBLIC_CREADLY_LINK ||
    "https://www.credly.com/users/username.aff80586",
  // Link for Resume.
  resumeLink:
    process.env.NEXT_PUBLIC_RESUME_LINK ||
    "https://drive.google.com/file/d/1FD0CRnMbGqFSo9L3fgp4RWmUnlwUlHby/view?usp=drive_link",
  // Link for Job History
  jobResumeLink:
    process.env.NEXT_PUBLIC_JOB_RESUME_LINK ||
    "https://drive.google.com/file/d/1scas644V4i6Qg1iHah4M5G4wkfBQDG4u/view?usp=sharing",
  // Link for ENGLISH Job Resume
  EnglishResumeLink:
    process.env.NEXT_PUBLIC_ENGLISH_RESUME_LINK ||
    "https://drive.google.com/file/d/1ENqBoJCbPwzS07l7Yl3cK-LNhXdld_V4/view?usp=sharing",
  // Link for advanced Search Youtube Website
  advancedSearchYoutubeLink:
    process.env.NEXT_PUBLIC_ADVANCED_SEARCH_YOUTUBE_LINK ||
    "https://youtube-advanced-search-five.vercel.app/",
  restaurantAroundStationLink:
    process.env.NEXT_PUBLIC_RESTAURANT_AROUND_STATION_LINK ||
    "https://restaurant-around-station.vercel.app/",
};

/**
 *  need to add more URLs for each links and refer env variables
 */
