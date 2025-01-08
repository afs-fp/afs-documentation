'use client'
import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { parseLength } from '../parseLength'

const CeilingAreaCalculator: NextPage = () => {
  const [ceilingHeight, setCeilingHeight] = useState('')
  const [designArea, setDesignArea] = useState('1500')
  const [percentReduction, setPercentReduction] = useState<number | null>(null)
  const [areaReduction, setAreaReduction] = useState<number | null>(null)

  const calculateValues = () => {
    const heightInInches = parseLength(ceilingHeight)
    const areaInSF = parseFloat(designArea)

    if (heightInInches !== null && !isNaN(areaInSF)) {
      const heightInFeet = heightInInches / 12
      let y: number

      if (heightInFeet >= 20) {
        y = 0
      } else if (heightInFeet >= 10) {
        y = (-3 * heightInFeet) / 2 + 55
      } else {
        y = 40
      }

      setPercentReduction(y)

      const reducedArea = areaInSF * (1 - y / 100)
      setAreaReduction(reducedArea)
    } else {
      setPercentReduction(null)
      setAreaReduction(null)
    }
  }

  useEffect(() => {
    if (ceilingHeight && designArea) {
      calculateValues()
    } else {
      setPercentReduction(null)
      setAreaReduction(null)
    }
  }, [ceilingHeight, designArea])

  return (
    <div className="flex w-full flex-col items-center">
      <div className="p-8">
        <main className="w-full rounded-lg p-6">
          <h1 className="border-b pb-2 text-4xl font-bold">
            Design Area Reduction
          </h1>
          <p className="mt-2 italic">
            Enter the ceiling height and design area to calculate the reduction
            values.
          </p>

          {/* Inputs */}
          <label
            htmlFor="ceiling-height"
            className="mt-4 block text-lg font-semibold"
          >
            Ceiling Height (FT-IN):
          </label>
          <input
            type="text"
            id="ceiling-height"
            placeholder="Enter height (e.g., 10-6)"
            value={ceilingHeight}
            onChange={(e) => setCeilingHeight(e.target.value)}
            onFocus={(e) => e.target.select()}
            className="mt-2 w-full rounded border p-2 text-black"
          />

          <label
            htmlFor="design-area"
            className="mt-4 block text-lg font-semibold"
          >
            Design Area (SF):
          </label>
          <input
            type="number"
            id="design-area"
            placeholder="Enter area in square feet"
            value={designArea}
            onChange={(e) => setDesignArea(e.target.value)}
            onFocus={(e) => e.target.select()}
            className="mt-2 w-full rounded border p-2 text-black"
          />

          {/* Outputs */}
          {percentReduction !== null && (
            <div className="mt-4 text-lg font-semibold">
              Percent Reduction: {percentReduction.toFixed(2)}%
            </div>
          )}

          {areaReduction !== null && (
            <div className="mt-4 text-lg font-semibold">
              Reduced Area: {areaReduction.toFixed(2)} SF
            </div>
          )}

          {areaReduction !== null && (
            <div className="mt-4 text-lg font-semibold">
              {(Math.sqrt(areaReduction) * 1.2).toFixed(2)} ft *{' '}
              {(Math.sqrt(areaReduction) / 1.2).toFixed(2)} ft
            </div>
          )}

          {/* Additional Information */}
          <div className="text-gray-600\\ mt-8 text-sm">
            <p>
              <strong>(1)</strong> Wet pipe system
            </p>
            <p>
              <strong>(2)</strong> Light hazard or ordinary hazard occupancy
            </p>
            <p>
              <strong>(3)</strong> 20 ft (6.1 m) maximum ceiling height
            </p>
            <p>
              <strong>(4)</strong> No unprotected ceiling pockets exceeding 32
              ft² (3.0 m²)
            </p>
            <p>
              <strong>(5)</strong> No unprotected areas above cloud ceilings
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default CeilingAreaCalculator
