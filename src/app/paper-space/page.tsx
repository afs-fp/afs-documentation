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
      title: 'Step 1',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/double-click.png`,
      number: '02',
      title: 'Step 2',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/center.png`,
      number: '03',
      title: 'Step 3',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/scale.png`,
      number: '04',
      title: 'Step 4',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/pan.png`,
      number: '05',
      title: 'Step 5',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/rename.png`,
      number: '06',
      title: 'Step 6',
      description: `
      `,
    },
  ]

  const FillOutBoilerplate: CardData2[] = [
    {
      gifUrl: `${baseURL}/img/paper-space/click-out.png`,
      number: '01',
      title: 'Step 1',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/shrink.png`,
      number: '02',
      title: 'Step 2',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/c-general.png`,
      number: '03',
      title: 'Step 3',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/fill-out.png`,
      number: '04',
      title: 'Step 4',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/others-added.png`,
      number: '05',
      title: 'Step 5',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/copy-to-here.png`,
      number: '06',
      title: 'Step 6',
      description: `
      `,
    },
  ]

  const SprinkSch: CardData2[] = [
    {
      gifUrl: `${baseURL}/img/paper-space/sprink-sch/gb-model.png`,
      number: '01',
      title: 'Step 1',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/sprink-sch/schedule-1.png`,
      number: '02',
      title: 'Step 2',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/sprink-sch/schedule-2.png`,
      number: '03',
      title: 'Step 3',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/sprink-sch/schedule-3.png`,
      number: '04',
      title: 'Step 4',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/sprink-sch/schedule-4.png`,
      number: '05',
      title: 'Step 5',
      description: `
      `,
    },
  ]

  const AddHB: CardData2[] = [
    {
      gifUrl: `${baseURL}/img/paper-space/hb/hb-1.png`,
      number: '01',
      title: 'Step 1',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/hb/hb-2.png`,
      number: '02',
      title: 'Step 2',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/hb/hb-3.png`,
      number: '03',
      title: 'Step 3',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/hb/hb-4.png`,
      number: '04',
      title: 'Step 4',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/hb/hb-5.png`,
      number: '05',
      title: 'Step 5',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/hb/hb-6.png`,
      number: '06',
      title: 'Step 6',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/hb/hb-7.png`,
      number: '07',
      title: 'Step 7',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/hb/hb-8.png`,
      number: '08',
      title: 'Step 8',
      description: `
      `,
    },
  ]

  const AddDetails: CardData2[] = [
    {
      gifUrl: `${baseURL}/img/paper-space/ad/ad-1.png`,
      number: '01',
      title: 'Step 1',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/ad/ad-2.png`,
      number: '02',
      title: 'Step 2',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/ad/ad-3.png`,
      number: '03',
      title: 'Step 3',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/ad/ad-4.png`,
      number: '04',
      title: 'Step 4',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/ad/ad-5.png`,
      number: '05',
      title: 'Step 5',
      description: `
      `,
    },
  ]

  const KeyPlan: CardData2[] = [
    {
      gifUrl: `${baseURL}/img/paper-space/kp/kp-1.png`,
      number: '01',
      title: 'Step 1',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/kp/kp-2.png`,
      number: '02',
      title: 'Step 2',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/kp/kp-3.png`,
      number: '03',
      title: 'Step 3',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/kp/kp-4.png`,
      number: '04',
      title: 'Step 4',
      description: `
      `,
    },
    {
      gifUrl: `${baseURL}/img/paper-space/kp/kp-5.png`,
      number: '05',
      title: 'Step 5',
      description: `
      `,
    },
  ]

  const renderCarouselNotes = (data: CardData2[]) => (
    <Carousel className="h-fit w-fit max-w-3xl">
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

          <h2 id="boilerplate" className="mt-8 border-b text-2xl font-semibold">
            Add basic information
          </h2>

          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            <div className="mt-4 flex w-full justify-center rounded-lg bg-slate-900 py-2 pl-5">
              {renderCarouselNotes(FillOutBoilerplate)}
            </div>
          </div>

          <h2 id="head-box" className="mt-8 border-b text-2xl font-semibold">
            Add sprinkler head box
          </h2>

          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            <h3 className="mt-1 font-semibold">
              First, use the sprinkler schedule to count
            </h3>
            <div className="mt-4 flex w-full justify-center rounded-lg bg-slate-900 py-2 pl-5">
              {renderCarouselNotes(SprinkSch)}
            </div>
            <h3 className="mt-1 font-semibold">
              Now add the head box to the paper space
            </h3>
            <div className="mt-4 flex w-full justify-center rounded-lg bg-slate-900 py-2 pl-5">
              {renderCarouselNotes(AddHB)}
            </div>
          </div>

          <h2 id="add-details" className="mt-8 border-b text-2xl font-semibold">
            Add details
          </h2>
          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            <div className="mt-4 flex w-full justify-center rounded-lg bg-slate-900 py-2 pl-5">
              {renderCarouselNotes(AddDetails)}
            </div>
          </div>

          <h2 id="add-keyplan" className="mt-8 border-b text-2xl font-semibold">
            Add key plan
          </h2>
          <div className="mt-4 rounded-lg bg-slate-900 px-2 py-1">
            <div className="mt-4 flex w-full justify-center rounded-lg bg-slate-900 py-2 pl-5">
              {renderCarouselNotes(KeyPlan)}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Survey
