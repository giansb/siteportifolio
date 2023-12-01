import ComponenteCard from "../componentes/ComponenteCard";
import ComponenteCardType2 from "../componentes/ComponenteCardType2";

export function CarregarCards(teste){
    teste.map((card) => {
        if(card.sitelink == ""){
            return(
                <div className="pb-box"><ComponenteCardType2 titulo={card.titulo} cab ={card.cab} desc={card.desc} replink={card.replink}/></div>
            );
        } else {
            return(
                <div className="pb-box"><ComponenteCard titulo={card.titulo} cab={card.cab} desc={card.desc} replink={card.replink} sitelink={card.sitelink}/></div>
            );
        }
    })
        
    
}