// pages/survey.tsx
import type { NextPage } from 'next'
import { FaFolder } from 'react-icons/fa'
import { FaFilePdf } from 'react-icons/fa6'

const Survey: NextPage = () => {
  // This variable represents the multiplier for tailwind's spacing scale
  const indentAmount = 16 // Assuming 16 corresponds to 'pl-16' in Tailwind

  return (
    <div className="flex w-full flex-col items-center">
      <div className="p-8">
        <main className={`rounded-lg p-6`}>
          <h1 className="border-b pb-2 text-4xl font-bold">
            Create Your Paper Space
          </h1>

          <h2 id="preparation" className="mt-8 border-b text-2xl font-semibold">
            Pick the paper size
          </h2>

          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            <h3 className="mt-1 font-semibold">
              The size of your model will determine the size of your paper space
            </h3>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Survey
