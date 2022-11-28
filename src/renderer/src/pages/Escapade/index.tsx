/* eslint-disable react/no-unescaped-entities */
import { ArrowLeft, Envelope, Phone } from "phosphor-react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Button } from "../../components/Button"
import { Sidebar } from "../../components/Sidebar"
import { ButtonRetour, ContentBox } from "../Cims"
import { AtlasInfo } from "../Home/AtlasInfo"
import { MainContent } from "../Home/MainContainer/styles"
import { HomeContainer, HomeContentHeader } from "../Home/styles"
import escapadeCode from "../../assets/escapade-code.png"
import { useContext } from "react"
import { PdfContext } from "../../context"

export function Escapade() {
  const { changePdf } = useContext(PdfContext)

  const navigate = useNavigate()

  function handleReturnPage() {
    navigate(-1)
  }

  function handleNavEscapadePdf() {
    changePdf("escapade.pdf")
    navigate("/pdf")
  }

  return (
    <HomeContainer>
      <HomeContentHeader>
        <Sidebar />
        <MainContent>
          <ContentBox>
            <h2>ESCAPADE LOISIRS</h2>

            <EscapadeContainer>
              <Button
                title="Instructions pour s'inscrire"
                onClick={handleNavEscapadePdf}
              ></Button>
              <h2>Bénéficie de réductions et loisirs partout en France</h2>
              <p>
                Pour en profiter rendez-vous sur &nbsp;
                <span>www.escapadeloisirs.fr</span> ou
              </p>
              <div className="centralize">
                <img src={escapadeCode} alt="" width="200px" />
              </div>
            </EscapadeContainer>

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

export const EscapadeContainer = styled.div`
  padding: 2rem;
  font-size: 1.25rem;

  .centralize {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  img {
    margin: 1rem auto;
  }

  h2 {
    color: ${(props) => props.theme["blue-500"]};
    margin-block: 1rem;
  }
  span {
    text-decoration: underline;
    color: ${(props) => props.theme["blue-500"]};
    font-size: 1.5rem;
  }
  p {
    margin-left: 2rem;
  }
`
