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
                <div className="projeto-box p-box" ><ComponenteCardType2 cab='Em desenvolvimento' titulo='Senac Tech VR' desc='Passeio virtual Senac, sendo desenvolvido em equipe na Unity para óculos VR. Modelagem feita no Blender.' fundo="./assets/projetos_tumb/projeto92.png" replink="https://github.com/giansb/ModelagemVRSenacTech" /></div>
                <div className="projeto-box p-box"><ComponenteCardType2 cab='Java Swing' titulo='CRUD caixa mercado V2' desc='Segunda versão do CRUD de caixa de mercado. Desenvolvido seguindo o padrão MVC com interação de banco MySQL. ' fundo="./assets/projetos_tumb/projeto16.png" replink="https://github.com/giansb/ProjetoCaixaMercadoV2" /></div>
                <div className="projeto-box p-box"><ComponenteCardType2 cab='web PHP' titulo='Cadastrar usuários' desc='Sistema Web para cadastrar, editar e excluir usuários. Feito em PHP com banco de dados MySQL.' fundo="./assets/projetos_tumb/projeto17.png" replink="https://github.com/giansb/CadastroUsuariosPHP"/></div>
                    
                    
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