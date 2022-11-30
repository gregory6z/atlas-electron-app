import { ThemeProvider } from "styled-components"
import { PdfProvider } from "./context"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { Worker } from "@react-pdf-viewer/core"
import { Routes } from "./Router"
import "./lib/pdf.worker"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <PdfProvider>
        <Worker workerUrl="./lib/pdf.worker">
          <Routes></Routes>
        </Worker>
      </PdfProvider>
    </ThemeProvider>
  )
}
