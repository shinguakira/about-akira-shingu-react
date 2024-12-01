'use client'

import { useState } from 'react'
import SkillCategory from './skill-category'
import SkillItem from './skill-item'
import { SkillItemProps } from './skill-item'

type Skill = {
  name: string
  years: string
  category: string
  proficyency: string // onBusiness or self-study
}

const onBusiness: string = "practical"
const selfStudy: string = "self-study"

// main skills(Language,Libraries)
const skills: SkillItemProps[] = [
  { name: 'TypeScript', years: "1 year", category: 'Language' ,proficyency: onBusiness},
  { name: 'JavaScript(include TypeScript)', years: "2 years", category: 'Language',proficyency: onBusiness },
  { name: 'Java', years: "1 year", category: 'Language' ,proficyency: onBusiness },
  { name: 'C,C++,C#', years: "6 months", category: 'Language' ,proficyency: onBusiness },
  { name: 'Python', years: "1 year", category: 'Language' ,proficyency: onBusiness },
  { name: 'React', years: "1 year", category: 'Frontend' ,proficyency: onBusiness },
  { name: 'Next.js', years: selfStudy, category: 'Frontend' ,proficyency: selfStudy },
  { name: 'Node.js', years: "6 months", category: 'Backend' ,proficyency: onBusiness },
  { name: 'Springboot(Java)', years: "1 year", category: 'Backend' ,proficyency: onBusiness },
  { name: 'GraphQL', years: "6 months", category: 'API' ,proficyency: onBusiness },
  { name: 'REST', years: "2 years", category: 'API' ,proficyency: onBusiness },
  { name: 'Apollo Client Server(GraphQL)', years: "6 months", category: 'API' ,proficyency: onBusiness },
  { name: 'Axios(REST)', years: "1 year", category: 'API' ,proficyency: onBusiness },
  { name: 'Redux', years: selfStudy, category: 'State Management' ,proficyency: onBusiness },
  { name: 'React Hook Form', years: "1 year", category: 'State Management' ,proficyency: onBusiness },
  { name: 'Little State Machine', years: "1 year", category: 'State Management' ,proficyency: onBusiness },
  { name: 'TypeORM', years: "6 months", category: 'ORM' ,proficyency: onBusiness },
  { name: 'Prisma', years: selfStudy, category: 'ORM' ,proficyency: selfStudy },
  { name: 'Selenium(Python)', years: "1 year", category: 'Testing' ,proficyency: onBusiness },
  { name: 'Jest', years: "3 months", category: 'Testing' ,proficyency: onBusiness },
  { name: 'MySQL', years: "1 year", category: 'Database' ,proficyency: onBusiness },
  { name: 'Vercel', years: selfStudy, category: 'Database' ,proficyency: selfStudy },
  { name: 'AWS', years: "3 months", category: 'Cloud' ,proficyency: onBusiness },
  { name: 'Azure', years: "1 year", category: 'Cloud' ,proficyency: onBusiness },
]

// otherSkills(IDE,Editor,Project Management Tool.etc)
const otherSkills: Skill[] = [
  { name: 'VS Code(Typescript)', years: "1 year", category: 'Others' ,proficyency: onBusiness },
  { name: 'IntelliJ IDEA(Typescript)', years: "8 months", category: 'Others' ,proficyency: onBusiness },
  { name: 'Eclipse(Java,Javascript)', years: "6 months", category: 'Others' ,proficyency: onBusiness },
  { name: 'Spring Tool Suite4(Java,Javascript)', years: "4 months", category: 'Others' ,proficyency: onBusiness },
  { name: 'Visual Stadio(C,C++,C#)', years: "8 months", category: 'Others' ,proficyency: onBusiness },
  { name: 'Git(Tortoise Git)', years: "1 year", category: 'Others' ,proficyency: onBusiness },
  { name: 'Github', years: "1 year", category: 'Others' ,proficyency: onBusiness },
  { name: 'Swagger', years: "6 months", category: 'Others' ,proficyency: onBusiness },
  { name: 'Backlog', years: "1 year", category: 'Others' ,proficyency: onBusiness },
  { name: 'Redmine', years: "3 months", category: 'Others' ,proficyency: onBusiness },
  { name: 'Asana', years: "1 month", category: 'Others' ,proficyency: onBusiness },
  { name: 'A5:SQL Mk-2', years: "1 year", category: 'Others' ,proficyency: onBusiness },
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
            proficyency={skill.proficyency}
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
            proficyency={otherSkill.proficyency}
            />
        ))}
      </div>
      </>
  )
}

export default SkillSet