import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  gap: 1rem;
  margin-top: 8%;
  flex-wrap: wrap;

  height: 62vh;
`
export const CategoryCardContainer = styled(NavLink)`
  width: 32%;
  height: 45%;
  background: white;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  text-align: center;
  text-decoration: none;
  color: black;

  img {
    margin-top: 0.5rem;
    flex: 1;
  }
`
