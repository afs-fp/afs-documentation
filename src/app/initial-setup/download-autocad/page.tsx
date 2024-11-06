'use client'
import CarouselCard from '@/components/CarouselCard'
import CarouselCardNotes from '@/components/CarouselCardNotes'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface CardData2 {
  gifUrl: string
  number: string
  title: string
  description: string
}

const DownloadAutocad: NextPage = () => {
  const [baseURL, setBaseURL] = useState('')

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      setBaseURL('/afs-documentation')
    }
  }, [])

  const dAC: CardData2[] = [
    {
      gifUrl: `${baseURL}/img/initial-setup/d-ac/d-ac-1.png`,
      number: '01',
      title: 'Step 1',
      description: `Description for Step 1`,
    },
    {
      gifUrl: `${baseURL}/img/initial-setup/d-ac/d-ac-2.png`,
      number: '02',
      title: 'Step 2',
      description: `Description for Step 2`,
    },
    {
      gifUrl: `${baseURL}/img/initial-setup/d-ac/d-ac-3.png`,
      number: '03',
      title: 'Step 3',
      description: `Description for Step 3`,
    },
    {
      gifUrl: `${baseURL}/img/initial-setup/d-ac/d-ac-4.png`,
      number: '04',
      title: 'Step 4',
      description: `Description for Step 4`,
    },
    {
      gifUrl: `${baseURL}/img/initial-setup/d-ac/d-ac-5.png`,
      number: '05',
      title: 'Step 5',
      description: `Description for Step 5`,
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
        <main className="rounded-lg p-6">
          <h1 className="border-b pb-2 text-4xl font-bold">Download AutoCAD</h1>

          <h2
            id="layer-properties"
            className="mt-8 border-b text-2xl font-semibold"
          >
            Download AutoCAD
          </h2>
          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            <h3 className='text-lg'>Download Link</h3>
            <a
              href="https://www.autodesk.com/products/autocad/free-trial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              https://www.autodesk.com/products/autocad/free-trial
            </a>
            <div className='mb-4'></div>
            {renderCarousel(dAC)}
          </div>
        </main>
      </div>
    </div>
  )
}

export default DownloadAutocad
