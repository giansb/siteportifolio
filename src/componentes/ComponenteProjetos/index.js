import React from "react";
import './style.css'
import ComponenteCard from "../ComponenteCard";


export default function ComponenteProjetos(){
    return(
        <section id="projetos" className="s-projetos">
            <div className="limita-secao">
                <div className="secao-topo">
                <h2>Projetos</h2>
                <p>Alguns dos meus principais projetos</p>
                </div>
                <div className="projetos-boxes">
                    <div className="projeto-box p-box"><ComponenteCard cab='Projeto de estudo' titulo='Agência de design' desc='Pagina de uma agência de design, colocando em prática o conhecimento de variáveis de estado.' fundo="./assets/projetos_tumb/projeto1.png" sitelink="https://giansb.github.io/react-site-design/" replink="https://github.com/giansb/react-site-design"/></div>
                    <div className="projeto-box p-box"><ComponenteCard cab="projeto de estudo" titulo="Clínica Médica" desc="Site de uma clínica médica, feito em React.js" fundo="./assets/projetos_tumb/projeto6.png" sitelink="https://giansb.github.io/SiteClinica/" replink="https://github.com/giansb/SiteClinica"/></div>
                    <div className="projeto-box p-box" ><ComponenteCard cab='Projeto de estudo' titulo='Agência de viagens' desc='Página de uma Agência de viagens, nesse projeto foi colocado em pratica a criação de formularios em html.' fundo='./assets/projetos_tumb/projeto3.png' sitelink='https://giansb.github.io/SiteAgenciaDeViagens/' replink='https://github.com/giansb/SiteAgenciaDeViagens'/></div>
                    <div className="projeto-box more">
                        <a className="more-link" href='/projetos'>
                        <div className="more-cont">
                            <p className="more-text">Mais<br></br> projetos</p>
                            <p className="more-row">&rarr;</p>
                            <div className="more-cont-borda"></div>
                        </div>
                        </a>
                        <a link href="#sobre"><div className="more-points">...</div></a>
                    </div>
                </div>
            </div>
        </section>
    );
}