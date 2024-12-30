import cardMovie from "../../images/capa-filmes.jpg";

import cardSerie from "../../images/capa-series.jpg";

import { Link } from "react-router-dom";

import { HomeStyle } from "./styles";

export function Inicio() {
  return (
    <HomeStyle>



      <Link to="/filmes" >
        <img src={cardMovie} className="image" alt="FILMES"  />
        <p>Filmes</p>
      </Link>

      <Link to="/series">
        <img src={cardSerie} className="image" alt="SERIES" />
        <p>Series</p>
      </Link>


    </HomeStyle>
  );
}
