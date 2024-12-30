import styled from "styled-components"




export const BannerDetalhes = styled.div`

    height: 500px;
    background-position:center;
    background-image: url(${(props => props.url)});
    background-size: cover;
    background-attachment:fixed;  /*A imagem fica parada em relação ao site */
    

`
export const Content = styled.div`

    border-radius:10px;
    max-width: 850px;
    background: rgba(0,0,0,0.50);
    color:white;
    margin:0 auto;
    backdrop-filter: blur(11.5px);
    position: relative;
    top:-250px;
    padding: 30px;

    display: flex;
    align-items: center;
    column-gap: 30px;
    
    ul{
        list-style-position: inside;
        margin: 15px 0;
    }

    p{
        margin-bottom: 15px;
    }
    button{
        background-color: #000E2A;
        border: none;
        padding:10px 40px;
        color:white;
        border-radius: 5px;
        cursor:pointer;
        transition:  ease-in-out 0.5s;
        &:hover{
            background-color:rgb(0, 33, 99);
        }

    }

    @media (max-width:850px){
        img{
            margin-bottom: 20px;
            //display: none;
        }
        
        flex-direction:column ;
        
    }




`



















