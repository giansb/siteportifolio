import React from "react";
import './style.css'
import ComponenteCard from "../ComponenteCard";
import { HashLink } from "react-router-hash-link";
import ComponenteCardType2 from "../ComponenteCardType2";
import { projetosDestaque } from "../../colecoes/colecoes";


export default function ComponenteProjetos(){
    return(
        <section id="projetos" className="s-projetos">
            <div className="limita-secao">
                <div className="secao-topo">
                <h2>Projetos</h2>
                <p>Alguns dos meus principais projetos</p>
                </div>
                <div className="projetos-boxes">
                    {
                        projetosDestaque.map((card) => {
                            if(card.sitelink == ""){
                                return(
                                    <div className="projeto-box p-box"><ComponenteCardType2 titulo={card.titulo} cab ={card.cab} desc={card.desc} replink={card.replink} fundo={card.image}/></div>
                                );
                            } else {
                                return(
                                    <div className="projeto-box p-box"><ComponenteCard titulo={card.titulo} cab={card.cab} desc={card.desc} replink={card.replink} sitelink={card.sitelink} fundo={card.image}/></div>
                                );
                            }
                        })
                    }
                
                    
                    
                    <div className="projeto-box more">
                        
                        <HashLink className="more-link" to="/projetos#top">
                        <div className="more-cont">
                            <p className="more-text">Mais<br></br> projetos</p>
                            <p className="more-row">&rarr;</p>
                            <div className="more-cont-borda"></div>
                        </div>
                        </HashLink>
                        <div className="more-points">...</div>
                    </div>
                </div>
            </div>
        </section>
    );
}