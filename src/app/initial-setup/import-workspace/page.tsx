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

const ImportWorkspace: NextPage = () => {
  const [baseURL, setBaseURL] = useState('')

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      setBaseURL('/afs-documentation')
    }
  }, [])

  const ImportWorkspace: CardData2[] = [
    {
      gifUrl: `${baseURL}/img/initial-setup/import-workspace/iw-1.png`,
      number: '01',
      title: 'Step 1',
      description: `
        `,
    },
    {
      gifUrl: `${baseURL}/img/initial-setup/import-workspace/iw-2.png`,
      number: '02',
      title: 'Step 2',
      description: `
        `,
    },
    {
      gifUrl: `${baseURL}/img/initial-setup/import-workspace/iw-3.png`,
      number: '03',
      title: 'Step 3',
      description: `
        `,
    },
    {
      gifUrl: `${baseURL}/img/initial-setup/import-workspace/iw-4.png`,
      number: '04',
      title: 'Step 4',
      description: `
        `,
    },
    {
      gifUrl: `${baseURL}/img/initial-setup/import-workspace/iw-5.png`,
      number: '05',
      title: 'Step 5',
      description: `
        `,
    },
    {
      gifUrl: `${baseURL}/img/initial-setup/import-workspace/iw-6.png`,
      number: '06',
      title: 'Step 6',
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
          <h1 className="border-b pb-2 text-4xl font-bold">Import Workspace</h1>

          <h2
            id="layer-properties"
            className="mt-8 border-b text-2xl font-semibold"
          >
            Follow these steps to import a workspace
          </h2>
          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            {renderCarousel(ImportWorkspace)}
          </div>
        </main>
      </div>
    </div>
  )
}

export default ImportWorkspace
