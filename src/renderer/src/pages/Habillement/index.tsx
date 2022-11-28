/* eslint-disable react/no-unescaped-entities */
import { ArrowLeft, Envelope, Phone } from "phosphor-react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Sidebar } from "../../components/Sidebar"
import { PdfContext } from "../../context"
import { ButtonRetour, ContentBox } from "../Cims"
import { AtlasInfo } from "../Home/AtlasInfo"
import { MainContent } from "../Home/MainContainer/styles"
import { HomeContainer, HomeContentHeader } from "../Home/styles"

export function Habillement() {
  const { changePdf } = useContext(PdfContext)

  const navigate = useNavigate()

  function handleReturnPage() {
    navigate(-1)
  }

  function handleNavPdfHab() {
    changePdf("habillement.pdf")
    navigate("/pdf")
  }

  return (
    <HomeContainer>
      <HomeContentHeader>
        <Sidebar />
        <MainContent>
          <ContentBox>
            <h2>HABILLEMENT</h2>

            <div className="buttons">
              <Button title="Nouvelles procédures" onClick={handleNavPdfHab} />
            </div>
            <ButtonRetour onClick={handleReturnPage}>
              <ArrowLeft weight="bold" /> Retour
            </ButtonRetour>
          </ContentBox>
        </MainContent>
        <AtlasInfo />
      </HomeContentHeader>
      <div className="bottom">
        <div className="copyright">
          <h5>Copyright © all rights reserved</h5>
          <h5>Développé par 1CL PRAXEDES Gregory</h5>

        </div>
        <div>
        <h3><Phone size={18} weight="fill" /> 04 42 73 34 82 / 864 132 94 82</h3>
        <h3><Envelope size={18} weight="fill" />  gsbdd-mrs-carpiagne-atlas.accueil.fct@intradef.gouv.fr</h3></div>
      </div>
    </HomeContainer>
  )
}
