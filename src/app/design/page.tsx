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

import type { NextPage } from 'next'
import { FaFolder } from 'react-icons/fa' // Import the folder icon
import { FaFile } from 'react-icons/fa'
import { FaFilePdf } from 'react-icons/fa6'
import CarouselCard from './CarouselCard'

interface CardData {
  gifUrl: string
  number: string
  title: string
}

const Design: NextPage = () => {
  const DownloadSurveyCardsData: CardData[] = [
    {
      gifUrl: '/gifs/download-survey/open-procore.gif',
      number: '01',
      title: 'Step 1: Open Procore',
    },
    {
      gifUrl: '/gifs/download-survey/select-job.gif',
      number: '02',
      title: 'Step 2: Select Job',
    },
    {
      gifUrl: '/gifs/download-survey/find-survey.gif',
      number: '03',
      title: 'Step 3: Find Survey In Documents',
    },
    {
      gifUrl: '/gifs/download-survey/download-to-xref.gif',
      number: '04',
      title: 'Step 4: Download To X-Ref Folder',
    },
  ]

  const DownloadCadCardsData: CardData[] = [
    {
      gifUrl: '/gifs/download-survey/open-procore.gif',
      number: '01',
      title: 'Step 1: Open Procore',
    },
    {
      gifUrl: '/gifs/download-survey/select-job.gif',
      number: '02',
      title: 'Step 2: Select Job',
    },
    {
      gifUrl: '/gifs/download-cad/download-contract-cad.gif',
      number: '03',
      title: 'Step 3: Download Relevant Cad',
    },
  ]

  return (
    <div className="flex flex-col items-center w-full">
      <div className="p-8">
        <main className="shadow-2xl w-full rounded-lg p-6">
          <h1 className="text-4xl font-bold border-b pb-2">Design Phase</h1>
          <p className="italic">
            Follow these steps carefully to integrate your designs with the
            existing system.
          </p>

          <h2 id="job-folder" className="text-2xl font-semibold mt-8 border-b">
            Create Job Folder
          </h2>
          <div className="mt-4 pl-5 bg-slate-900 rounded-lg py-2">
            <h3 className="font-semibold">
              Create a folder and name it the job name
            </h3>
            <ul className="list-none w-fit mt-0 pl-5 bg-slate-900 rounded-md p-2 pr-4 ">
              <li className="flex items-center mb-0">
                {' '}
                {/* No left padding for root folder */}
                <FaFolder className="text-yellow-500 mr-2 text-lg" /> Main Job
                Folder
              </li>
            </ul>
            <h3 className="font-semibold mt-2">
              Add folders within this job folder
            </h3>
            <div className="pl-5 w-fit mt-0  bg-slate-900 rounded-lg p-2 pr-4 ">
              <p>The structure can vary based on personal preference</p>
              <p>A basic example would be something like:</p>
              <ul className="list-none mt-2">
                <li className="flex items-center mb-0">
                  {' '}
                  {/* No left padding for root folder */}
                  <FaFolder className="text-yellow-500 mr-2 text-lg" /> Main Job
                  Folder
                </li>
                <ul className="list-none pl-8">
                  {' '}
                  {/* Increased left padding for subfolders */}
                  <li className="flex items-center">
                    <FaFolder className="text-yellow-600 mr-2" /> Contract Cad
                  </li>
                  <li className="flex items-center">
                    <FaFolder className="text-yellow-600 mr-2" /> Product Data
                  </li>
                  <li className="flex items-center">
                    <FaFolder className="text-yellow-600 mr-2" /> X-Ref
                  </li>
                </ul>
              </ul>
            </div>
          </div>

          <h2
            id="download-files"
            className="text-2xl font-semibold mt-8 border-b"
          >
            Download Files From Procore
          </h2>
          <div className="mt-4 pl-5 bg-slate-900 rounded-lg py-2 w-full">
            <h3 className="font-semibold my-2">Download your survey</h3>
            <div className="w-fit mt-0 ml-5 bg-slate-800 rounded-md px-16">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Example</AccordionTrigger>
                  <AccordionContent>
                    {/* Carousel component */}
                    <Carousel className="w-full max-w-3xl">
                      <CarouselContent>
                        {DownloadSurveyCardsData.map((card, index) => (
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
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <h3 className="font-semibold my-2">
              Download Relevant Contract Cad
            </h3>

            <ul className="list-none my-2 ml-5 w-fit bg-slate-900 rounded-md p-2 px-4">
              <li className="flex items-center mb-0">
                {' '}
                {/* No left padding for root folder */}
                <FaFile className="text-blue-300 mr-2 text-lg" /> RCP.dwg
              </li>
              <li className="flex items-center mb-0">
                {' '}
                {/* No left padding for root folder */}
                <FaFile className="text-blue-300 mr-2 text-lg" /> Mech.dwg
              </li>
            </ul>
            <div className="w-fit mt-0 ml-5 bg-slate-800 rounded-md px-16">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Example</AccordionTrigger>
                  <AccordionContent>
                    <Carousel className="w-full max-w-3xl">
                      <CarouselContent>
                        {DownloadCadCardsData.map((card, index) => (
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
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <h3 className="mt-4 font-semibold">
              You should end up with something like this
            </h3>
            <div className="ml-5 bg-slate-900 w-fit rounded-md p-2 px-4">
              <ul className="list-none mt-0">
                <li className="flex items-center mb-0">
                  {' '}
                  {/* No left padding for root folder */}
                  <FaFolder className="text-yellow-500 mr-2 text-lg" /> Main Job
                  Folder
                </li>
                <ul className="list-none pl-8">
                  {' '}
                  {/* Increased left padding for subfolders */}
                  <li className="flex items-center">
                    <FaFolder className="text-yellow-600 mr-2" /> Contract Cad
                  </li>
                  <ul className="list-none pl-8">
                    <li className="flex items-center mb-0">
                      {' '}
                      {/* No left padding for root folder */}
                      <FaFile className="text-blue-300 mr-2 text-lg" /> RCP.dwg
                    </li>
                    <li className="flex items-center mb-0">
                      {' '}
                      {/* No left padding for root folder */}
                      <FaFile className="text-blue-300 mr-2 text-lg" /> Mech.dwg
                    </li>
                  </ul>
                  <li className="flex items-center">
                    <FaFolder className="text-yellow-600 mr-2" /> Product Data
                  </li>
                  <li className="flex items-center">
                    <FaFolder className="text-yellow-600 mr-2" /> X-Ref
                  </li>
                  <ul className="list-none pl-8">
                    <li className="flex items-center mb-0">
                      {' '}
                      {/* No left padding for root folder */}
                      <FaFilePdf className="text-blue-300 mr-2 text-lg" />{' '}
                      Survey.pdf
                    </li>
                  </ul>
                </ul>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Design

{
  /* <div className="mt-4">
            <h3 className="font-semibold">Open and Copy RCP</h3>
            <p>
              Open the RCP that you downloaded. Do not convert if prompted.
              Navigate to the Model tab in the bottom left, copy the entire RCP,
              then paste it into your FP drawing:
            </p>
            <ul className={`list-decimal ${'pl-' + indentAmount}`}>
              <li>Select it all</li>
              <li>CTRL + C</li>
              <li>Switch tabs to your FP drawing</li>
              <li>Go to your model space (bottom left)</li>
              <li>Hit CTRL + V and place it below the template stuff</li>
            </ul>
          </div> */
}

{
  /* <h2
            id="import-survey-pdf"
            className="text-2xl font-semibold mt-8 border-b"
          >
            Import the Survey PDF
          </h2>
          <div className="mt-4">
            <h3 className="font-semibold">Insert and Scale PDF</h3>
            <p>
              Top left, click Insert PDF Underlay. Find the Survey PDF you
              downloaded to your X-refs folder and click Open. Insert it to the
              left of your RCP:
            </p>
            <ul className={`list-decimal ${'pl-' + indentAmount}`}>
              <li>Zoom in on it</li>
              <li>Type SC, hit space</li>
              <li>Select the PDF and right click</li>
              <li>Select the bottom left as the origin point</li>
              <li>Type 96 then hit Enter</li>
              <li>
                Zoom out, and move the PDF to be on the left side of your RCP
                (use the MOVE command)
              </li>
            </ul>
          </div>

          <h2
            id="draw-existing-system"
            className="text-2xl font-semibold mt-8 border-b"
          >
            Draw in the Existing System
          </h2>
          <div className="mt-4">
            <h3 className="font-semibold">Trace Your Survey</h3>
            <p>
              Select the PDF and fade it to your preference. Lock the PDF layer:
            </p>
            <ul className={`list-decimal ${'pl-' + indentAmount}`}>
              <li>Use RM (Rapid Main) to trace the mains on your survey</li>
              <li>Use RL (Rapid Line) to trace the lines on your survey</li>
              <li>
                Use SSP to select the sprinkler type and IS to insert the
                sprinklers as noted on your survey
              </li>
              <li>
                Switch all the line types to hidden, run the HAT command, and
                select all of your pipe
              </li>
            </ul>
          </div>

          <h2
            id="finalizing-design"
            className="text-2xl font-semibold mt-8 border-b"
          >
            Finalizing Design
          </h2>
          <div className="mt-4">
            <h3 className="font-semibold">Connect and Finalize</h3>
            <p>
              Connect your head layout to the existing system, draw armovers
              from outlets to your new heads, and finalize the drawing using the
              PP command. Adhere to the layer color scheme:
            </p>
            <ul className={`list-decimal ${'pl-' + indentAmount}`}>
              <li>Walls - White (NOT 255)</li>
              <li>Wall Hatch (wall fill color) - 8 or 9</li>
              <li>Glass - White (NOT 255)</li>
              <li>Ceiling Grid - 8</li>
              <li>Doors - 8</li>
              <li>Lights - 13</li>
              <li>Obstructing Mech - Green</li>
              <li>Non-obstructing Mech - 9</li>
            </ul>
          </div> */
}
