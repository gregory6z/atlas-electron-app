import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { Ccs } from "./pages/Ccs"
import { Cims } from "./pages/Cims"
import { Demenagement } from "./pages/Demenagement"
import { DemenagementHm } from "./pages/DemenagementHm"
import { DemenagementM } from "./pages/DemenagementM"
import { Escapade } from "./pages/Escapade"
import { Eureka } from "./pages/Eureka"
import { Fdligne } from "./pages/Fdligne"
import { Gite } from "./pages/Gite"
import { Habillement } from "./pages/Habillement"
import { Home } from "./pages/Home"
import { Om } from "./pages/Om"
import { Pdf } from "./pages/Pdf"
import { Vaguemestre } from "./pages/Vaguemestre"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cims" element={<Cims />}></Route>
        <Route path="/ccs" element={<Ccs />}></Route>
        <Route path="/demenagement" element={<Demenagement />}></Route>
        <Route path="/fdligne" element={<Fdligne />}></Route>
        <Route path="/gite" element={<Gite />}></Route>
        <Route path="/eureka" element={<Eureka />}></Route>
        <Route
          path="/demenagement/hors-metropole"
          element={<DemenagementHm />}
        ></Route>
        <Route
          path="/demenagement/metropole"
          element={<DemenagementM />}
        ></Route>
        <Route path="/habillement" element={<Habillement />}></Route>
        <Route path="/vaguemestre" element={<Vaguemestre />}></Route>
        <Route path="/escapade" element={<Escapade />}></Route>

        <Route path="/om" element={<Om />}></Route>
      </Route>
      <Route path="/pdf" element={<Pdf />}></Route>
    </Routes>
  )
}
