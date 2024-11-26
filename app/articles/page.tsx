import CommingSoon from '@/components/ui/comming-soon'
import { QiitaIcon } from '@/components/ui/icons'
import React from 'react'

const Articles=() => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center min-h-screen">
      <CommingSoon label="Articles" />
      <a
        href="https://qiita.com/ShinguAkira"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center space-x-2"
      >
        <QiitaIcon className="w-6 h-6" />
        <span className="text-green-600 font-semibold">Visit Qiita</span>
      </a>
    </div>
  )
}

export default Articles