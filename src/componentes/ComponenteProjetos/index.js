import React from "react";
import './style.css'
import ComponenteCard from "../ComponenteCard";
import { HashLink } from "react-router-hash-link";
import ComponenteCardType2 from "../ComponenteCardType2";


export default function ComponenteProjetos(){
    return(
        <section id="projetos" className="s-projetos">
            <div className="limita-secao">
                <div className="secao-topo">
                <h2>Projetos</h2>
                <p>Alguns dos meus principais projetos</p>
                </div>
                <div className="projetos-boxes">
                <div className="projeto-box p-box" ><ComponenteCardType2 cab='Em desenvolvimento' titulo='Senac Tech VR' desc='Passeio virtual Senac, sendo desenvolvido em equipe na Unity para óculos VR. Modelagem feita no Blender.' fundo="./assets/projetos_tumb/projeto9.png" replink="https://github.com/giansb/ModelagemVRSenacTech" /></div>
                <div className="projeto-box p-box"><ComponenteCardType2 cab='web PHP' titulo='Enviar E-mail' desc='Site feito com PHP para envio de e-mail, utilizando a biblioteca PHPMailer e SMTP do Gmail. Configurando segurança do back-end. ' fundo="./assets/projetos_tumb/projeto14.png" replink="https://github.com/giansb/EnvioEmailPHP"/></div>
                <div className="projeto-box p-box"><ComponenteCardType2 cab='Web PHP' titulo='Help Desk' desc='Site Gerenciador de chamados suporte de T.i, com sistema de autenticação de login. Feito em PHP com Boostrap.' fundo="./assets/projetos_tumb/projeto13.png" replink="https://github.com/giansb/SiteChamadosInformatica"/></div>
                    
                    
                    <div className="projeto-box more">
                        
                        <HashLink className="more-link" to="/projetos#top">
                        <div className="more-cont">
                            <p className="more-text">Mais<br></br> projetos</p>
                            <p className="more-row">&rarr;</p>
                            <div className="more-cont-borda"></div>
                        </div>
                        </HashLink>
                        <div className="more-points">...</div>
                    </div>
                </div>
            </div>
        </section>
    );
}