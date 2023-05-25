import React from "react";
import './style.css'

export default function ComponenteCard(props){
    return(
        <div className="c-card" style={
            {backgroundImage: `url(${props.fundo})`}
            }>
            <div className="cab"><p>{props.cab}</p></div>
            <div className="c-card-cont">
                <div className="c-card-principal">
                    <h2>{props.titulo}</h2>
                    <p className="desc">{props.desc}</p>
                </div>
                

                
                    
                <div className="test">
                <div className="c-card-links">
                    
                    <a className="c-card-link site-link" href={props.sitelink} target="_blank">
                        <img src=".\assets\icons\web-w.png"></img>
                        <p>Site</p>
                    </a>
                    <a className="c-card-link rep-link" href={props.replink} target="_blank">
                        <img src=".\assets\icons\code-w.png"></img>
                        <p>Repositorio</p>
                    </a>
                    
                </div>
                {/* <a className="c-card-link" href={props.pagprojeto} target="_blank">
                        
                        <p>Descrição completa </p>
                    </a> */}
                </div>
                
            </div>
        </div>
    );
}