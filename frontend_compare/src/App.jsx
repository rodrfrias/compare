import { BrowserRouter, Routes, Route } from "react-router-dom"; // Agregamos Route
import Layout from "./components/layout/Layout"

import NuevoPedido from "./pages/NuevoPedido";
import MisCompras from "./pages/MisCompras";
import MiNegocio from "./pages/MiNegocio";
import PlanPago from "./pages/PlanPago";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="app/planPago" element={<PlanPago/>}/>
        <Route path="/app" element={<Layout></Layout>}>
          <Route index element={<NuevoPedido/>} />
          <Route path="nuevoPedido" element={<NuevoPedido/>}/>
          <Route path="misCompras" element={<MisCompras/>}/>
          <Route path="miNegocio" element={<MiNegocio/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
