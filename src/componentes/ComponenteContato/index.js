import React from "react";
import './style.css'

export default function ComponenteContato(){
    return(
        <section id="contato" className="s-contato">
            <div className="limita-secao">
                <div className="contato-cont">
                    <div className="secao-topo">
                        <h2>Contato</h2>
                        <p>Entre em contato comigo pelas minhas redes principais abaixo!</p>
                    </div>
                    <div className="contato-boxes">
                        <div className="contato-box">
                            <img src="./assets/icons/gmail.png"></img>
                            <a className="link-style" link href="mailto:gianbraga1802@gmail.com" target="_blank">gianbraga1802@gmail.com</a>
                        </div>
                        <div className="contato-box">
                            <img src="./assets/icons/linkedin-n.png"></img>
                            <a className="link-style" link href="https://br.linkedin.com/in/gian-carlo-braga-165a63242" target="_blank">/gian-carlo-braga</a>
                        </div>
                        <div className="contato-box">
                            <img src="./assets/icons/github-n.png"></img>
                            <a className="link-style" link href="https://github.com/giansb" target="_blank">/giansb</a>
                        </div>
                        <div className="contato-box">
                            <img src="./assets/icons/whatsapp.png"></img>
                            <a className="link-style" link href="https://wa.me/5551984965313" target="_blank">(51) 9 8496-5313</a>
                        </div>
                    </div>
                    <div className="contato-boxes-2">
                    <div className="contato-box">
                            <img src="./assets/icons/gmail.png"></img>
                            <a className="link-style" link href="mailto:gianbraga1802@gmail.com" target="_blank">gianbraga1802@</a>
                        </div>
                        <a className="contato-box-2" link href="" target="_blank">
                            <img src="./assets/icons/gmail.png"></img>
                            <p>gianbraga1802@gmail</p>
                        </a>

                        <a className="contato-box-2" href="https://br.linkedin.com/in/gian-carlo-braga-165a63242" target="_blank">
                            <img src="./assets/icons/linkedin-n.png"></img>
                            <p>/gian-carlo-braga</p>
                        </a>
                        
                        <a className="contato-box-2" link href="https://github.com/giansb" target="_blank">
                            <img src="./assets/icons/github-n.png"></img>
                            <p>/giansb</p>
                        </a>

                        <a className="contato-box-2" link href="https://wa.me/5551981712896" target="_blank">
                            <img src="./assets/icons/whatsapp.png"></img>
                            <p>(51) 9 8171-2896</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}