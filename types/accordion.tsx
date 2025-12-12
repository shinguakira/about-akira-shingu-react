type AccordionProps = {
  index: number;
  question: string;
  answer: string;
  size: string;
  category?: string;
  isExpanded?: boolean;
  onToggle?: () => void;
};
