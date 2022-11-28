import { createContext, ReactNode, useState } from "react"

interface AuthContextData {
  pdf: string
  changePdf: (pdf: string) => void
}
export const PdfContext = createContext({} as AuthContextData)

interface CartContextProviderProps {
  children: ReactNode
}

export function PdfProvider({ children }: CartContextProviderProps) {
  const [pdf, setPdf] = useState("")

  function changePdf(pdf: string) {
    setPdf(pdf)
  }

  return (
    <PdfContext.Provider value={{ pdf, changePdf }}>
      {children}
    </PdfContext.Provider>
  )
}
