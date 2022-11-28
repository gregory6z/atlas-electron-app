/* eslint-disable react/no-unescaped-entities */
import { Link, NavLink } from "react-router-dom"
import { SidebarContainer } from "./styles"

export function Sidebar() {
  return (
    <SidebarContainer>
      <Link to="/"> PAGE D'ACCUEIL</Link>

      <NavLink to="/cims">CIMS</NavLink>
      <NavLink to="/ccs">CCS</NavLink>
      <NavLink to="/om">ORDRE DE MISSION</NavLink>
      <NavLink to="/demenagement">DÉMÉNAGEMENT</NavLink>
      <NavLink to="/habillement">HABILLEMENT</NavLink>
      <NavLink to="/vaguemestre">VAGUEMESTRE</NavLink>
      <NavLink to="/escapade">ESCAPADE LOISIRS</NavLink>
      <NavLink to="/fdligne">FD@LIGNE</NavLink>
      <NavLink to="/gite">GITE D'ETAPE</NavLink>
      <NavLink to="/eureka">EUREKA</NavLink>
    </SidebarContainer>
  )
}
