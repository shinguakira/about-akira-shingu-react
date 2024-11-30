'use client'

import { useState } from 'react'
import SkillCategory from './skill-category'
import SkillItem from './skill-item'

type Skill = {
  name: string
  years: string
  category: string
}

// main skills(Language,Libraries)
const skills: Skill[] = [
  { name: 'TypeScript', years: "1 year", category: 'Language' },
  { name: 'JavaScript(include TypeScript)', years: "2 years", category: 'Language' },
  { name: 'Java', years: "1 year", category: 'Language' },
  { name: 'C,C++,C#', years: "6 months", category: 'Language' },
  { name: 'Python', years: "1 year", category: 'Language' },
  { name: 'React', years: "1 year", category: 'Frontend' },
  { name: 'Next.js', years: "80", category: 'Frontend' },
  { name: 'Node.js', years: "6 months", category: 'Backend' },
  { name: 'Springboot(Java)', years: "80", category: 'Backend' },
  { name: 'GraphQL', years: "6 months", category: 'API' },
  { name: 'REST', years: "2 years", category: 'API' },
  { name: 'Apollo Client Server(GraphQL)', years: "80", category: 'API' },
  { name: 'Axios(REST)', years: "80", category: 'API' },
  { name: 'Redux', years: "80", category: 'State Management' },
  { name: 'React Hook Form', years: "80", category: 'State Management' },
  { name: 'Little State Machine', years: "80", category: 'State Management' },
  { name: 'Selenium(Python)', years: "80", category: 'Testing' },
  { name: 'Jest', years: "80", category: 'Testing' },
  { name: 'MySQL', years: "80", category: 'Database' },
  { name: 'AWS', years: "80", category: 'Cloud' },
  { name: 'Azure', years: "80", category: 'Cloud' },
]

// otherSkills(IDE,Editor,Project Management Tool.etc)
const otherSkills: Skill[] = [
  { name: 'VS Code(Typescript)', years: "80", category: 'Others' },
  { name: 'IntelliJ IDEA(Typescript)', years: "80", category: 'Others' },
  { name: 'Eclipse(Java,Javascript)', years: "80", category: 'Others' },
  { name: 'Spring Tool Suite4(Java,Javascript)', years: "80", category: 'Others' },
  { name: 'Visual Stadio(C,C++,C#)', years: "80", category: 'Others' },
  { name: 'Git(Tortoise Git)', years: "80", category: 'Others' },
  { name: 'Github', years: "80", category: 'Others' },
  { name: 'Swagger', years: "80", category: 'Others' },
  { name: 'Backlog', years: "80", category: 'Others' },
  { name: 'Redmine', years: "80", category: 'Others' },
  { name: 'Asana', years: "80", category: 'Others' },
  { name: 'A5', years: "80", category: 'Others' },
]

const SkillSet = () => {
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set(['All']))

  const categories = ['All', ...new Set(skills.map(skill => skill.category))].sort()

  const filteredSkills = selectedCategories.has('All') 
  ? skills 
  : skills.filter(skill => selectedCategories.has(skill.category))

  const filteredOtherSkills = selectedCategories.has('All') 
  ? otherSkills 
  : otherSkills.filter(otherSkill => selectedCategories.has(otherSkill.category))

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
      <h3 className="underline text-3xl text-center mb-8 text-blue-900 dark:text-white">Skills</h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 mx-auto">
        {filteredSkills.map(skill => (
          <SkillItem
            key={skill.name}
            name={skill.name}
            years={skill.years}
            category={skill.category}
            />
        ))}
      </div>
      {/* display only filtered OtherSkill exist */}
      { filteredOtherSkills.length > 0 &&
        <h3 className="underline text-3xl text-center mb-8 text-green-700 dark:text-gray-500">Other Skills</h3>
      }
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 mx-auto">
        {filteredOtherSkills.map(otherSkill => (
          <SkillItem
            key={otherSkill.name}
            name={otherSkill.name}
            years={otherSkill.years}
            category={otherSkill.category}
            />
        ))}
      </div>
      </>
  )
}

export default SkillSet