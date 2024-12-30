import styled from "styled-components"



export const ListStyle = styled.div`


    display: flex;
    justify-content: space-between;

    input{
        margin-top:10px;
        padding: 5px 10px;
        background-color: transparent;
        background-color:rgb(0, 0, 0);
        color:white;
        border-radius:10px ;
     
    }
    select{
        
     padding: 5px 10px;
     width: 200px;
     margin-top:10px;
     background-color: transparent;
     background-color:rgb(0, 0, 0);
     color:white;
     border-radius:10px ;
     
    }


`

// export const Select = styled.select`

//     padding: 5px 10px;
//     width: 200px;
//     margin-top:10px;
//     background-color: transparent;
//     background-color: #000715;
//     color:white;
//     border-radius:10px ;

// `




export const CardList = styled.div`
    display: flex;
    flex-wrap: wrap; /*quebra de linha */
    gap:30px;
    margin:60px 0;
    justify-content: center;
  


`


export const CardItem = styled.div`

    max-width: 360px;
    position: relative;  /*Serve de referencia ao absolute */
   
    h3{
        color: white;
        
       cursor: url('./images/icons8-select-cursor-30.png'), auto; /* Mesmo cursor do body */


    }
    img{
        border-radius: 10px;
        opacity: 0.7;
        transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out; /* Adiciona a transição para o transform */

        &:hover{
            opacity: 1;
            transform: scale(1.05); /* Aumenta 5% do tamanho original */
   
        }

    }


`

export const CardContent = styled.div`
    position:absolute;  /*posição em relação ao elemento pai que é o Carditem(card item tem que ter um position)  */
    bottom:15px;
    left:15px;
    color:white;
    text-shadow: 1px 2px 1px black; // sombra horizontal, vertical, suavidade e cor
    pointer-events: none; //Faz com que não haja interação com o mouse sobre a area
    font-style: oblique;

    h2{
        font-size: 24px;
    }
    h3{
        font-size: 16px;
        
    }
   
    span{
        font-size: 16px;
        color: #FAFF00;
    }
`


