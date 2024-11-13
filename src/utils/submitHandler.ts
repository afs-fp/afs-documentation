// src/utils/submitHandler.ts
import PizZip from 'pizzip'
import Docxtemplater from 'docxtemplater'
import { saveAs } from 'file-saver'
import { PDFDocument } from 'pdf-lib'
import { headers } from 'next/headers'

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

export async function handleFormSubmit(formData: FormData, baseURL: string) {
  try {
    // Call createCoverpage to generate the cover page
    const coverPageBlob = await createCoverpage(formData, baseURL)

    // Save the cover page document
    saveAs(coverPageBlob, 'output.docx')

    await createPD(formData, baseURL)
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error generating document:', error.message)
    } else {
      console.error('An unexpected error occurred:', error)
    }
  }
}

async function createCoverpage(formData: FormData, baseURL: string) {
  const templatePath = `${baseURL}/assets/equipment_template.docx`

  // Fetch the template
  const response = await fetch(templatePath)
  if (!response.ok) {
    throw new Error(`Failed to load template: ${response.statusText}`)
  }

  const arrayBuffer = await response.arrayBuffer()
  const zip = new PizZip(arrayBuffer)

  // Initialize Docxtemplater with the template
  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  })

  // Get today's date
  const today = new Date()
  const formattedDate = today.toLocaleDateString() // e.g., "MM/DD/YYYY" format

  // Set data for the cover page
  doc.setData({
    project_title: formData.project_name,
    address: formData.project_address,
    heads: formData.heads,
    pipes: formData.pipes,
    hangers: formData.hangers,
    date: formattedDate,
  })

  // Render and generate the document as a Blob
  doc.render()
  const outputBlob = doc.getZip().generate({ type: 'blob' })
  return outputBlob
}

async function createPD(formData: FormData, baseURL: string) {
  const finalPdf = await PDFDocument.create()

  // Define individual and combined model mappings
  const headPdfMapping: { [key: string]: string } = {
    V3802: `${baseURL}/assets/head-pd/V3802.pdf`,
    V2704: `${baseURL}/assets/head-pd/V2704.pdf`,
    V2708: `${baseURL}/assets/head-pd/V2708.pdf`,
    V3901: `${baseURL}/assets/head-pd/V3901.pdf`,
    'V2704-V2708': `${baseURL}/assets/head-pd/V2704-V2708.pdf`,
    // Additional combined PDFs can be added here in "Model1-Model2" format
  }

  const headModels = formData.heads.map((head) => head.model)

  // Check for combined PDFs dynamically
  const processedModels = new Set<string>()
  for (const key of Object.keys(headPdfMapping)) {
    if (key.includes('-')) {
      const combinedModels = key.split('-')
      const hasAllModels = combinedModels.every((model) =>
        headModels.includes(model)
      )

      if (hasAllModels) {
        try {
          const pdfBytes = await fetch(headPdfMapping[key]).then((res) =>
            res.arrayBuffer()
          )
          const pdfDoc = await PDFDocument.load(pdfBytes)
          const pages = await finalPdf.copyPages(
            pdfDoc,
            pdfDoc.getPageIndices()
          )
          pages.forEach((page) => finalPdf.addPage(page))

          // Mark each model as processed
          combinedModels.forEach((model) => processedModels.add(model))
        } catch (error) {
          console.error(
            `Failed to load combined PDF for models ${combinedModels.join(' and ')}:`,
            error
          )
        }
      }
    }
  }

  // Add remaining individual PDFs
  for (const head of formData.heads) {
    if (!processedModels.has(head.model) && headPdfMapping[head.model]) {
      try {
        const pdfBytes = await fetch(headPdfMapping[head.model]).then((res) =>
          res.arrayBuffer()
        )
        const pdfDoc = await PDFDocument.load(pdfBytes)
        const pages = await finalPdf.copyPages(pdfDoc, pdfDoc.getPageIndices())
        pages.forEach((page) => finalPdf.addPage(page))
      } catch (error) {
        console.error(`Failed to load PDF for model ${head.model}:`, error)
      }
    }
  }

  const pdfBytes = await finalPdf.save()
  const blob = new Blob([pdfBytes], { type: 'application/pdf' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = 'merged_output.pdf'
  link.click()
  URL.revokeObjectURL(link.href) // Clean up URL after download
}
