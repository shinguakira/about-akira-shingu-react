'use client'

import { useState } from 'react'
import SkillCategory from './skill-category'
import SkillItem from './skill-item'

type Skill = {
  name: string
  level: number
  category: string
}

const skills: Skill[] = [
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'Next.js', level: 85, category: 'Frontend' },
  { name: 'TypeScript', level: 80, category: 'Language' },
  { name: 'Node.js', level: 75, category: 'Backend' },
  { name: 'GraphQL', level: 70, category: 'API' },
  { name: 'Python', level: 85, category: 'Language' },
  { name: 'Docker', level: 65, category: 'DevOps' },
  { name: 'AWS', level: 60, category: 'Cloud' },
  { name: 'SQL', level: 80, category: 'Database' },
  { name: 'MongoDB', level: 75, category: 'Database' },
  { name: 'Redux', level: 85, category: 'State Management' },
  { name: 'Jest', level: 70, category: 'Testing' },
]

const SkillSet = () => {
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set(['All']))

  const categories = ['All', ...new Set(skills.map(skill => skill.category))].sort()

  const filteredSkills = selectedCategories.has('All') 
  ? skills 
  : skills.filter(skill => selectedCategories.has(skill.category))

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => {
      const newSet = new Set(prev)
      if (category === 'All') {
        if (newSet.has('All')) {
          newSet.clear()
        } else {
          newSet.clear()
          newSet.add('All')
        }
      } else {
        if (newSet.has(category)) {
          newSet.delete(category)
          if (newSet.size === 0) {
            newSet.add('All')
          }
        } else {
          newSet.add(category)
          newSet.delete('All')
        }
      }
      return newSet
    })
  }

  return (
    <>
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-6 overflow-auto">
          {categories.map(category => (
            <SkillCategory
              key={category}
              category={category}
              selectedCategories={selectedCategories}
              onClick={toggleCategory}
              />
          ))}
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 mx-auto">
        {filteredSkills.map(skill => (
          <SkillItem
            key={skill.name}
            name={skill.name}
            level={skill.level}
            category={skill.category}
            />
        ))}
      </div>
      </>
  )
}

export default SkillSet