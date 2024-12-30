import {Banner} from "../../components/Banner"
import HeroSeries from "../../images/HeroSerie.png"
import { List } from "../../components/List"

export function Series(){


    return (
    
    <>
    <Banner title="Séries" 
    sub="Confira o que é sucesso nas TVs do mundo!"
    bg={HeroSeries}/>
      <List category="tv" />   {/*o valor de category tem que ser como ta escrito na API */}
  
    
    
    </>
    
    
    
    )
    
    
    
    }