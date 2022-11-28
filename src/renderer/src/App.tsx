import { ThemeProvider } from "styled-components"
import { PdfProvider } from "./context"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { Worker } from "@react-pdf-viewer/core"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"
import "./lib/pdf.worker"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <PdfProvider>
        <Worker workerUrl="./lib/pdf.worker">
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Worker>
      </PdfProvider>
    </ThemeProvider>
  )
}
