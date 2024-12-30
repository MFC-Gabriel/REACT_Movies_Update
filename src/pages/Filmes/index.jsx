 import { Banner } from "../../components/Banner"
 import HeroFilmes from "../../images/heroCoringa.jpg"
import { List } from "../../components/List"

export function Filmes(){


    return (
    
    <>
    <Banner title="Filmes" 
    sub="Confira as maiores produções do cinema mundial"
    bg={HeroFilmes}/>
     <List category="movie" />
    
    
    </>
    
    
    
    )
    
    
    
    }