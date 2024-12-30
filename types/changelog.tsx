/**
 * type for ChangelogComponent
 */
type ChangelogProps = {
  version: string;
  date: string;
  changes: {
    type: ChangeType;
    description: string;
  }[];
};

type ChangeType = "feature" | "improvement" | "bugfix";
