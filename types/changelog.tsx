/**
 * type for ChangelogComponent
 */
export type ChangelogProps = {
  version: string;
  date: string;
  changes: {
    type: ChangeType;
    description: string;
  }[];
};

export type ChangeType = "feature" | "improvement" | "bugfix";
