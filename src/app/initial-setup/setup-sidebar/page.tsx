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

const SetSidebar: NextPage = () => {
  const [baseURL, setBaseURL] = useState('')

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      setBaseURL('/afs-documentation')
    }
  }, [])

  const Layer: CardData2[] = [
    {
      gifUrl: `${baseURL}/img/initial-setup/layer-sidebar/layer-1.png`,
      number: '01',
      title: 'Step 1',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/initial-setup/layer-sidebar/layer-2.png`,
      number: '02',
      title: 'Step 2',
      description: `
        `,
    },
    {
      gifUrl: `${baseURL}/img/initial-setup/layer-sidebar/layer-3.png`,
      number: '03',
      title: 'Step 3',
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
        <main className="rounded-lg p-6">
          <h1 className="border-b pb-2 text-4xl font-bold">Setup Sidebars</h1>

          <h2
            id="layer-properties"
            className="mt-8 border-b text-2xl font-semibold"
          >
            Setup Layer Properties
          </h2>
          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            {renderCarousel(Layer)}
          </div>
          <h2
            id="layer-properties"
            className="mt-8 border-b text-2xl font-semibold"
          >
            Setup Properties
          </h2>
          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            {/* {renderCarousel(Layer)} */}
            <p>TODO: its different on a fresh autocad install, need to document on new employee</p>
          </div>
          <h2
            id="layer-properties"
            className="mt-8 border-b text-2xl font-semibold"
          >
            Setup External References
          </h2>
          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            {/* {renderCarousel(Layer)} */}
            <p>TODO: its different on a fresh autocad install, need to document on new employee</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default SetSidebar
