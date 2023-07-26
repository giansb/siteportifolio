import React from "react";
import './style.css'
import ComponenteCard from "../ComponenteCard";
import { HashLink } from "react-router-hash-link";
import ComponenteCardType2 from "../ComponenteCardType2";


export default function ComponenteProjetos(){
    return(
        <section id="projetos" className="s-projetos">
            <div className="limita-secao">
                <div className="secao-topo">
                <h2>Projetos</h2>
                <p>Alguns dos meus principais projetos</p>
                </div>
                <div className="projetos-boxes">
                <div className="projeto-box p-box" ><ComponenteCardType2 cab='Em desenvolvimento' titulo='Senac Tech VR' desc='Passeio virtual pelo prédio do Senac, sendo desenvolvido em equipe na Unity para óculos VR. Modelagem feita no Blender.' fundo="./assets/projetos_tumb/projeto9.png" replink="https://github.com/giansb/ModelagemVRSenacTech" /></div>
                <div className="projeto-box p-box"><ComponenteCardType2 cab='Java Desktop' titulo='CRUD caixa mercado' desc='CRUD de um sistema de caixa de mercado, desenvolvido em Java com interação com banco de dados MySQL.' fundo="./assets/projetos_tumb/projeto8.jpg" replink="https://github.com/giansb/ProjetoCaixaMercado"/></div>
                    <div className="projeto-box p-box"><ComponenteCard cab='Web React.js' titulo='Agência de design' desc='Pagina de uma agência de design, colocando em prática o conhecimento de variáveis de estado.' fundo="./assets/projetos_tumb/projeto1.png" sitelink="https://giansb.github.io/react-site-design/" replink="https://github.com/giansb/react-site-design"/></div>
                    
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