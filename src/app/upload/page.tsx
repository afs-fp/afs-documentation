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

const Upload: NextPage = () => {
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

  const UploadProcore: CardData2[] = [
    {
      gifUrl: `${baseURL}/img/upload/procore/upload-1.png`,
      number: '01',
      title: 'Step 1',
      description: `
        `,
    },
    {
      gifUrl: `${baseURL}/img/upload/procore/upload-2.png`,
      number: '02',
      title: 'Step 2',
      description: `
          `,
    },
  ]

  const UpdateExcel: CardData2[] = [
    {
      gifUrl: `${baseURL}/img/upload/update/update-1.png`,
      number: '01',
      title: 'Step 1',
      description: `
        `,
    },
    {
      gifUrl: `${baseURL}/img/upload/update/update-2.png`,
      number: '02',
      title: 'Step 2',
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
            Upload For Review
          </h1>

          <h2
            id="print-drawing"
            className="mt-8 border-b text-2xl font-semibold"
          >
            Print your drawing
          </h2>
          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            <div className="mt-4 flex w-full justify-center rounded-lg bg-slate-900 py-2 pl-5">
              {renderCarousel(PrintDrawing)}
            </div>
          </div>

          <h2
            id="upload-procore"
            className="mt-8 border-b text-2xl font-semibold"
          >
            Upload to Procore
          </h2>
          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            <div className="mt-4 flex w-full justify-center rounded-lg bg-slate-900 py-2 pl-5">
              {renderCarousel(UploadProcore)}
            </div>
          </div>

          <h2
            id="update-excel"
            className="mt-8 border-b text-2xl font-semibold"
          >
            Update Excel
          </h2>
          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            <div className="mt-4 flex w-full justify-center rounded-lg bg-slate-900 py-2 pl-5">
              {renderCarousel(UpdateExcel)}
            </div>
          </div>
          <h2
            id="notify-manager"
            className="mt-8 border-b text-2xl font-semibold"
          >
            Notify Manager
          </h2>
          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            <h3 className="m-2 text-xl font-semibold">
              Finally, notify your manager that the job is up for review
            </h3>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Upload
