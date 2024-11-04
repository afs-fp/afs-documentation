'use client'
import { useState, useEffect } from 'react'
import type { NextPage } from 'next'

const CadReference: NextPage = () => {
  const [baseURL, setBaseURL] = useState('')
  const [length, setLength] = useState('')
  const [area, setArea] = useState(130) // Default area in square feet
  const [precision, setPrecision] = useState(2) // Default precision
  const [calculatedValue, setCalculatedValue] = useState<string | null>(null)

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      setBaseURL('/afs-documentation')
    }
  }, [])

  // Function to parse length input, ignoring non-numeric characters except for allowed delimiters
  const parseLength = (input: string) => {
    const sanitizedInput = input.replace(/[^\d\s'-]/g, '')
    const regex = /^(\d+)\s*['\-\s]\s*(\d*)$/ 
    const match = sanitizedInput.match(regex)

    if (match) {
      const feet = parseInt(match[1], 10) || 0
      const inches = parseInt(match[2], 10) || 0
      return feet * 12 + inches 
    }
    return null
  }

  const handleCalculate = () => {
    const totalLengthInInches = parseLength(length)
    
    if (totalLengthInInches !== null) {
      const newLengthInInches = area * 144 / (4 * totalLengthInInches)
      const feet = Math.floor(newLengthInInches / 12)
      const inches = (newLengthInInches % 12).toFixed(precision) // Use precision for decimal places

      // Convert inches to a number to remove trailing zeros if any
      const formattedInches = parseFloat(inches) 
      const formattedLength = `${feet}' - ${formattedInches}"`

      setCalculatedValue(formattedLength)
    } else {
      setCalculatedValue(null)
    }
  }

  return (
    <div className="flex w-full flex-col items-center">
      <div className="p-8">
        <main className="w-full rounded-lg p-6">
          <h1 className="border-b pb-2 text-4xl font-bold">Tools</h1>
          <p className="italic">
            Follow these steps carefully to integrate your designs with the
            existing system.
          </p>
          <h2 id="oh-helper" className="mt-8 border-b text-2xl font-semibold">OH Spacing Helper</h2>
          <div className="mt-4">
            {/* Area and Precision Row */}
            <div className="mt-4 flex space-x-4 opacity-70 text-sm">
              <div className="">
                <label htmlFor="area" className="block font-semibold w-fit">Area (sq ft):</label>
                <input
                  type="number"
                  id="area"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  onFocus={(e) => e.target.select()}
                  className="mt-1 w-20 rounded border p-1 text-gray-700 bg-gray-100 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
              <div className="">
                <label htmlFor="precision" className="block font-semibold">Precision:</label>
                <input
                  type="number"
                  id="precision"
                  value={precision}
                  onChange={(e) => setPrecision(Number(e.target.value))}
                  onFocus={(e) => e.target.select()}
                  className="mt-1 w-20 rounded border p-1 text-gray-700 bg-gray-100 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  min="0"
                />
              </div>
            </div>

            <label htmlFor="length" className="block mt-4 text-lg font-semibold">Length:</label>
            <input
              type="text"
              id="length"
              placeholder="Enter length (e.g., 10-6)"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              onFocus={(e) => e.target.select()}
              className="mt-2 w-full rounded border p-2 text-black"
            />
          </div>
          
          <button
            onClick={handleCalculate}
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
          >
            Calculate
          </button>

          {calculatedValue !== null && (
            <div className="mt-4 text-lg font-semibold">
              Calculated Value: {calculatedValue}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default CadReference
