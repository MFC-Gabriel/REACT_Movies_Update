import styled from "styled-components"


export const HomeStyle = styled.div `


bottom: 0;
display: flex;
justify-content: center;

@media (max-width: 1190px) {
    flex-direction: column; /* As imagens ficam empilhadas na versão mobile */
    align-items: center;
    height:100%;
    background-color: #00030A;
    
    

    a{
    top:10%;
    bottom: -25%;
    margin:50px;
    border-radius: 10px;


}
}

p{
    
    color: white;
    font-size: 50px;
    position: absolute;
    top:750px;
    margin:0 auto;

}
img{

width: 100%; /* A imagem ocupa 100% do espaço do link */
height: 100%; /* Ajusta a altura */
object-fit: cover; /* Evita distorção da imagem */
opacity: 0.8;
transition: 0.7s ease-in-out;
&:hover{
  opacity: 1;
}

}
a {
  position: relative; /* Necessário para posicionar o texto dentro do link */
  display: block;
  width: 50%; /* Cada link ocupa 50% do container */
  height: 100vh; /* Altura total da tela */
  overflow: hidden; /* Garante que o texto/imagem não ultrapassem */
  text-decoration: none; /* Remove o sublinhado dos links */
}
p {
    position: absolute; /* Posiciona o texto dentro do link */
    top: 80%; /* Alinha o texto verticalmente no meio */
    left: 50%; /* Alinha o texto horizontalmente no meio */
    transform: translate(-50%, -50%); /* Move o texto para o centro exato */
    color: white;
    font-size: 55px; /* Tamanho do texto */
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Sombra para melhor visibilidade */
    text-align: center;
  }
`



  


