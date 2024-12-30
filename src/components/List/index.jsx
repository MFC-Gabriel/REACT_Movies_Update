import { useState, useEffect } from "react";
import { CardContent, CardItem, CardList, ListStyle } from "./styles";
import axios from "axios";
import star from "../../images/Vector.png";
import { Link } from "react-router-dom";





export function List({ category }) {
  
  
    const[itens, setItens] = useState([]);

    const[tipo, setTipo] = useState(["popular"]);

    const [search, setSearch] = useState("");


    useEffect(() => {
        if (search.length >= 3) {
          axios
            .get(`https://api.themoviedb.org/3/search/${category}`, {
              params: {
                page: 1,
                language: "pt-BR",
                api_key: "42201f5908fbfa24d8b5601060a38618",
                query: search,
              },
            })
    
            //sucesso
            .then((result) => {
              setItens(result.data.results);
              console.log(itens);
            })
            .catch((error) => console.error("Erro ao buscar dados:", error));
        }
      }, [search]);


      
  useEffect(() => {
    //get - Consultar
    //post - Enviar
    //put - Atualizar
    //delete - deletar

    axios
      .get(`https://api.themoviedb.org/3/${category}/${tipo}`, {
        params: {
          page: 1,
          language: "pt-BR",
          api_key: "42201f5908fbfa24d8b5601060a38618",
        },
      })

      //sucesso
      .then((result) => {
        setItens(result.data.results);
        console.log(itens);
      });

    // Erro
    // .catch(error => {
    //     console.log(erro.message);
    // });
  }, [tipo]);

  return (
    <div className="container">
      <ListStyle>
        <input
          type="text"
          placeholder="Pesquisar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          {/* relação ao q a API pede ou seja , popular, top_rated */}
          <option value="popular">Populares</option>
          <option value="top_rated">Top Rated</option>

          {category == "movie" ? (
            <option value="now_playing">Em Cartaz</option>
          ) : (
            <option value="airing_today">Em Exibição</option>
          )}
        </select>
      </ListStyle>

      <CardList>
        {itens.map((item) => (
          <CardItem key={item.id}>
            <Link to={`/detalhes/${category}/${item.id}`}>
              <h3>{item.title}</h3>

              {/* trocar o original e colocar w500 no lugar pra deixar o site mais leve por que a imagem é pesada por causa de sua qualidade e tamanhao original */}
              <img
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path} `}
                width={360}
              />

              <CardContent>
                {/* if Ternario */}
                <h2>{category == "movie" ? item.title : item.name}</h2>

                {/* .substring(0,4)  pega so os primeiros 4 digitos de uma string e retira o resto*/}

                <h3>
                  Ano:{" "}
                  {category == "movie"
                    ? item.release_date.substring(0, 4)
                    : item.first_air_date.substring(0, 4)}
                </h3>
                <span>
                  <img src={star} /> {item.vote_average}
                </span>
              </CardContent>
            </Link>
          </CardItem>
        ))}
      </CardList>
    </div>
  );
}
