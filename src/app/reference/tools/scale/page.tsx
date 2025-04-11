'use client'
import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { parseLength } from '../parseLength'

const ScaleHelper: NextPage = () => {
  const [current, setCurrent] = useState('')
  const [desired, setDesired] = useState('')
  const [precision, setPrecision] = useState(6)
  const [scaleFactor, setScaleFactor] = useState<number | null>(null)

  // Recalculate whenever inputs change
  useEffect(() => {
    calculateScale()
  }, [current, desired])

  const calculateScale = () => {
    const currInches = parseLength(current)
    const desInches = parseLength(desired)
    if (currInches !== null && desInches !== null && currInches > 0) {
      setScaleFactor(desInches / currInches)
    } else {
      setScaleFactor(null)
    }
  }

  return (
    <div className="flex w-full flex-col items-center">
      <div className="p-8">
        <main className="w-full rounded-lg p-6">
          <h1 className="border-b pb-2 text-4xl font-bold">Scale Helper</h1>
          <p className="mt-2 italic">
            Enter measurements in feet-inches (e.g., 10-6) to calculate the
            scale factor.
          </p>

          {/* Precision Control */}
          <div className="mt-4 flex space-x-4 text-sm opacity-70">
            <div>
              <label htmlFor="precision" className="block font-semibold">
                Precision:
              </label>
              <input
                type="number"
                id="precision"
                value={precision}
                onChange={(e) => setPrecision(Number(e.target.value))}
                onFocus={(e) => e.target.select()}
                className="mt-1 w-20 appearance-none rounded border bg-gray-100 p-1 text-gray-700"
                min={0}
              />
            </div>
          </div>

          {/* Measurement Inputs */}
          <div className="mt-4">
            <label htmlFor="current" className="block text-lg font-semibold">
              Current Measurement:
            </label>
            <input
              type="text"
              id="current"
              placeholder="e.g., 5-3"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              onFocus={(e) => e.target.select()}
              className="mt-2 w-full rounded border p-2 text-black"
            />

            <label
              htmlFor="desired"
              className="mt-4 block text-lg font-semibold"
            >
              Desired Measurement:
            </label>
            <input
              type="text"
              id="desired"
              placeholder="e.g., 8-0"
              value={desired}
              onChange={(e) => setDesired(e.target.value)}
              onFocus={(e) => e.target.select()}
              className="mt-2 w-full rounded border p-2 text-black"
            />

            {/* Display Result */}
            {scaleFactor !== null && (
              <div className="mt-4 text-lg font-semibold">
                Scale Factor: {scaleFactor.toFixed(precision)}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default ScaleHelper
