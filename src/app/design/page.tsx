'use client'
// pages/design.tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { FaFolder } from 'react-icons/fa' // Import the folder icon
import { FaFile } from 'react-icons/fa'
import { FaFilePdf } from 'react-icons/fa6'
import CarouselCard from '@/components/CarouselCard'
import Image from 'next/image'
import CarouselCardNotes from '@/components/CarouselCardNotes'

interface CardData {
  gifUrl: string
  number: string
  title: string
}

interface CardData2 {
  gifUrl: string
  number: string
  title: string
  description: string
}

const Design: NextPage = () => {
  const [baseURL, setBaseURL] = useState('')

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      setBaseURL('/afs-documentation')
    }
  }, [])
  const DownloadSurveyCardsData: CardData[] = [
    {
      gifUrl: `${baseURL}/gifs/download-survey/open-procore.gif`,
      number: '01',
      title: 'Step 1: Open Procore',
    },
    {
      gifUrl: `${baseURL}/gifs/download-survey/select-job.gif`,
      number: '02',
      title: 'Step 2: Select Job',
    },
    {
      gifUrl: `${baseURL}/gifs/download-survey/find-survey.gif`,
      number: '03',
      title: 'Step 3: Find Survey In Documents',
    },
    {
      gifUrl: `${baseURL}/gifs/download-survey/download-to-xref.gif`,
      number: '04',
      title: 'Step 4: Download To X-Ref Folder',
    },
  ]

  const DownloadCadCardsData: CardData[] = [
    {
      gifUrl: `${baseURL}/gifs/download-survey/open-procore.gif`,
      number: '01',
      title: 'Step 1: Open Procore',
    },
    {
      gifUrl: `${baseURL}/gifs/download-survey/select-job.gif`,
      number: '02',
      title: 'Step 2: Select Job',
    },
    {
      gifUrl: `${baseURL}/gifs/download-cad/download-contract-cad.gif`,
      number: '03',
      title: 'Step 3: Download Relevant Cad',
    },
  ]

  const ImportExistingSystem: CardData2[] = [
    {
      gifUrl: `${baseURL}/img/design/switch-to-model.png`,
      number: '01',
      title: 'Step 1: Switch to model space',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/design/insert-pdf.png`,
      number: '02',
      title: 'Step 2: Insert PDF Underlay',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/design/find-pdf.png`,
      number: '03',
      title: 'Step 3: Find and open the PDF you downloaded from procore',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/design/default-settings.png`,
      number: '04',
      title: 'Step 4: Use these default settings and click Ok',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/design/click-insert.png`,
      number: '05',
      title: 'Step 5: Specify location and insert',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/gifs/design/scale-pdf.gif`,
      number: '06',
      title:
        'Step 6: Scale the PDF. Use the SC (scale) command with the number 96',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/gifs/design/verify-scale.gif`,
      number: '07',
      title: 'Step 7: Verify that the scale is correct',
      description: `
      - compare measurments between the survey and the RCP
      - use something like columns and measure the distance between them (idealy two very remote points)
      - verify that the distance is the same'
      - IF the distance isnt correct. Do the math and scale it to be be correct
      `,
    },
    {
      gifUrl: `${baseURL}/gifs/design/move-pdf.gif`,
      number: '07',
      title: 'Step 7: Move the PDF (MOVE command) to its final location',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/gifs/design/fade-pdf.gif`,
      number: '08',
      title: 'Step 8: Fade the PDF',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/gifs/design/lock-pdf.gif`,
      number: '09',
      title: 'Step 9: Lock the PDF',
      description: `
      `,
    },
  ]

  const DrawExistingSystemCardsData: CardData2[] = [
    {
      gifUrl: `${baseURL}/gifs/design/trace-main.gif`,
      number: '01',
      title: 'Use "RM" to trace the mains',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/gifs/design/trace-lines.gif`,
      number: '02',
      title: 'Use "RL" to trace the lines',
      description: `
        - "Click" at every head to create a point in the line.
        - If you need to change direction: Type "C" and hit "ENTER".
        - If heads are in-line, click to the other head and delete extra lines.
      `,
    },
    {
      gifUrl: `${baseURL}/gifs/design/add-heads.gif`,
      number: '03',
      title: 'Insert Sprinklers/Outlets',
      description: `
        - Use "SSP" to select a sprinkler head to insert.
        - Use "IS" to start inserting that head.
        - Refer to the CAD Reference for sprinkler head symbols.
      `,
    },
    {
      gifUrl: `${baseURL}/gifs/design/break-main.gif`,
      number: '04',
      title: 'Use RL to break the main if needed',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/gifs/design/qb.gif`,
      number: '05',
      title: 'Use QB to add line continuations',
      description: `
        - Use the QB command to continue lines for complex routing.
      `,
    },
    {
      gifUrl: `${baseURL}/gifs/design/qc.gif`,
      number: '06',
      title: 'Use QC to add line caps',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/design/size-pipe.png`,
      number: '07',
      title: 'Add sizes to all of your pipe',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/gifs/design/hat.gif`,
      number: '08',
      title: 'use HAT to hide all pipe lengths',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/gifs/design/hidden.gif`,
      number: '09',
      title: 'Change all pipe to hidden',
      description: `
      - Select a pice of main
      - Select a pice of line
      - Run SELECTSIMILAR
      - Change to "Hidden"
      `,
    },
  ]

  const ImportRCP: CardData2[] = [
    {
      gifUrl: `${baseURL}/img/design/rcp.png`,
      number: '01',
      title: 'Open the RCP you downloaded from Procore',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/design/ImportRCP/switch-model.png`,
      number: '02',
      title: 'Switch to model space',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/gifs/design/importRCP/unlock-unfreeze.gif`,
      number: '03',
      title: 'Use Layer Properties to unlock and or unfreeze any layers',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/design/ImportRCP/select-model.png`,
      number: '04',
      title: 'Select Model',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/design/ImportRCP/paste-RCP.png`,
      number: '05',
      title: 'Paste the RCP',
      description: `
      `,
    },
  ]

  const CleanRCP: CardData2[] = [
    {
      gifUrl: `${baseURL}/gifs/design/cleanRCP/freeze.gif`,
      number: '01',
      title: 'Freeze irelevant infromation from the drawing',
      description: `
      - use LAYFRZ
      `,
    },
    {
      gifUrl: `${baseURL}/gifs/design/cleanRCP/by-layer.gif`,
      number: '02',
      title: 'Change the entire drawing to be ByLayer',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/gifs/design/cleanRCP/fix-color.gif`,
      number: '03',
      title: 'Go through and change every layer to be the correct color',
      description: `
      - Refer to Reference / CAD
      - If an object wont change color, try using BURST on it
      `,
    },
    {
      gifUrl: `${baseURL}/gifs/design/cleanRCP/lock-layers.gif`,
      number: '04',
      title: 'Lock the ceiling & hatch layer (or any others you prefer)',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/gifs/design/cleanRCP/replace-ceiling-tags.gif`,
      number: '05',
      title: 'Replace the ceiling tags with our own',
      description: `
      `,
    },
  ]

  const CopySystem: CardData2[] = [
    {
      gifUrl: `${baseURL}/gifs/design/copy-system/group.gif`,
      number: '01',
      title: 'Optional: Group your existing system',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/gifs/design/copy-system/copy.gif`,
      number: '02',
      title: 'Copy your existing system to your RCP',
      description: `
      - Use a base point that is both on your survey and on the RCP
      - Things like columns or doors are good options
      `,
    },
  ]

  const CreateLayout: CardData2[] = [
    {
      gifUrl: `${baseURL}/gifs/design/create-layout/sg.gif`,
      number: '01',
      title: 'Use SG to place heads center tile',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/gifs/design/create-layout/arm.gif`,
      number: '02',
      title: 'Conect heads to existing system with armovers',
      description: `
      - Draw a line from a new head to an existing outlet
      - Switch this line to be on the layer SPRINKDAT4
      `,
    },
    {
      gifUrl: `${baseURL}/gifs/design/create-layout/size.gif`,
      number: '03',
      title: 'Size your new pipe',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/gifs/design/create-layout/cleanup.gif`,
      number: '04',
      title: 'Run CLEANUP_SIZES',
      description: `
      - Right click to keep the origional location
      - Left click to select new location
      `,
    },
    {
      gifUrl: `${baseURL}/gifs/design/create-layout/pp.gif`,
      number: '05',
      title: 'Pretty Pipe your drawing',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/gifs/design/create-layout/gen.gif`,
      number: '06',
      title: 'Create general section',
      description: `
      - Copy from template
      - Modify to match the information you got on your survey
      `,
    },
  ]

  const renderCarousel = (data: CardData[]) => (
    <Carousel className="w-fit max-w-3xl">
      <CarouselContent>
        {data.map((card, index) => (
          <CarouselItem key={index}>
            <CarouselCard
              gifUrl={card.gifUrl}
              number={card.number}
              title={card.title}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )

  const renderCarouselNotes = (data: CardData2[]) => (
    <Carousel className="w-fit max-w-3xl">
      <CarouselContent>
        {data.map((card, index) => (
          <CarouselItem key={index}>
            <CarouselCardNotes
              gifUrl={card.gifUrl}
              number={card.number}
              title={card.title}
              description={card.description} // Pass description
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )

  const AccordionSection: React.FC<{ content: JSX.Element }> = ({
    content,
  }) => (
    <div className="ml-5 mt-0 w-fit rounded-md bg-slate-800 px-16">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Example</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )

  return (
    <div className="flex w-full flex-col items-center">
      <div className="p-8">
        <main className="w-full rounded-lg p-6">
          <h1 className="border-b pb-2 text-4xl font-bold">Design Phase</h1>

          {/* START OF CREATE JOB FOLDER ======================================================*/}
          <h2 id="job-folder" className="mt-8 border-b text-2xl font-semibold">
            Create Job Folder
          </h2>
          <div className="mt-4 rounded-lg bg-slate-900 py-2 pl-5">
            <h3 className="font-semibold">
              Create a folder on your computer and name it the job name
            </h3>
            <ul className="mt-0 w-fit list-none rounded-md bg-slate-900 p-2 pl-5 pr-4">
              <li className="mb-0 flex items-center">
                {' '}
                {/* No left padding for root folder */}
                <FaFolder className="mr-2 text-lg text-yellow-500" /> Main Job
                Folder
              </li>
            </ul>
            <h3 className="mt-2 font-semibold">
              Add folders within this job folder
            </h3>
            <div className="mt-0 w-fit rounded-lg bg-slate-900 p-2 pl-5 pr-4">
              <p>The structure can vary based on personal preference</p>
              <p>A basic example would be something like:</p>
              <ul className="mt-2 list-none">
                <li className="mb-0 flex items-center">
                  {' '}
                  {/* No left padding for root folder */}
                  <FaFolder className="mr-2 text-lg text-yellow-500" /> Main Job
                  Folder
                </li>
                <ul className="list-none pl-8">
                  {' '}
                  {/* Increased left padding for subfolders */}
                  <li className="flex items-center">
                    <FaFolder className="mr-2 text-yellow-600" /> Contract Cad
                  </li>
                  <li className="flex items-center">
                    <FaFolder className="mr-2 text-yellow-600" /> Product Data
                  </li>
                  <li className="flex items-center">
                    <FaFolder className="mr-2 text-yellow-600" /> X-Ref
                  </li>
                </ul>
              </ul>
            </div>
          </div>
          {/* END OF CREATE JOB FOLDER ======================================================*/}

          {/* START OF DOWNLOAD FILES ======================================================*/}
          <h2
            id="download-files"
            className="mt-8 border-b text-2xl font-semibold"
          >
            Download Files From Procore
          </h2>
          <div className="mt-4 w-full rounded-lg bg-slate-900 py-2 pl-5">
            <h3 className="my-2 font-semibold">Download your survey</h3>
            <AccordionSection
              content={renderCarousel(DownloadSurveyCardsData)}
            />
            <h3 className="my-2 font-semibold">
              Download Relevant Contract Cad
            </h3>

            <ul className="my-2 ml-5 w-fit list-none rounded-md bg-slate-900 p-2 px-4">
              <li className="mb-0 flex items-center">
                {' '}
                {/* No left padding for root folder */}
                <FaFile className="mr-2 text-lg text-blue-300" /> RCP.dwg
              </li>
              <li className="mb-0 flex items-center">
                {' '}
                {/* No left padding for root folder */}
                <FaFile className="mr-2 text-lg text-blue-300" /> Mech.dwg
              </li>
            </ul>
            <AccordionSection content={renderCarousel(DownloadCadCardsData)} />

            <h3 className="mt-4 font-semibold">
              You should end up with something like this
            </h3>
            <div className="ml-5 w-fit rounded-md bg-slate-900 p-2 px-4">
              <ul className="mt-0 list-none">
                <li className="mb-0 flex items-center">
                  {' '}
                  {/* No left padding for root folder */}
                  <FaFolder className="mr-2 text-lg text-yellow-500" /> Main Job
                  Folder
                </li>
                <ul className="list-none pl-8">
                  {' '}
                  {/* Increased left padding for subfolders */}
                  <li className="flex items-center">
                    <FaFolder className="mr-2 text-yellow-600" /> Contract Cad
                  </li>
                  <ul className="list-none pl-8">
                    <li className="mb-0 flex items-center">
                      {' '}
                      {/* No left padding for root folder */}
                      <FaFile className="mr-2 text-lg text-blue-300" /> RCP.dwg
                    </li>
                    <li className="mb-0 flex items-center">
                      {' '}
                      {/* No left padding for root folder */}
                      <FaFile className="mr-2 text-lg text-blue-300" /> Mech.dwg
                    </li>
                  </ul>
                  <li className="flex items-center">
                    <FaFolder className="mr-2 text-yellow-600" /> Product Data
                  </li>
                  <li className="flex items-center">
                    <FaFolder className="mr-2 text-yellow-600" /> X-Ref
                  </li>
                  <ul className="list-none pl-8">
                    <li className="mb-0 flex items-center">
                      {' '}
                      {/* No left padding for root folder */}
                      <FaFilePdf className="mr-2 text-lg text-blue-300" />{' '}
                      Survey.pdf
                    </li>
                  </ul>
                </ul>
              </ul>
            </div>
          </div>
          {/* END OF DOWNLOAD FILES ======================================================*/}

          <h2 id="start-fp" className="mt-8 border-b text-2xl font-semibold">
            Start New FP Drawing
          </h2>
          <div className="mt-4 w-full rounded-lg bg-slate-900 py-2 pl-5">
            <Image
              src={`${baseURL}/img/design/start-fp.png`}
              alt={`${baseURL}/img/initial-setup/download-template.png`}
              width={800} // Set appropriate width
              height={800} // Set appropriate height
              className="rounded-lg"
            />
          </div>

          <h2 id="import-rcp" className="mt-8 border-b text-2xl font-semibold">
            Import RCP
          </h2>
          <div className="mt-4 flex w-full justify-center rounded-lg bg-slate-900 py-2 pl-5">
            {renderCarouselNotes(ImportRCP)}
          </div>
          <h2 id="clean-rcp" className="mt-8 border-b text-2xl font-semibold">
            Clean RCP
          </h2>
          <div className="mt-4 flex w-full justify-center rounded-lg bg-slate-900 py-2 pl-5">
            {renderCarouselNotes(CleanRCP)}
          </div>
          <h2
            id="import-existing"
            className="mt-8 border-b text-2xl font-semibold"
          >
            Import Existing System Reference
          </h2>
          <div className="mt-4 flex w-full justify-center rounded-lg bg-slate-900 py-2 pl-5">
            {renderCarouselNotes(ImportExistingSystem)}
          </div>
          <h2
            id="draw-existing"
            className="mt-8 border-b text-2xl font-semibold"
          >
            Draw in the Existing System
          </h2>
          <div className="mt-4 flex w-full justify-center rounded-lg bg-slate-900 py-2 pl-5">
            {renderCarouselNotes(DrawExistingSystemCardsData)}
          </div>

          <h2
            id="copy-existing"
            className="mt-8 border-b text-2xl font-semibold"
          >
            Copy Existing System to RCP
          </h2>
          <div className="mt-4 flex w-full justify-center rounded-lg bg-slate-900 py-2 pl-5">
            {renderCarouselNotes(CopySystem)}
          </div>

          <h2 id="mech" className="mt-8 border-b text-2xl font-semibold">
            Trim and Import Your Mechanical
          </h2>
          <a
            href="https://www.youtube.com/watch?v=FB3EwP4CVhU&t=1s"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full max-w-lg flex-col items-center overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
          >
            <button className="mt-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Watch on YouTube
            </button>
          </a>

          <h2
            id="create-layout"
            className="mt-8 border-b text-2xl font-semibold"
          >
            Create Head Layout
          </h2>
          <div className="mt-4 flex w-full justify-center rounded-lg bg-slate-900 py-2 pl-5">
            {renderCarouselNotes(CreateLayout)}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Design
