import React from 'react'

interface CarouselCardProps {
  gifUrl: string
  number: string
  title: string
  description: string
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  gifUrl,
  number,
  title,
  description,
}) => {
  return (
    <div className="overflow-hidden rounded-lg">
      <div className="relative">
        <img src={gifUrl} alt="Detail" className="h-full w-full object-cover" />
        <div className="absolute left-0 top-0 bg-neutral-900 bg-opacity-50 p-2 text-sm text-white">
          {number}
        </div>
      </div>
      <div className="p-4">
        <h5 className="text-lg font-bold">{title}</h5>
      </div>
      {description && (
        <div className="mt-2 text-sm text-gray-300">
          {description.split('\n').map((line, index) => (
            <p key={index} className="mb-1">
              {line}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default CarouselCard
