import React from "react";
import './style.css'
import { useEffect } from "react";


export default function ComponenteCurriculo(){

    <script src=
    "https://code.jquery.com/jquery-1.12.4.min.js">
        </script>

    

    useEffect (() => {
        if(window.screen.width>900){
            
        var ghost = document.getElementById('fantasma');
        var ghostX = 0;
        var ghostY = 0;

        let v1;
        let v2;


        const elem = document.querySelector('.fantasma');
        let recx = elem.offsetTop;
        let recy = elem.offsetLeft;
        console.log(recx, recy);
        

        

const handleMouseMove = (event) => {

    ghost.classList.add("active");
  
  
  var eventDoc, doc, body;

  event = event || window.event;
  if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX = event.clientX +
        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
        (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY +
        (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
        (doc && doc.clientTop  || body && body.clientTop  || 0 );
  }
  
  followCursor(event.pageX, event.pageY)
}

const followCursor = (pageX, pageY) => {
  
 const diffX = pageX - ghostX;
  const diffY = pageY - ghostY;
  const skewX = diffX / 16;
  const scale = diffY / 16;

  ghostX += diffX / 8;
  ghostY += diffY / 8;
  

  const skewDegrees = countShift(skewX, 0, 50, 0, -25);
  const scaleYValue = countShift(scale, 0,300, 1, 2.0);

       
            ghost.style.transform = ` translate(${-diffX}px, ${-diffY}px) skew(${skewDegrees}deg) rotate(${-skewDegrees}deg) scaleY(${scaleYValue})`;

                let x = pageX ;
                 let y = pageY;
    
                 ghost.style.top = y + "px";
                 ghost.style.left = x + "px";
        
}

const countShift = (value, inMin, inMax, outMin, outMax) => 
 ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;



    document.getElementById('metade').addEventListener("mousemove", event => handleMouseMove(event));


document.getElementById('metade').addEventListener("mouseleave", () => {

    var refe = document.getElementById('metade2')

    ghost.style.transform = ` translate(${0}px, ${0}px)`
    ghost.style.top = (refe.offsetTop + 150) + "px";
   ghost.style.left = (refe.offsetLeft + 200) + "px";
   ghost.classList.remove('active');
   ghost.style.animation="none";
   
   

   

  


  
});
        }
    })
    
    return(
        
        <section id="curriculo" className="s-curriculo">
            <div className="limita-secao">
                <div className="secao-topo">
                    <h2>Currículo</h2>
                    <p>Acesse meu currículo completo abaixo!</p>
                </div>
                <div className="s-curriculo-cont"id="metade">
                    <div className="metade">
                        <img className="metade-image1" src=".\assets\cv.png"></img>
                        <a className="botao-curriculo" href="https://drive.google.com/file/d/1DxC_KVKbXFNZkIagNjeuvNU2zV6-PzY2/view?usp=sharing" target="_blank">Acessar curriculo</a>
                    </div>
                    <div className="metade" id="metade2">
                        
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
                                <p className="s2 s3">&lt;<span className="pink">li</span>&gt;PHP&lt;/<span className="pink">li</span>&gt;</p>
                                <p className="s2 s3">&lt;<span className="pink">li</span>&gt;MySQL&lt;/<span className="pink">li</span>&gt;</p>
                                <p className="s2">&lt;/<span className="pink">ul</span>&gt;</p>
                                <p>&lt;/<span className="pink">div</span>&gt;</p>
                                
                        </div>
                        
                        <div id="fantasma">
                                    <div className="fantasma">
                                        <div className="fantasma_ondas">
                                            <div className="fantasma_onda"></div>
                                            <div className="fantasma_onda"></div>
                                        </div>
                                        <div className="fantasma_olhos">
                                            <div className="fantasma_olho"></div>
                                            <div className="fantasma_olho"></div>
                                        </div>
                                        <div className="fantasma_boca"></div>
                                    </div>
                                </div>
                        
                            
                    </div>
                </div>
            </div>
        </section>
        
    );
    
}