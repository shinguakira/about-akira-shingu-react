import React from 'react'

type SkillCategoryProps = {
  category: string
  selectedCategories: Set<string>
  onClick: (category: string) => void
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, selectedCategories, onClick }) => {
  return (
    <button
              key={category}
              onClick={() => onClick(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                selectedCategories.has(category)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
              aria-pressed={selectedCategories.has(category)}
            >
              {category}
            </button>
  )
}

export default SkillCategory