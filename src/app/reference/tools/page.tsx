'use client'
import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import OH_Visual from './OH_Visual'
import { parseLength } from './parseLength'

const CadReference: NextPage = () => {
  const [baseURL, setBaseURL] = useState('')
  const [length, setLength] = useState('')
  const [length2, setLength2] = useState('')
  const [area, setArea] = useState(130) // Default area in square feet
  const [precision, setPrecision] = useState(2) // Default precision
  const [calculatedValue, setCalculatedValue] = useState<string | null>(null)
  const [newLength, setNewLength] = useState<number | null>(null)

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      setBaseURL('/afs-documentation')
    }
  }, [])

  // Separate functions for different calculations
  const calculateWithLength = () => {
    const totalLengthInInches = parseLength(length)
    if (totalLengthInInches !== null) {
      const newLengthInInches = (area * 144) / (4 * totalLengthInInches)
      setNewLength(newLengthInInches)
      const feet = Math.floor(newLengthInInches / 12)
      const inches = (newLengthInInches % 12).toFixed(precision)

      // Format inches to remove trailing zeros
      const formattedInches = parseFloat(inches)
      const formattedLength = `${feet}' - ${formattedInches}"`
      setCalculatedValue(formattedLength)
    } else {
      setCalculatedValue(null)
      setNewLength(null)
    }
  }

  const calculateWithLength2 = () => {
    const totalLength2InInches = parseLength(length2)
    if (totalLength2InInches !== null) {
      const newLengthInInches = (area * 144) / totalLength2InInches
      setNewLength(newLengthInInches)
      const feet = Math.floor(newLengthInInches / 12)
      const inches = (newLengthInInches % 12).toFixed(precision)

      const formattedInches = parseFloat(inches)
      const formattedLength = `${feet}' - ${formattedInches}"`
      setCalculatedValue(formattedLength)
    } else {
      setCalculatedValue(null)
      setNewLength(null)
    }
  }

  // UseEffect to dynamically choose the calculation function
  useEffect(() => {
    if (length) {
      calculateWithLength()
    } else if (length2) {
      calculateWithLength2()
    } else {
      setCalculatedValue(null)
      setNewLength(null)
    }
  }, [length, length2, area, precision]) // Dependencies

  return (
    <div className="flex w-full flex-col items-center">
      <div className="p-8">
        <main className="w-full rounded-lg p-6">
          <h1 className="border-b pb-2 text-4xl font-bold">Tools</h1>
          <p className="italic">
            Follow these steps carefully to integrate your designs with the
            existing system.
          </p>
          <h2 id="oh-helper" className="mt-8 border-b text-2xl font-semibold">
            Hazard Spacing Helper
          </h2>
          <div className="mt-4">
            {/* Area and Precision Row */}
            <div className="mt-4 flex space-x-4 text-sm opacity-70">
              <div className="">
                <label htmlFor="area" className="block w-fit font-semibold">
                  Area (sq ft):
                </label>
                <input
                  type="number"
                  id="area"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  onFocus={(e) => e.target.select()}
                  className="mt-1 w-20 appearance-none rounded border bg-gray-100 p-1 text-gray-700 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
              </div>
              <div className="">
                <label htmlFor="precision" className="block font-semibold">
                  Precision:
                </label>
                <input
                  type="number"
                  id="precision"
                  value={precision}
                  onChange={(e) => setPrecision(Number(e.target.value))}
                  onFocus={(e) => e.target.select()}
                  className="mt-1 w-20 appearance-none rounded border bg-gray-100 p-1 text-gray-700 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  min="0"
                />
              </div>
            </div>

            <label
              htmlFor="length"
              className="mt-4 block text-lg font-semibold"
            >
              Distance To Wall:
            </label>
            <input
              type="text"
              id="length"
              placeholder="Enter length (e.g., 10-6)"
              value={length}
              onChange={(e) => {
                setLength(e.target.value)
                setLength2('') // Clear length2 when length is changed
              }}
              onFocus={(e) => e.target.select()}
              className="mt-2 w-full rounded border p-2 text-black"
            />
          </div>

          <label
            htmlFor="length-2"
            className="mt-4 block text-lg font-semibold"
          >
            Distance Between Heads:
          </label>
          <input
            type="text"
            id="length-2"
            placeholder="Enter length (e.g., 10-6)"
            value={length2}
            onChange={(e) => {
              setLength2(e.target.value)
              setLength('') // Clear length when length2 is changed
            }}
            onFocus={(e) => e.target.select()}
            className="mt-2 w-full rounded border p-2 text-black"
          />

          {calculatedValue !== null && (
            <div className="mt-4 text-lg font-semibold">
              Calculated Value: {calculatedValue}
            </div>
          )}
          {newLength !== null &&
            length !== null &&
            parseLength(length) !== null && (
              <OH_Visual length1={newLength} length2={parseLength(length)!} />
            )}
        </main>
      </div>
    </div>
  )
}

export default CadReference
