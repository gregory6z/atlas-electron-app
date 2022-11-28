/* eslint-disable react/no-unescaped-entities */
import { ArrowLeft, Envelope, Phone } from "phosphor-react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Sidebar } from "../../components/Sidebar"
import { ButtonRetour, ContentBox } from "../Cims"
import { AtlasInfo } from "../Home/AtlasInfo"
import { MainContent } from "../Home/MainContainer/styles"
import { HomeContainer, HomeContentHeader } from "../Home/styles"

export function Vaguemestre() {
  const navigate = useNavigate()

  function handleReturnPage() {
    navigate(-1)
  }
  return (
    <HomeContainer>
      <HomeContentHeader>
        <Sidebar />
        <MainContent>
          <ContentBox>
            <h2>VAGUEMESTRE</h2>

            <VaguemestreContainer>
              <h2>Horaires </h2>
              <li>Lundi au Vendredi 15:00 - 17:00</li>

              <h2>Colis privés </h2>
              <li>
                Merci de privilégier les livraisons en point relais en milieu
                civil
              </li>
            </VaguemestreContainer>

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

export const VaguemestreContainer = styled.div`
  padding: 2rem;
  h2 {
    color: ${(props) => props.theme["blue-500"]};
  }
  li {
    font-size: 1.25rem;
    margin-block: 1rem;
    opacity: 60%;
  }
`
