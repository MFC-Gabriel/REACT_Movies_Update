import styled from "styled-components";



export const HeaderStyle = styled.div`
    position: fixed; /* Garante que o header fique fixo no topo */
    top: 0;
    left: 0;
    width: 100%; /* Ocupa 100% da largura */
    background-color: rgba(0, 7, 21, 0.7); /* Adicione transparência */
    padding: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(5px); /* Aplica o desfoque no conteúdo por trás */
    z-index: 1000; /* Coloca o header acima dos outros elementos */

    nav {
        display: flex;
        column-gap: 50px;
        
        a {
            text-decoration: none;
            color: #fff;
            position: relative;
            display: inline-block;
            font-size: 20px; /* Você pode ajustar o tamanho */
            padding-bottom: 5px; /* Espaçamento para a barra */
        }

    /* A barra que vai aparecer abaixo do link */
    a::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 3px; /* Espessura da barra */
        background-color: white; /* Cor da barra */
        transition: width 0.3s ease; /* Animação da largura */
    }

    /* Efeito de hover - aumentar a largura da barra */
    a:hover::after {
        width: 100%; /* Barra vai ocupar toda a largura do link */
    }
                
            
    }
   


  
   
`;
