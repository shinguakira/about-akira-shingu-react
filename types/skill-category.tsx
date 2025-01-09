type SkillCategoryProps = {
  category: string;
  selectedCategories: Set<string>;
  onClick: (category: string) => void;
};
