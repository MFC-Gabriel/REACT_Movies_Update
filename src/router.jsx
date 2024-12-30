import {Routes,Route} from "react-router-dom"
import { Inicio } from "./pages/Inicio"
import { Filmes } from "./pages/Filmes"
import { Series } from "./pages/Series"
import { Detalhes } from "./pages/Detalhes"


export function Router() {
  return (
  
  
  <>

      <Routes>
        <Route path="/inicio" element={<Inicio/>} />
        <Route path="/Filmes" element={<Filmes/>}       />
        <Route path="/series" element={<Series/>}       />
        <Route path="/detalhes/:category/:id" element={<Detalhes/>}       />
      </Routes>
  
  </>


  );
}
