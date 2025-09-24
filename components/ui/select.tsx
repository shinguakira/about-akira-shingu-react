"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

interface LayoutOption {
  value: string;
  label: string;
}

const layouts: { [key: string]: string } = {
  default: "Classic",
  modern: "Modern",
  premium: "Premium",
};

const Select: React.FC<SelectProps> = ({
  value,
  onValueChange,
  children,
  className = "",
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={`relative ${className}`}>
      <div
        className="flex h-10 w-full cursor-pointer items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {layouts[value] || value}
        <ChevronDown className="size-4 opacity-50" />
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
          {children}
        </div>
      )}
    </div>
  );
};

interface SelectTriggerProps {
  className?: string;
  children: React.ReactNode;
}

const SelectTrigger: React.FC<SelectTriggerProps> = ({
  className = "",
  children,
}) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      {children}
    </div>
  );
};

interface SelectValueProps {
  placeholder: string;
}

const SelectValue: React.FC<SelectValueProps> = ({ placeholder }) => {
  return <span>{placeholder}</span>;
};

interface SelectContentProps {
  children: React.ReactNode;
  className?: string;
}

const SelectContent: React.FC<SelectContentProps> = ({
  children,
  className = "",
}) => {
  return <div className={`p-1 ${className}`}>{children}</div>;
};

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const SelectItem: React.FC<SelectItemProps> = ({
  value,
  children,
  className = "",
  onClick,
}) => {
  return (
    <div
      className={`cursor-pointer px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
