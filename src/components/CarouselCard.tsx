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
    <div className="overflow-hidden rounded-lg shadow-lg">
      <div className="relative">
        <img
          src={gifUrl}
          alt="Detail"
          className="max-h-[85vh] w-full object-cover"
        />
        <div className="absolute left-0 top-0 bg-neutral-900 bg-opacity-50 p-2 text-sm text-white">
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
