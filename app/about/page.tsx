import SkillSet from '@/components/ui/skill-set'
import WorkHistory from '@/components/ui/work-history'
import React from 'react'

const About=() => {
  return (
    <>
      <div className="container mx-auto px-4 py-16 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">My Skill Set</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Categories</h3>
          <div className="flex flex-wrap gap-2">
            <SkillSet />
          </div>
          <WorkHistory />
        </div>
      </div>
    </>
  )
}

export default About