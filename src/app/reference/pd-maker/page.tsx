'use client'
import React, { ChangeEvent, useState, useEffect } from 'react'
import options from './data/options.json' // Load JSON data
import { handleFormSubmit } from '@/utils/submitHandler'

interface Option {
  name: string
  model: string
  manufacturer: string
}

interface FormData {
  project_name: string
  project_address: string
  heads: Option[]
  pipes: Option[]
  hangers: Option[]
}

const Form = () => {
  const [baseURL, setBaseURL] = useState('')
  // State to track project details and selected items
  const [formData, setFormData] = useState<FormData>({
    project_name: '',
    project_address: '',
    heads: [],
    pipes: [],
    hangers: [],
  })

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      setBaseURL('/afs-documentation')
    }
  }, [])

  // Handler for updating project name and address
  const handleProjectChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Handler to add a selection (with duplicates prevention)
  const handleAddSelection = (
    e: ChangeEvent<HTMLSelectElement>,
    category: keyof FormData,
    optionsList: Option[]
  ) => {
    const model = e.target.value
    const selectedOption = optionsList.find((option) => option.model === model)

    if (selectedOption) {
      // Use type assertion here to specify the type explicitly
      const categoryItems = formData[category] as Option[]
      if (!categoryItems.some((item) => item.model === model)) {
        setFormData((prevState) => ({
          ...prevState,
          [category]: [...categoryItems, selectedOption],
        }))
      }
    }
    e.target.value = '' // Reset selection after adding
  }

  // Handler to remove an item
  const handleRemoveSelection = (category: keyof FormData, model: string) => {
    // Use type assertion here as well
    const categoryItems = formData[category] as Option[]
    setFormData((prevState) => ({
      ...prevState,
      [category]: categoryItems.filter((item) => item.model !== model),
    }))
  }

  // Filtered options (exclude selected items)
  const getFilteredOptions = (options: Option[], selectedValues: Option[]) => {
    return options.filter(
      (option: Option) =>
        !selectedValues.some((item: Option) => item.model === option.model)
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await handleFormSubmit(formData, baseURL)
    } catch (error) {
      console.error('Submission error:', error)
    }
  }

  return (
    <div className="flex w-full items-center justify-center align-middle">
      <div className="flex flex-col items-center bg-gray-900 p-8 text-white">
        <div className="mb-8 text-center">
          <input
            type="text"
            name="project_name"
            value={formData.project_name}
            onChange={handleProjectChange}
            placeholder="Project Name"
            className="mb-2 w-full max-w-md bg-gray-700 p-2 text-center text-xl font-bold"
          />
          <input
            type="text"
            name="project_address"
            value={formData.project_address}
            onChange={handleProjectChange}
            placeholder="Project Address"
            className="w-full max-w-md bg-gray-700 p-2 text-center text-lg"
          />
        </div>
        <form
          className="w-full max-w-2xl rounded-lg bg-gray-800 p-6"
          onSubmit={handleSubmit}
        >
          <table className="w-full table-auto text-left">
            <thead>
              <tr>
                <th className="border-b border-gray-700 p-2">Description</th>
                <th className="border-b border-gray-700 p-2">Model/SIN #</th>
                <th className="border-b border-gray-700 p-2">Manufacturer</th>
                <th className="border-b border-gray-700 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Sprinkler Heads */}
              <tr className="text-lg font-semibold">
                <td className="pb-2 pt-4" colSpan={4}>
                  Sprinkler Heads
                </td>
              </tr>
              <tr>
                <td className="p-2" colSpan={3}>
                  <select
                    onChange={(e) =>
                      handleAddSelection(e, 'heads', options.sprinklerHeads)
                    }
                    className="w-full bg-gray-700 p-1"
                  >
                    <option value="">Select Sprinkler Head</option>
                    {getFilteredOptions(
                      options.sprinklerHeads,
                      formData.heads
                    ).map((item, index) => (
                      <option key={index} value={item.model}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              {formData.heads.map((item, index) => (
                <tr key={index}>
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">{item.model}</td>
                  <td className="p-2">{item.manufacturer}</td>
                  <td className="p-2">
                    <button
                      type="button"
                      onClick={() => handleRemoveSelection('heads', item.model)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}

              {/* Pipe and Fittings */}
              <tr className="text-lg font-semibold">
                <td className="pb-2 pt-4" colSpan={4}>
                  Pipe and Fittings
                </td>
              </tr>
              <tr>
                <td className="p-2" colSpan={3}>
                  <select
                    onChange={(e) =>
                      handleAddSelection(e, 'pipes', options.pipeFittings)
                    }
                    className="w-full bg-gray-700 p-1"
                  >
                    <option value="">Select Pipe Fitting</option>
                    {getFilteredOptions(
                      options.pipeFittings,
                      formData.pipes
                    ).map((item, index) => (
                      <option key={index} value={item.model}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              {formData.pipes.map((item, index) => (
                <tr key={index}>
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">{item.model}</td>
                  <td className="p-2">{item.manufacturer}</td>
                  <td className="p-2">
                    <button
                      type="button"
                      onClick={() => handleRemoveSelection('pipes', item.model)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}

              {/* Hangers */}
              <tr className="text-lg font-semibold">
                <td className="pb-2 pt-4" colSpan={4}>
                  Hangers
                </td>
              </tr>
              <tr>
                <td className="p-2" colSpan={3}>
                  <select
                    onChange={(e) =>
                      handleAddSelection(e, 'hangers', options.hangers)
                    }
                    className="w-full bg-gray-700 p-1"
                  >
                    <option value="">Select Hanger</option>
                    {getFilteredOptions(options.hangers, formData.hangers).map(
                      (item, index) => (
                        <option key={index} value={item.model}>
                          {item.name}
                        </option>
                      )
                    )}
                  </select>
                </td>
              </tr>
              {formData.hangers.map((item, index) => (
                <tr key={index}>
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">{item.model}</td>
                  <td className="p-2">{item.manufacturer}</td>
                  <td className="p-2">
                    <button
                      type="button"
                      onClick={() =>
                        handleRemoveSelection('hangers', item.model)
                      }
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
