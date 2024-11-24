"use client";

import { useState } from 'react'
import { ChevronDown, ChevronUp, Building2, Calendar } from 'lucide-react'

type WorkExperience = {
  id: number
  company: string
  role: string
  period: string
  description: string[]
  technologies: string[]
}

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    company: "Tech Innovators Inc.",
    role: "Senior Full Stack Developer",
    period: "Jan 2020 - Present",
    description: [
      "Led a team of 5 developers in creating a cloud-based project management tool.",
      "Implemented microservices architecture, improving system scalability by 40%.",
      "Mentored junior developers, increasing team productivity by 25%."
    ],
    technologies: ["React", "Node.js", "AWS", "Docker", "MongoDB"]
  },
  {
    id: 2,
    company: "DataDrive Solutions",
    role: "Frontend Developer",
    period: "Mar 2017 - Dec 2019",
    description: [
      "Developed responsive web applications using React and Redux.",
      "Collaborated with UX designers to implement pixel-perfect interfaces.",
      "Reduced load times by 30% through code optimization and lazy loading."
    ],
    technologies: ["React", "Redux", "SASS", "Webpack", "Jest"]
  },
  {
    id: 3,
    company: "StartUp Rocket",
    role: "Junior Web Developer",
    period: "Jun 2015 - Feb 2017",
    description: [
      "Assisted in building and maintaining e-commerce websites.",
      "Implemented payment gateway integrations for multiple clients.",
      "Participated in daily scrum meetings and bi-weekly sprint planning."
    ],
    technologies: ["JavaScript", "PHP", "MySQL", "Bootstrap", "jQuery"]
  }
]

export default function WorkHistory() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number): void => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">My Work History</h1>
        <div className="space-y-6">
          {workExperiences.map((experience) => (
            <div key={experience.id} className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    {experience.role}
                  </h3>
                  <button
                    onClick={() => toggleExpand(experience.id)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-expanded={expandedId === experience.id}
                  >
                    {expandedId === experience.id ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                  {experience.company}
                </p>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center">
                      <Building2 className="h-5 w-5 mr-2" />
                      Company
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white">{experience.company}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Period
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white">{experience.period}</dd>
                  </div>
                  {expandedId === experience.id && (
                    <>
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Description</dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                          <ul className="list-disc pl-5 space-y-1">
                            {experience.description.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Technologies</dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, index) => (
                              <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </dd>
                      </div>
                    </>
                  )}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}