'use client'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    console.log('Environment:', process.env.NODE_ENV)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Image
        src="/afs-logo.png"
        alt="AFS Logo"
        width={150}
        height={150}
        className="shadow-lg"
      />
      <h1 className="mt-6 text-3xl font-bold text-blue-600">
        AFS Employee Training Portal
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        Explore our resources to help you grow and succeed in your role
      </p>
    </div>
  )
}
