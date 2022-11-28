/* eslint-disable react/no-unescaped-entities */
import { ArrowLeft, Envelope, Phone } from "phosphor-react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Button } from "../../components/Button"
import { Sidebar } from "../../components/Sidebar"
import { PdfContext } from "../../context"
import { AtlasInfo } from "../Home/AtlasInfo"
import { MainContent } from "../Home/MainContainer/styles"
import { HomeContainer, HomeContentHeader } from "../Home/styles"

export function Cims() {
  const { changePdf } = useContext(PdfContext)

  const navigate = useNavigate()

  function handleReturnPage() {
    navigate(-1)
  }

  function handlePdfViewCimsInfo() {
    changePdf("cims-info.pdf")
    navigate("/pdf")
  }
  function handlePdfFicheReflexe() {
    changePdf("cims-reflexe.pdf")
    navigate("/pdf")
  }

  return (
    <HomeContainer>
      <HomeContentHeader>
        <Sidebar />
        <MainContent>
          <ContentBox>
            <h2>CARTE D'IDENTITE MULTI SERVICES</h2>

            <div className="buttons">
              <Button
                title="Information de la carte CIMS"
                onClick={handlePdfViewCimsInfo}
              />
              <Button
                title="Fiche reflexe commande CIMS"
                onClick={handlePdfFicheReflexe}
              />
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

export const ContentBox = styled.div`
  background: #fff;
  border-radius: 8px;
  width: 100%;
  padding: 2rem;
  position: relative;

  h2 {
    font-size: 1.75rem;
  }

  .buttons {
    margin-top: 2rem;
    margin-left: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    height: 100%;
  }

  .buttons a {
    text-decoration: none;
  }
`
export const ButtonRetour = styled.div`
  border: 0;
  position: absolute;
  bottom: 2rem;
  left: 2rem;

  cursor: pointer;

  padding: 0.75rem 2rem;
  font-size: 1.25rem;
  background: ${(props) => props.theme["blue-700"]};
  border-radius: 8px;
  color: white;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
`
