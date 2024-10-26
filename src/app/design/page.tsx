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
import CarouselCard from './CarouselCard'

interface CardData {
  gifUrl: string
  number: string
  title: string
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

  const AccordionSection: React.FC<{ content: JSX.Element }> = ({
    content,
  }) => (
    <div className="w-fit mt-0 ml-5 bg-slate-800 rounded-md px-16">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Example</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )

  return (
    <div className="flex flex-col items-center w-full">
      <div className="p-8">
        <main className=" w-full rounded-lg p-6">
          <h1 className="text-4xl font-bold border-b pb-2">Design Phase</h1>
          <p className="italic">
            Follow these steps carefully to integrate your designs with the
            existing system.
          </p>

          {/* START OF CREATE JOB FOLDER ======================================================*/}
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
          {/* END OF CREATE JOB FOLDER ======================================================*/}

          {/* START OF DOWNLOAD FILES ======================================================*/}
          <h2
            id="download-files"
            className="text-2xl font-semibold mt-8 border-b"
          >
            Download Files From Procore
          </h2>
          <div className="mt-4 pl-5 bg-slate-900 rounded-lg py-2 w-full">
            <h3 className="font-semibold my-2">Download your survey</h3>
            <AccordionSection
              content={renderCarousel(DownloadSurveyCardsData)}
            />
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
            <AccordionSection content={renderCarousel(DownloadCadCardsData)} />

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
          {/* END OF DOWNLOAD FILES ======================================================*/}

          <h2 id="start-fp" className="text-2xl font-semibold mt-8 border-b">
            Start New FP Drawing
          </h2>
          <div className="mt-4 pl-5 bg-slate-900 rounded-lg py-2 w-full"></div>

          <h2
            id="import-existing"
            className="text-2xl font-semibold mt-8 border-b"
          >
            Import Existing System
          </h2>
          <div className="mt-4 pl-5 bg-slate-900 rounded-lg py-2 w-full"></div>
          <h2
            id="draw-existing"
            className="text-2xl font-semibold mt-8 border-b"
          >
            Draw in the Existing System
          </h2>
          <div className="mt-4 pl-5 bg-slate-900 rounded-lg py-2 w-full"></div>
          <h2 id="import-rcp" className="text-2xl font-semibold mt-8 border-b">
            Import RCP
          </h2>
          <div className="mt-4 pl-5 bg-slate-900 rounded-lg py-2 w-full"></div>
          <h2 id="clean-rcp" className="text-2xl font-semibold mt-8 border-b">
            Clean RCP
          </h2>
          <div className="mt-4 pl-5 bg-slate-900 rounded-lg py-2 w-full"></div>
        </main>
      </div>
    </div>
  )
}

export default Design
