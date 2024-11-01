'use client'
// pages/design.tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { FaFolder } from 'react-icons/fa' // Import the folder icon
import { FaFile } from 'react-icons/fa'
import { FaFilePdf } from 'react-icons/fa6'
import CarouselCard from '@/components/CarouselCard'
import Image from 'next/image'

interface CardData {
  gifUrl: string
  number: string
  title: string
}

const SetHydTemplate: NextPage = () => {
  const [baseURL, setBaseURL] = useState('')

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      setBaseURL('/afs-documentation')
    }
  }, [])

  const renderCarousel = (data: CardData[]) => (
    <Carousel className="w-fit max-w-3xl">
      <CarouselContent>
        {data.map((card, index) => (
          <CarouselItem key={index}>
            <CarouselCard
              gifUrl={card.gifUrl}
              number={card.number}
              title={card.title}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )

  const AccordionSection: React.FC<{ content: JSX.Element }> = ({
    content,
  }) => (
    <div className="ml-5 mt-0 w-fit rounded-md bg-slate-800 px-16">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Example</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )

  return (
    <div className="flex w-full flex-col items-center">
      <div className="p-8">
        <main className="w-full rounded-lg p-6">
          <h1 className="border-b pb-2 text-4xl font-bold">
            Set Hydracad Template
          </h1>
          <p className="italic">
            Follow these steps carefully to integrate your designs with the
            existing system.
          </p>

          {/* START OF DOWNLOAD template ======================================================*/}
          <h2
            id="download-template"
            className="mt-8 border-b text-2xl font-semibold"
          >
            Download Template From Teams
          </h2>
          <div className="mt-4 w-full rounded-lg bg-slate-900 py-2 pl-5">
            <Image
              src={`${baseURL}/img/initial-setup/download-template.png`}
              alt={`${baseURL}/img/initial-setup/download-template.png`}
              width={1200} // Set appropriate width
              height={800} // Set appropriate height
              className="rounded-lg"
            />
          </div>
          {/* END OF DOWNLOAD template ======================================================*/}
          {/* START OF OPEN HYDRACAD ======================================================*/}
          <h2
            id="open-hydracad"
            className="mt-8 border-b text-2xl font-semibold"
          >
            Open Hydracad
          </h2>
          <div className="mt-4 flex w-full justify-center rounded-lg bg-slate-900 py-2 pl-5">
            <Image
              src={`${baseURL}/img/initial-setup/open-hydra.png`}
              alt={`${baseURL}/img/initial-setup/download-template.png`}
              width={800} // Set appropriate width
              height={800} // Set appropriate height
              className="rounded-lg"
            />
          </div>
          {/* END OF DOWNLOAD template ======================================================*/}
          {/* START OF OPEN HYDRACAD ======================================================*/}
          <h2
            id="open-hydracad"
            className="mt-8 border-b text-2xl font-semibold"
          >
            Start A New Drawing From Template
          </h2>
          <div className="mt-4 flex w-full justify-center rounded-lg bg-slate-900 py-2 pl-5">
            <Image
              src={`${baseURL}/img/initial-setup/start-new.png`}
              alt={`${baseURL}/img/initial-setup/download-template.png`}
              width={1200} // Set appropriate width
              height={800} // Set appropriate height
              className="rounded-lg"
            />
          </div>
          {/* END OF DOWNLOAD template ======================================================*/}
          {/* START OF OPEN HYDRACAD ======================================================*/}
          <h2
            id="open-hydracad"
            className="mt-8 border-b text-2xl font-semibold"
          >
            Select Template
          </h2>
          <div className="mt-4 flex w-full justify-center rounded-lg bg-slate-900 py-2 pl-5">
            <Image
              src={`${baseURL}/img/initial-setup/select-template.png`}
              alt={`${baseURL}/img/initial-setup/download-template.png`}
              width={800} // Set appropriate width
              height={800} // Set appropriate height
              className="rounded-lg"
            />
          </div>
          {/* END OF DOWNLOAD template ======================================================*/}
        </main>
      </div>
    </div>
  )
}

export default SetHydTemplate
