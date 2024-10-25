// pages/survey.tsx
import type { NextPage } from 'next'

const Survey: NextPage = () => {
  // This variable represents the multiplier for tailwind's spacing scale
  const indentAmount = 16 // Assuming 16 corresponds to 'pl-16' in Tailwind

  return (
    <div className="flex flex-col items-center w-full">
      <div className="p-8">
        <main className={`shadow rounded-lg p-6`}>
          <h1 className="text-2xl font-bold border-b pb-2">Survey</h1>
          <p className="italic">
            (You can skip this step if you can find or have access to the
            existing sprinkler plans)
          </p>

          <h2 id="preparation" className="text-xl font-semibold mt-4">
            Preparation
          </h2>

          <div className="mt-4">
            <h3 className="font-semibold mt-2">Call the GC’s Superintendent</h3>
            <p>From this phone call we want 3 pieces of information:</p>
            <ul className={`list-decimal ${'pl-' + indentAmount}`}>
              <li>Is the job ready to be surveyed?</li>
              <li>What are site hours?</li>
              <li>
                Are there any special instructions to get inside the building
              </li>
              <li>Is it a secure area</li>
            </ul>

            <h2 id="how-to-survey" className="text-xl font-semibold mt-4">
              How To Survey
            </h2>

            <h3 className="font-semibold mt-4">
              Show up to the job at the specified time, with your iPad and PPE
            </h3>
            <h3 className="font-semibold mt-4">
              On Procore find the Demolition Drawing, open it in BlueBeam
            </h3>
            <h3 className="font-semibold mt-4">
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

            <h3 className="font-semibold mt-4">Take lots of pictures</h3>
            <h3 className="font-semibold mt-4">
              Upload your survey and pictures to Procore
            </h3>
            <ul className={`list-disc ${'pl-' + indentAmount}`}>
              <li>
                Survey goes in Sprinkler/Working Files for Engineer/For
                Reference
              </li>
              <li>Create a “Survey” album for your survey images</li>
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
