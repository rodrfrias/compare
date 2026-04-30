import { BrowserRouter, Routes, Route } from "react-router-dom"; // Agregamos Route
import Layout from "./components/layout/Layout"

import NuevoPedido from "./pages/NuevoPedido";
import MiNegocio from "./pages/MiNegocio";
import PlanPago from "./pages/PlanPago";
import Extractor from "./components/Pruebas/Extractor";
import Json from "./components/Pruebas/Json";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="app/planPago" element={<PlanPago/>}/>
        <Route path="app/pruebas" element={<Json></Json>}/>
        <Route path="/app" element={<Layout></Layout>}>
          <Route index element={<NuevoPedido/>} />
          <Route path="nuevoPedido" element={<NuevoPedido/>}/>
          <Route path="miNegocio" element={<MiNegocio/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
