import logo from "../../images/Logo.png"
import {Link} from "react-router-dom";
import { HeaderStyle } from "./styles";

export function Header() {

  return (
    <HeaderStyle>
      <img src={logo} alt="Logo"/>
    
    
      <nav>
        <Link to="/Inicio" >Inicio</Link>
        <Link to="/Filmes" >Filmes</Link>
        <Link to="/Series" >Series</Link>


      </nav>
    </HeaderStyle>
  );
}
