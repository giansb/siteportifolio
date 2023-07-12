import React from "react";
import './style.css'


export default function ComponenteSobre(){
    return(
        <section id="sobre" className="s-sobre">
            <div className="limita-secao">
                <div className="sobre-cont">
                    
                    <div className="sobre-inside">
                        <div className="sobre-inside-text">
                        <h2>Sobre mim</h2>
                        <p>Faço Técnico em Desenvolvimento de Sistemas e atualmente estudo Java com interface gráfica com banco de dados, também participo do programa <a className="link-nova-geracao" link href="https://institutocaldeira.org.br/programas/nova-geracao/" target="_blank"><span className="green">Nova geração</span></a>, onde estudo front-end(JavaScript, html, css).</p>
                        </div>
                        <div className="sobre-inside-list">
                            <div className="sobre-inside-list-part">  
                                <h2 className="green">DevMedia</h2>
                                <p>Certificação: HTML, CSS, JavaScript, React.js, Node.js, API REAST.</p>
                            </div>
                            <div className="sobre-inside-list-part">
                                <h2 className="yellow">SENAC</h2>
                                <p>Técnico em Desenvolvimento de Sistemas ( 2° semestre).</p>
                                <p>Certificação: Assistente de administração de banco de dados.</p>
                            </div>
                            <div className="sobre-inside-list-part">
                                <h2><span className="blue">Alura</span></h2>
                                <p>Certificação: HTML, CSS, JavaScript, Git e GitHub.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}