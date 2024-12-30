import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";
import star from "../../images/Vector.png";
import { BannerDetalhes } from "./styles";
import { BarLoader } from "react-spinners";
import { Content } from "./styles";



export function Detalhes() {
  //Extraindo informaçoes da API no momento do click

  const { id, category } = useParams();

  const [item, setItem] = useState([]);

  // LOADER
  const [loader, setLoad] = useState(true);

  //NAVIGATE
  const navigate = useNavigate();

  


  // () => {} função anonima, quando vc n quer criar uma função po...

  useEffect(() => {
    Axios.get(`https://api.themoviedb.org/3/${category}/${id}`, {
      params: {
        language: "pt-BR",
        api_key: "42201f5908fbfa24d8b5601060a38618",
      },
    })
      .then((result) => {
        setItem(result.data); //guardando no estado a resposta da API
        setLoad(false);
      })
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, [id, category]);

  if (loader) {
    return <BarLoader color="#00B1E9" width="100%" />;
  }

  return (
    <>
      <BannerDetalhes
        url={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
      />

      <Content>
        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />

        <div>
          <h1>{category == "movie" ? item.title : item.name}</h1>
          <h2>{item.tagLine}</h2>
          <ul>
            <li>
              Ano: 
              {category == "movie"
                ? item.release_date.substring(0, 4)
                : item.first_air_date.substring(0, 4)}
            </li>
            <li>
              Avaliação: <img src={star} /> {item.vote_average}{" "}
            </li>
          </ul>

          <p>{item.overview}</p>

          <button onClick={() => navigate(-1) } > Voltar  </button>
          

        </div>
      </Content>
    </>
  );
}
