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
// pages/survey.tsx
import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { FaFolder } from 'react-icons/fa'
import { FaFilePdf } from 'react-icons/fa6'

interface CardData2 {
  gifUrl: string
  number: string
  title: string
  description: string
}

const Survey: NextPage = () => {
  const [baseURL, setBaseURL] = useState('')

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      setBaseURL('/afs-documentation')
    }
  }, [])
  // This variable represents the multiplier for tailwind's spacing scale
  const indentAmount = 16 // Assuming 16 corresponds to 'pl-16' in Tailwind

  const FindSize: CardData2[] = [
    {
      gifUrl: `${baseURL}/img/paper-space/guess.png`,
      number: '01',
      title: 'Use SG to place heads center tile',
      description: `
      `,
    },
  ]

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

  return (
    <div className="flex w-full flex-col items-center">
      <div className="p-8">
        <main className={`rounded-lg p-6`}>
          <h1 className="border-b pb-2 text-4xl font-bold">
            Create Your Paper Space
          </h1>

          <h2 id="pick-size" className="mt-8 border-b text-2xl font-semibold">
            Find the correct paper size
          </h2>

          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            <h3 className="mt-1 font-semibold">
              The size of your model will determine the size of your paper space
            </h3>

            <div className="mt-4 flex w-full justify-center rounded-lg bg-slate-900 py-2 pl-5">
              {renderCarouselNotes(FindSize)}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Survey
