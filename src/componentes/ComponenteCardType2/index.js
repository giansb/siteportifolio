import React from "react";
import './style.css'

export default function ComponenteCardType2(props){
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
                    
                    
                    <a className="c-card-link rep-link-2" href={props.replink} target="_blank">
                        <img src=".\assets\icons\code-w.png"></img>
                        <p>Repositorio</p>
                    </a>
                    
                </div>
                
                </div>
                
            </div>
        </div>
    );
}