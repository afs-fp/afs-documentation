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

interface CardData2 {
  gifUrl: string
  number: string
  title: string
  description: string
}

const ProductData: NextPage = () => {
  const [baseURL, setBaseURL] = useState('')

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      setBaseURL('/afs-documentation')
    }
  }, [])

  const CopyFiles: CardData2[] = [
    {
      gifUrl: `${baseURL}/img/pd/cp/cp-1.png`,
      number: '01',
      title: 'Step 1',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/pd/cp/cp-2.png`,
      number: '02',
      title: 'Step 2',
      description: `
      `,
    },
  ]

  const CoverPage: CardData2[] = [
    {
      gifUrl: `${baseURL}/img/pd/cover/cover-1.png`,
      number: '01',
      title: 'Step 1',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/pd/cover/cover-2.png`,
      number: '02',
      title: 'Step 2',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/pd/cover/cover-3.png`,
      number: '03',
      title: 'Step 3',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/pd/cover/cover-4.png`,
      number: '04',
      title: 'Step 4',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/pd/cover/cover-5.png`,
      number: '05',
      title: 'Step 5',
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
          <h1 className="border-b pb-2 text-4xl font-bold">Product Data</h1>

          <h2 id="pick-size" className="mt-8 border-b text-2xl font-semibold">
            Copy Files
          </h2>
          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            <div className="mt-4 flex w-full justify-center rounded-lg bg-slate-900 py-2 pl-5">
              {renderCarousel(CopyFiles)}
            </div>
          </div>

          <h2 id="pick-size" className="mt-8 border-b text-2xl font-semibold">
            Create Cover Page
          </h2>
          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            <div className="mt-4 flex w-full justify-center rounded-lg bg-slate-900 py-2 pl-5">
              {renderCarousel(CoverPage)}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default ProductData
