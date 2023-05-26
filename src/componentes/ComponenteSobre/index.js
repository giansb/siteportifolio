import React from "react";
import './style.css'


export default function ComponenteSobre(){
    return(
        <section id="sobre" className="s-sobre">
            <div className="limita-secao">
                <div className="sobre-cont">
                    <h2>Sobre mim</h2>
                    <div className="sobre-inside">
                        <p>Olá, eu sou o Gian. Sou estudante de Desenvolvimento de Sistemas e atualmente estudo Back-end(Java, JavaScript), mas minha base de conhecimento começou toda na trilha do front-end. Escolhi programação porque sou apaixonado por lógica, e quando descobri que poderia trabalhar com isso junto ao design foi espetacular. Também tenho modelagem 3D como hobby no meio dia a dia.</p>
                        <img src="./assets/new.png"></img>
                    </div>
                </div>
            </div>
        </section>
    );
}