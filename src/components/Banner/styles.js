import styled from "styled-components";


export const BannerStyle = styled.div`

            background-image: url(${(props) => props.bgImage});
            background-repeat: no-repeat;
            background-size: cover;
            padding: 235px 0;
            width: 100%;
            text-align: center;
            height: 100%; /* Ajusta a altura */
            

            h1{
                font-size: 48px;
                color: white;

            }
            p{
                font-size:18px;
                color: yellow;
                margin: 0 auto;
            }


        `