import { Viewer } from "@react-pdf-viewer/core"

import "@react-pdf-viewer/core/lib/styles/index.css"
import { ArrowLeft } from "phosphor-react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { PdfContext } from "../../context"

import { HeaderPdf, PdfContainer } from "./styles"

export function Pdf() {
  const { pdf } = useContext(PdfContext)

  const navigate = useNavigate()

  const file = `/public/${pdf}`

  function handleReturn() {
    navigate(-1)
  }

  return (
    <>
      <HeaderPdf></HeaderPdf>
      <PdfContainer>
        <button onClick={handleReturn}>
          <ArrowLeft size="22" weight="bold" />
        </button>
        <Viewer fileUrl={file} />
      </PdfContainer>
    </>
  )
}
