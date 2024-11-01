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

const SetToolbar: NextPage = () => {
  const [baseURL, setBaseURL] = useState('')

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      setBaseURL('/afs-documentation')
    }
  }, [])

  const PrintDrawing: CardData2[] = [
    {
      gifUrl: `${baseURL}/img/upload/print/print-1.png`,
      number: '01',
      title: 'Step 1',
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
          <h1 className="border-b pb-2 text-4xl font-bold">
            Set Hydracad Toolbar
          </h1>

          <h2
            id="print-drawing"
            className="mt-8 border-b text-2xl font-semibold"
          >
            Set Hydracad Toolbar
          </h2>
          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            <Image
              src={`${baseURL}/img/initial-setup/toolbar/tb-1.png`}
              alt={`${baseURL}/img/initial-setup/download-template.png`}
              width={1200} // Set appropriate width
              height={800} // Set appropriate height
              className="rounded-lg"
            />
          </div>
        </main>
      </div>
    </div>
  )
}

export default SetToolbar
