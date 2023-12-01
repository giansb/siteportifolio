import React from "react";
import PaginaMolde from "../../ComponentePaginaMolde";
import './style.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ComponenteCard from "../../ComponenteCard";
import ComponenteCardType2 from "../../ComponenteCardType2";
import { Projeto3D, ProjetosDesnk, ProjetosWeb } from "../../../colecoes/colecoes";



export default function PagProjetos(){

    const arrayPW = ProjetosWeb;
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 680 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 680, min: 0 },
          items: 1
        }
      };

    return(
        <div>
            <PaginaMolde>
                <section className="secao-pagina-projetos">
                    <div className="pagina-projetos">

                    <div className="secao-topo limita-secao">
                            <h2>Projetos</h2>
                                <p>Projetos que eu desenvolvi:</p>
                            </div>
                            <div className="espaco"></div>
                        

                        <div className="secao-projetos ">

                            <div className="secao-topo limita-secao">
                                <h2>Web</h2>
                                <p>Projetos Web com HTML, CSS, JavaScript, React.js e PHP.</p>
                            </div>
                                
                            <div className="carrosel-container">
                            <Carousel responsive={responsive}>
                            {
                                ProjetosWeb.map((card) => {
                                    if(card.sitelink == ""){
                                        return(
                                            <div className="pp-box"><ComponenteCardType2 titulo={card.titulo} cab ={card.cab} desc={card.desc} replink={card.replink} fundo={card.image}/></div>
                                        );
                                    } else {
                                        return(
                                            <div className="pp-box"><ComponenteCard titulo={card.titulo} cab={card.cab} desc={card.desc} replink={card.replink} sitelink={card.sitelink} fundo={card.image}/></div>
                                        );
                                    }
                                })
                            }
                            </Carousel>
                            </div>
                        </div>

                        

                        <div className="secao-projetos ">

                            <div className="secao-topo limita-secao">
                                <h2>Desktop</h2>
                                <p>Projetos desktop, com Java.</p>
                            </div>

                            <div className="carrosel-container">
                            <Carousel responsive={responsive}>
                            {
                                ProjetosDesnk.map((card) => {
                                    if(card.sitelink == ""){
                                        return(
                                            <div className="pp-box"><ComponenteCardType2 titulo={card.titulo} cab ={card.cab} desc={card.desc} replink={card.replink} fundo={card.image}/></div>
                                        );
                                    } else {
                                        return(
                                            <div className="pp-box"><ComponenteCard titulo={card.titulo} cab={card.cab} desc={card.desc} replink={card.replink} sitelink={card.sitelink} fundo={card.image}/></div>
                                        );
                                    }
                                })
                            }
                            </Carousel>
                            </div>
                        </div>

                        <div className="secao-projetos ">

                            <div className="secao-topo limita-secao">
                                <h2>Outros</h2>
                                <p>Blender, Unity, Unreal Engine, entre outros.</p>
                            </div>

                            <div className="carrosel-container">
                            <Carousel responsive={responsive}>
                            {
                                Projeto3D.map((card) => {
                                    if(card.sitelink == ""){
                                        return(
                                            <div className="pp-box"><ComponenteCardType2 titulo={card.titulo} cab ={card.cab} desc={card.desc} replink={card.replink} fundo={card.image}/></div>
                                        );
                                    } else {
                                        return(
                                            <div className="pp-box"><ComponenteCard titulo={card.titulo} cab={card.cab} desc={card.desc} replink={card.replink} sitelink={card.sitelink} fundo={card.image}/></div>
                                        );
                                    }
                                })
                            }
                            </Carousel>
                            </div>
                        </div>
                   
                    </div>
                    
                    
                </section>
                
            </PaginaMolde>
        </div>
    );
}