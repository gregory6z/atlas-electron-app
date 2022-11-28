import { HeaderContainer } from "./styles"

import logoAtlasCarpiagne from "../../assets/logo-atlas-carpiagne.svg"
import logoAtlas from "../../assets/logo-atlas.png"
import logoFlemme from "../../assets/flemme-1rec.png"
import { NavLink } from "react-router-dom"

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <div className="logos">
          <img className="logoFlemme" src={logoFlemme} alt="" />
          <img className="logoAtlasImg" src={logoAtlas} alt="" />
        </div>
      </NavLink>
      <img className="logoAtlasCarpiagne" src={logoAtlasCarpiagne} alt="" />
    </HeaderContainer>
  )
}
