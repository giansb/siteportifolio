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
                        <p>Faço Técnico em Desenvolvimento de Sistemas no SENAC, estudei Java com interface gráfica e MySQL, atualmente estudo desenvolvimento web e PHP. Tenho modelagem 3D como hobby e atualmente participo de um projeto de realidade virtual na minha instuição como modelador 3D.</p>
                        </div>
                        <div className="sobre-inside-list">
                            <div className="sobre-inside-list-part">
                                <h2 className="yellow">SENAC</h2>
                                <p>Técnico em Desenvolvimento de Sistemas ( 2° semestre).</p>
                                <p>Certificação: Assistente de administração de banco de dados.</p>
                            </div>
                            <div className="sobre-inside-list-part">  
                                <h2 className="green">DevMedia</h2>
                                <p>Certificação: HTML, CSS, JavaScript, React.js, Node.js, API REAST.</p>
                            </div>
                            
                            <div className="sobre-inside-list-part">
                                <h2><span className="blue">Alura</span></h2>
                                <p>Certificação: HTML, CSS, JavaScript, Java, Git e GitHub.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}