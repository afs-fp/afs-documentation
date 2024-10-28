import { useEffect, useState } from 'react'

const SVGComponent = ({
  fileName,
  baseURL,
}: {
  fileName: string
  baseURL: string
}) => {
  const [svgContent, setSvgContent] = useState<string>('')

  useEffect(() => {
    fetch(`${baseURL}/img/reference/heads-svg/${fileName}`)
      .then((res) => res.text())
      .then((data) => setSvgContent(data))
  }, [fileName, baseURL])

  return (
    <div
      className="h-fit w-fit"
      dangerouslySetInnerHTML={{ __html: svgContent }}
      style={{ stroke: 'white', strokeWidth: '2px', fill: 'none' }}
    />
  )
}

export default SVGComponent
