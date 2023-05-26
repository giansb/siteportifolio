import React from "react";
import PaginaMolde from "../../ComponentePaginaMolde";
import './style.css'
import ComponenteCard from "../../ComponenteCard";

export default function PagProjetos(){
    return(
        <div>
            <PaginaMolde>
                <section className="secao-pagina-projetos">
                    <div className="limita-secao">
                    <div className="pagina-projetos">
                        <div className="secao-topo">
                            <h2>Projetos</h2>
                            <p>Projetos que eu desenvolvi:</p>
                        </div>

                            <div className="pagina-projeto-center">
                            <div className="pagina-projetos-boxes-projetos">
                                <div className="pp-box">
                                <ComponenteCard cab='Projeto de estudo' titulo='Agência de design' desc='Pagina de uma agência de design, colocando em prática o conhecimento de variáveis de estado.' fundo="./assets/projetos_tumb/projeto1.png" sitelink="https://giansb.github.io/react-site-design/" replink="https://github.com/giansb/react-site-design"/>
                                </div>
                                <div className="pp-box">
                                <ComponenteCard cab="projeto de estudo" titulo="Clínica Médica" desc="Site de uma clínica médica, feito em React.js" fundo="./assets/projetos_tumb/projeto6.png" sitelink="https://giansb.github.io/SiteClinica/" replink="https://github.com/giansb/SiteClinica"/>
                                </div>
                                <div className="pp-box">
                                    <ComponenteCard cab='Projeto de estudo' titulo='Agência de viagens' desc='Página de uma Agência de viagens, nesse projeto foi colocado em pratica a criação de formularios em html.' fundo='./assets/projetos_tumb/projeto3.png' sitelink='https://giansb.github.io/SiteAgenciaDeViagens/' replink='https://github.com/giansb/SiteAgenciaDeViagens'/>
                                </div>
                                <div className="pp-box">
                                    <ComponenteCard cab="Projeto de estudo" titulo="A Biblioteca da Meia-Noite" desc="Site feito para o livro A Biblioteca da Meia-noite. Migrado para React.js" fundo="./assets/projetos_tumb/projeto4.png" sitelink="https://giansb.github.io/SitelivroABibliotecaDaMeia-noite/" replink="https://github.com/giansb/SitelivroABibliotecaDaMeia-noite"/>
                                </div>
                                <div className="pp-box">
                                    <ComponenteCard cab="Projeto de estudo" titulo="Ótica vida" desc="Página de uma Ótica, colocando em prática os estudos de flex-box e responsividade." fundo="./assets/projetos_tumb/projeto5.png" sitelink="https://giansb.github.io/react-site-oculos2/" replink="https://github.com/giansb/react-site-oculos2"/>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            </PaginaMolde>
        </div>
    );
}