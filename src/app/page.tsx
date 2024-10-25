'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [imageSrc, setImageSrc] = useState('/afs-logo.png')

  useEffect(() => {
    console.log('Environment:', process.env.NODE_ENV)
    if (process.env.NODE_ENV === 'production') {
      setImageSrc('/afs-documentation/afs-logo.png')
    }
  }, [])

  return (
    <div className="w-full flex flex-col items-center justify-center text-center">
      <Image src={imageSrc} alt="AFS Logo" width={500} height={500} />
      <h1 className="mt-6 text-3xl font-bold text-blue-600">
        AFS Employee Training Portal
      </h1>
      <p className="mt-4 text-lg text-gray-700">Explore our resources</p>
    </div>
  )
}
