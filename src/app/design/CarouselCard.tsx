// components/CarouselCard.tsx
import React from 'react'

interface CarouselCardProps {
  gifUrl: string
  number: string
  title: string
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  gifUrl,
  number,
  title,
}) => {
  return (
    <div className=" rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img src={gifUrl} alt="Detail" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 bg-neutral-900 bg-opacity-50 text-white p-2 text-sm">
          {number}
        </div>
      </div>
      {/* Moved the title below the image to avoid covering the GIF */}
      <div className="p-4">
        <h5 className="text-lg font-bold">{title}</h5>
      </div>
    </div>
  )
}

export default CarouselCard
