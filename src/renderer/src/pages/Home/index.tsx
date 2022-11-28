import { Envelope, Phone } from "phosphor-react"
import { Sidebar } from "../../components/Sidebar"
import { AtlasInfo } from "./AtlasInfo"
import { MainContainer } from "./MainContainer"
import { HomeContainer, HomeContentHeader } from "./styles"

export function Home() {
  return (
    <HomeContainer>
      <HomeContentHeader>
        <Sidebar />
        <MainContainer />
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
