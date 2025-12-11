import type { SkillItem } from "@shinguakira/portfolio-api-types";

// Re-export for backward compatibility
// Note: API uses 'proficiency' but local uses 'proficyency' (typo)
type SkillItemProps = SkillItem & {
  proficyency?: string; // Keep for backward compatibility with local components
};
