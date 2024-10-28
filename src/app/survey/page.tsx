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
          <h1 className="border-b pb-2 text-4xl font-bold">Survey Phase</h1>
          <p className="italic">
            (You can skip this step if you can find or have access to the
            existing sprinkler plans)
          </p>

          <h2 id="preparation" className="mt-8 border-b text-2xl font-semibold">
            Preparation
          </h2>

          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            <h3 className="mt-1 font-semibold">Call the GC’s Superintendent</h3>
            <p>From this phone call we want 4 pieces of information:</p>
            <ul className="ml-10 w-fit list-decimal rounded-lg bg-slate-900 px-8 py-2">
              <li>Is the job ready to be surveyed?</li>
              <li>What are site hours?</li>
              <li>
                Are there any special instructions to get inside the building
              </li>
              <li>Is it a secure area? If it is:</li>
              <ul className="list-disc pl-8">
                <li>How many forms of ID do I need?</li>
                <li>Am I allowed to bring electronics?</li>
              </ul>
            </ul>
          </div>

          <h2
            id="how-to-survey"
            className="mt-8 border-b text-2xl font-semibold"
          >
            How To Survey
          </h2>
          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            <h3 className="mt-1 font-semibold">
              Show up to the job at the specified time, with your iPad and PPE
            </h3>
            <div className="mt-2 flex flex-wrap space-x-8 pl-20">
              <div>
                <p className="text-sm font-semibold text-slate-400">Minimum:</p>
                <ul className="list-disc pl-4 text-slate-300">
                  <li>Pants</li>
                  <li>Boots</li>
                  <li>Hardhat</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-400">
                  Optional:
                </p>
                <ul className="list-disc pl-4 text-slate-300">
                  <li>Earplugs</li>
                  <li>Mask</li>
                  <li>Gloves</li>
                </ul>
              </div>
            </div>

            <h3 className="mt-4 font-semibold">
              On Procore find the Demolition Drawing, open it in BlueBeam
            </h3>
            <h3 className="mt-4 font-semibold">
              With the Demolition Drawing open on BlueBeam, Draw in the existing
              system
            </h3>
            <ul className={`list-decimal ${'pl-' + indentAmount}`}>
              <li>Draw existing pipe (including pipe size)</li>
              <li>Draw existing heads / outlets</li>
              <li>On the drawing, write down the:</li>
              <ul className={`list-disc ${'pl-' + indentAmount}`}>
                <li>Deck Height & Deck Material</li>
                <li>Pipe Center Line Height</li>
                <li>Bottom of Duct Height</li>
                <li>Beam Heights (if present)</li>
              </ul>
              <li>
                Flange, Feed, Riser (pretty much get as much info as you can)
              </li>
              <li>
                If you can, write information about the existing sprinkler heads
                (SIN Number)
              </li>
            </ul>

            <h3 className="mt-4 font-semibold">Take lots of pictures</h3>
            <h3 className="mt-4 font-semibold">
              Upload your survey and pictures to Procore
            </h3>
            <ul className={`list-disc ${'pl-' + indentAmount}`}>
              <li>
                Survey goes in Sprinkler/Working Files for Engineer/For
                Reference
              </li>

              <ul className="mt-2 list-none">
                <li className="mb-0 flex items-center">
                  {' '}
                  {/* No left padding for root folder */}
                  <FaFolder className="mr-2 text-lg text-yellow-500" />{' '}
                  Sprinkler
                </li>
                <ul className="list-none pl-8">
                  {' '}
                  {/* Increased left padding for subfolders */}
                  <li className="flex items-center">
                    <FaFolder className="mr-2 text-yellow-500" /> Working Files
                    for Engineer
                  </li>
                  <ul className="list-none pl-8">
                    {' '}
                    {/* Increased left padding for subfolders */}
                    <li className="flex items-center">
                      <FaFolder className="mr-2 text-yellow-500" /> For
                      Reference
                    </li>
                    <ul className="list-none pl-8">
                      {' '}
                      {/* Increased left padding for subfolders */}
                      <li className="flex items-center">
                        <FaFilePdf className="mr-2 text-blue-500" /> Survey
                      </li>
                    </ul>
                  </ul>
                </ul>
              </ul>

              <li className="mt-2">
                Create a “Survey” album for your survey images
              </li>
              <li>
                If the job has multiple Levels, or Zones - Create a separate
                album for each
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Survey
