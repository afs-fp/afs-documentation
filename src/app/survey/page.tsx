'use client'
// pages/survey.tsx
import type { NextPage } from 'next'
import { FaFolder } from 'react-icons/fa'
import { FaFilePdf } from 'react-icons/fa6'
import { useState, useEffect } from 'react'

import CarouselCardNotes from '@/components/CarouselCardNotes'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'

interface CardData2 {
  gifUrl: string
  number: string
  title: string
  description: string
}

const Survey: NextPage = () => {
  // This variable represents the multiplier for tailwind's spacing scale
  const indentAmount = 16 // Assuming 16 corresponds to 'pl-16' in Tailwind

  const [baseURL, setBaseURL] = useState('')

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      setBaseURL('/afs-documentation')
    }
  }, [])

  const OIB: CardData2[] = [
    {
      gifUrl: `${baseURL}/img/survey/oib/oib-1.png`,
      number: '01',
      title: 'Step 1',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/survey/oib/oib-2.png`,
      number: '02',
      title: 'Step 2',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/survey/oib/oib-3.png`,
      number: '03',
      title: 'Step 3',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/survey/oib/oib-4.png`,
      number: '04',
      title: 'Step 4',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/survey/oib/oib-5.png`,
      number: '05',
      title: 'Step 5',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/survey/oib/oib-6.png`,
      number: '06',
      title: 'Step 6',
      description: `
      `,
    },
  ]

  const ip: CardData2[] = [
    {
      gifUrl: `${baseURL}/img/survey/ipad/ip-2.png`,
      number: '01',
      title: 'Step 1',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/survey/ipad/ip-3.png`,
      number: '02',
      title: 'Step 2',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/survey/ipad/ip-4.png`,
      number: '03',
      title: 'Step 3',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/survey/ipad/ip-5.png`,
      number: '04',
      title: 'Step 4',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/survey/ipad/ip-6.png`,
      number: '05',
      title: 'Step 5',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/survey/ipad/ip-7.png`,
      number: '06',
      title: 'Step 6',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/survey/ipad/ip-8.png`,
      number: '07',
      title: 'Step 7',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/survey/ipad/ip-9.png`,
      number: '08',
      title: 'Step 8',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/survey/ipad/ip-10.png`,
      number: '09',
      title: 'Step 9',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/survey/ipad/ip-11.png`,
      number: '10',
      title: 'Step 10',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/survey/ipad/ip-12.png`,
      number: '11',
      title: 'Step 11',
      description: `
      `,
    },
  ]

  const renderCarousel = (data: CardData2[]) => (
    <Carousel className="h-fit w-fit max-w-3xl">
      <CarouselContent>
        {data.map((card, index) => (
          <CarouselItem key={index}>
            <CarouselCardNotes
              gifUrl={card.gifUrl}
              number={card.number}
              title={card.title}
              description={card.description}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )

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
                <li>
                  Is there a list to get in? (If there is, inform the PM of date
                  and time)
                </li>
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
                <p className="text-sm font-semibold text-slate-400">
                  Required:
                </p>
                <ul className="list-disc pl-4 text-slate-300">
                  <li>Pants</li>
                  <li>Boots</li>
                  <li>Hardhat</li>
                  <li>Eye protection</li>
                  <li>Gloves</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-400">
                  Optional:
                </p>
                <ul className="list-disc pl-4 text-slate-300">
                  <li>Earplugs</li>
                  <li>Mask</li>
                </ul>
              </div>
            </div>

            <h3 className="mt-1 font-semibold">
              Using you judgment, notify the site superintendent of your arrival
            </h3>
            <ul className="list-disc pl-8">
              <li>
                Relay any information from the superintendent to your manager
              </li>
              <ul className="list-disc pl-8">
                <li>
                  An example would be pipe flagged for relocation / demolition
                </li>
              </ul>
            </ul>
          </div>

          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            <h3 className="mb-5 mt-4 text-lg font-semibold">
              On Procore find the Drawing that most closely matches the current
              field conditions, open it in BlueBeam
            </h3>
            {renderCarousel(OIB)}
          </div>

          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            <h3 className="mt-4 font-semibold">
              With the Demolition Drawing open on BlueBeam, Draw in the existing
              system
            </h3>
            <ul className={`list-decimal ${'pl-' + indentAmount}`}>
              <li>
                Draw existing pipe using the Line tool (including pipe size)
              </li>
              <li>
                Draw existing heads / outlets (have a key to communicate
                specific head type / SIN)
              </li>
              <li>On the drawing, write down the:</li>
              <ul className={`list-disc ${'pl-' + indentAmount}`}>
                <li>Deck Height & Deck Material</li>
                <li>Pipe Center Line Height</li>
                <li>Bottom of Duct Height</li>
                <li>Beam Heights (if present)</li>
              </ul>
              <li>Flange, Feed, Riser (gather as much info as you can)</li>
            </ul>
          </div>

          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            <h3 className="mt-4 font-semibold">
              Upload your survey to Procore
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
            </ul>
            {renderCarousel(ip)}
          </div>

          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            <h3 className="mt-4 font-semibold">Take photos of jobsite</h3>
            <ul className={`list-disc ${'pl-' + indentAmount}`}>
              <li className="mt-2">
                Create a “Survey-DATE” album for your survey images
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
