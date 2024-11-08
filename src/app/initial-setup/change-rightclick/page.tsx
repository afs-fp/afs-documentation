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

const ChangeOrtho: NextPage = () => {
  const [baseURL, setBaseURL] = useState('')

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      setBaseURL('/afs-documentation')
    }
  }, [])

  const Layer: CardData2[] = [
    {
      gifUrl: `${baseURL}/img/initial-setup/change-rightclick/c-r-1.png`,
      number: '01',
      title: 'Step 1',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/initial-setup/change-rightclick/c-r-2.png`,
      number: '02',
      title: 'Step 2',
      description: `
      `,
    },
    {
        gifUrl: `${baseURL}/img/initial-setup/change-rightclick/c-r-3.png`,
        number: '03',
        title: 'Step 3',
        description: `
        `,
      },
];


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
          <h1 className="border-b pb-2 text-4xl font-bold">Change Right Click</h1>

          <h2
            id="layer-properties"
            className="mt-8 border-b text-2xl font-semibold"
          >
            Follow these steps to change your right click behavior
          </h2>
          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            {renderCarousel(Layer)}
          </div>
        </main>
      </div>
    </div>
  )
}

export default ChangeOrtho
