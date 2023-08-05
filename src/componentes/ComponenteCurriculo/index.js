import React from "react";
import './style.css'


export default function ComponenteCurriculo(){
    return(
        <section id="curriculo" className="s-curriculo">
            <div className="limita-secao">
                <div className="secao-topo">
                    <h2>Currículo</h2>
                    <p>Acesse meu currículo completo abaixo!</p>
                </div>
                <div className="s-curriculo-cont">
                    <div className="metade">
                        <img className="metade-image1" src=".\assets\cv.png"></img>
                        <a className="botao-curriculo" href="https://drive.google.com/file/d/1jigAYV34XkT9AGD56sKjkGiMT8AoiO0Y/view?usp=sharing" target="_blank">Acessar curriculo</a>
                    </div>
                    <div className="metade">
                        
                        <div className="curriculo-texto-cont">
                                <p>&lt;<span className="pink">h1</span>&gt;Currículo&lt;/<span className="pink">h1</span>&gt;</p>
                                <p className="s1">&lt;<span className="pink s1">div</span> <span className="green">ClassName</span><span className="pink">=</span><span className="yellow">'secao-tecnologias'</span>&gt;</p>
                                <p className="s2">&lt;<span className="pink">h2</span>&gt;Tecnologias&lt;/<span className="pink">h2</span>&gt;</p>
                                <p className="s2">&lt;<span className="pink">ul</span> <span className="green">typeof</span><span className="pink">=</span><span className="yellow">'none'</span>&gt;</p>
                                <p className="s2 s3">&lt;<span className="pink">li</span>&gt;HTML&lt;/<span className="pink">li</span>&gt;</p>
                                <p className="s2 s3">&lt;<span className="pink">li</span>&gt;CSS&lt;/<span className="pink">li</span>&gt;</p>
                                <p className="s2 s3">&lt;<span className="pink">li</span>&gt;JavaScript&lt;/<span className="pink">li</span>&gt;</p>
                                <p className="s2 s3">&lt;<span className="pink">li</span>&gt;React.js&lt;/<span className="pink">li</span>&gt;</p>
                                <p className="s2 s3">&lt;<span className="pink">li</span>&gt;Java&lt;/<span className="pink">li</span>&gt;</p>
                                <p className="s2 s3">&lt;<span className="pink">li</span>&gt;MySQL&lt;/<span className="pink">li</span>&gt;</p>
                                <p className="s2">&lt;/<span className="pink">ul</span>&gt;</p>
                                <p>&lt;/<span className="pink">div</span>&gt;</p>
                                <img className="curriculo-image2" src=".\assets\imagem2.png"></img>
                        </div>
                        
                            
                    </div>
                </div>
            </div>
        </section>
    );
}