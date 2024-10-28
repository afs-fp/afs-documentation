'use client'
import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'

// Array to dynamically generate the table rows
const headSymbols = [
  { fileName: 'Auxdrain10.png', headType: 'Outlet' },
  { fileName: 'Head1.png', headType: 'Pendent' },
  { fileName: 'Head2.png', headType: 'Upright' },
  { fileName: 'Head2b.png', headType: 'Existing Upright' },
  { fileName: 'Head3.png', headType: 'Existing Upright' },
  { fileName: 'Head4.png', headType: 'x' },
  { fileName: 'Head4b.png', headType: 'x' },
  { fileName: 'Head5b.png', headType: 'x' },
  { fileName: 'Head6.png', headType: 'x' },
  { fileName: 'Head6b.png', headType: 'Extended Coverage' },
  { fileName: 'Head7.png', headType: 'x' },
  { fileName: 'Head8.png', headType: 'x' },
  { fileName: 'Head9.png', headType: 'x' },
  { fileName: 'Head13.png', headType: 'x' },
  { fileName: 'Head14.png', headType: 'Dry Pendent' },
]

const cadCommands = [
  { command: 'RL', description: 'Rapid line' },
  { command: 'RM', description: 'Rapid main' },
  {
    command: 'C + space',
    description: 'Change direction of the rapid line or main',
  },
  { command: 'L', description: 'Lines' },
  { command: 'PL', description: 'Polyline' },
  { command: 'XREF', description: 'External reference' },
  { command: 'X', description: 'Explode' },
  { command: 'Burst', description: 'Not as extreme as explode' },
  { command: 'QB', description: 'Continuation of pipe' },
  { command: 'CD', description: 'Change diameter' },
  { command: 'F', description: 'Filet - cleans up crossing lines' },
  { command: 'DI', description: 'Distance measurement' },
  { command: 'DIML', description: 'Dimension linear' },
  { command: 'RN', description: 'Riser nipple' },
  { command: 'T', description: 'Trim' },
  { command: 'SHS', description: 'Head counts for selected area' },
  { command: 'SXH', description: 'Change direction of cursor' },
  { command: 'E', description: 'Erase' },
  { command: 'Space bar', description: 'Enter' },
  { command: 'HAT', description: 'Hide pipe lengths' },
  { command: 'Filter', description: 'Change selection filters' },
  { command: 'Select similar', description: 'Select all similar objects' },
  { command: 'Area', description: 'Calculate area' },
  { command: 'Hatch', description: 'Create filled block' },
  { command: 'Roomtag', description: 'Room tagging' },
  { command: 'PP', description: 'Pretty Pipe, enhances line visibility' },
  { command: 'SC', description: 'Scale a PDF or other items' },
]

const CadReference: NextPage = () => {
  const [baseURL, setBaseURL] = useState('')

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      setBaseURL('/afs-documentation')
    }
  }, [])

  return (
    <div className="flex w-full flex-col items-center">
      <div className="p-8">
        <main className="w-full rounded-lg p-6">
          <h1 className="border-b pb-2 text-4xl font-bold">
            CAD Reference Sheet
          </h1>
          <p className="italic">
            Follow these steps carefully to integrate your designs with the
            existing system.
          </p>
          {/* START OF Head Symbols Section ======================================================*/}
          <h2
            id="head-symbols"
            className="mt-8 border-b text-2xl font-semibold"
          >
            Head Symbols
          </h2>
          <div className="mt-4 w-full rounded-lg bg-slate-900 px-5 py-5">
            <table className="w-full table-auto border-collapse border border-gray-700 text-left text-white">
              <thead>
                <tr>
                  <th className="border border-gray-700 px-4 py-2">
                    Head Type
                  </th>
                  <th className="border border-gray-700 px-4 py-2">
                    Name In CAD
                  </th>
                  <th className="border border-gray-700 px-4 py-2">Symbol</th>
                </tr>
              </thead>
              <tbody>
                {headSymbols.map((symbol, index) => (
                  <tr key={index}>
                    <td className="border border-gray-700 px-4 py-2">
                      {symbol.headType}
                    </td>
                    <td className="border border-gray-700 px-4 py-2">
                      {symbol.fileName.replace('.png', '')}
                    </td>
                    <td className="flex justify-center border border-gray-700 px-4 py-2">
                      <div className="flex h-20 w-20 items-center justify-center">
                        <Image
                          src={`${baseURL}/img/reference/heads/${symbol.fileName}`}
                          alt={`${symbol.headType} Symbol`}
                          width={80}
                          height={80}
                          className="brightness-200 grayscale invert filter"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* END OF Head Symbols Section ======================================================*/}
          <h2
            id="layer-colors"
            className="mt-8 border-b text-2xl font-semibold"
          >
            Layer Colors
          </h2>
          <div className="mt-4 flex w-full justify-center overflow-hidden rounded-lg bg-slate-900 px-5 py-5">
            <table className="w-fit table-auto border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="border-b-2 border-gray-700 px-4 py-2 text-left">
                    Layer
                  </th>
                  <th className="border-b-2 border-gray-700 px-4 py-2 text-left">
                    Color
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-2">Walls</td>
                  <td className="px-4 py-2">White</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="border-r border-gray-400 px-4 py-2">
                    Wall Hatch
                  </td>
                  <td className="px-4 py-2">8 or 9</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="border-r border-gray-300 px-4 py-2">
                    Out Of Contract Hatch
                  </td>
                  <td className="px-4 py-2">9</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="border-r border-gray-400 px-4 py-2">
                    Ceiling
                  </td>
                  <td className="px-4 py-2">8</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="border-r border-gray-400 px-4 py-2">Doors</td>
                  <td className="px-4 py-2">8</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="border-r border-white px-4 py-2">
                    Windows / Glass
                  </td>
                  <td className="px-4 py-2">White</td>
                </tr>
                <tr className="border-b border-green-500">
                  <td className="border-r border-green-500 px-4 py-2">
                    Mechanical
                  </td>
                  <td className="px-4 py-2">Green</td>
                </tr>
                <tr className="border-b border-red-900">
                  <td className="border-r border-red-900 px-4 py-2">Lights</td>
                  <td className="px-4 py-2">13</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2
            id="cad-commands"
            className="mt-8 border-b text-2xl font-semibold"
          >
            CAD Commands
          </h2>
          <div className="mt-4 flex w-full justify-center overflow-hidden rounded-lg bg-slate-900 px-5 py-5">
            <div className="w-full overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                    >
                      Command
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cadCommands.map((cmd, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                        {cmd.command}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm">
                        {cmd.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default CadReference
