import { AtlasContainer } from "./styles"

import AtlasBon from "../../../assets/atlasBon.png"
export function AtlasInfo() {
  return (
    <AtlasContainer>
      <p>Horaires des ouvertures</p>
      <p>Lundi au vendredi</p>
      <h1>ATLAS</h1>
      <div className="horaires">
        <p>09:00 - 12:00</p>
        <p>14:00 - 17:00</p>
      </div>

      <div className="imgContainer">
        <img src={AtlasBon} alt="" width="80%" height="100%" />
      </div>
    </AtlasContainer>
  )
}
