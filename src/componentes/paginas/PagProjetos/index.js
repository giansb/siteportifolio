import React from "react";
import PaginaMolde from "../../ComponentePaginaMolde";
import './style.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ComponenteCard from "../../ComponenteCard";
import ComponenteCardType2 from "../../ComponenteCardType2";


export default function PagProjetos(){
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
                            <div className="pp-box">
                            <ComponenteCard cab='web React.js' titulo="Pizzaria Freddy's Fazbear" desc="Site feito inspirado na Freddy's Fazbear. Feito em React.js, utiliza Variáveis de estado para o elemento de status e expressões regulares para validar o formulário" fundo="./assets/projetos_tumb/projeto18.png" replink="https://github.com/giansb/FreddyFazbear" sitelink="https://giansb.github.io/FreddyFazbear/"/>
                            </div>
                            <div className="pp-box">
                            <ComponenteCardType2 cab='web PHP' titulo='Cadastrar usuários' desc='Sistema Web para cadastrar, editar e excluir usuários. Feito em PHP com banco de dados MySQL.' fundo="./assets/projetos_tumb/projeto17.png" replink="https://github.com/giansb/CadastroUsuariosPHP"/>
                            </div>
                            <div className="pp-box">
                            <ComponenteCardType2 cab='web JavaScript' titulo='Encontrar endereço' desc='Site desenvolvido para consultar endereço baseado no CEP informado. Consumindo a API da viacep.com.br.' fundo="./assets/projetos_tumb/projeto15.png" replink="https://github.com/giansb/BuscarCep"/>
                            </div>
                            <div className="pp-box">
                            <ComponenteCardType2 cab='web PHP' titulo='Enviar E-mail' desc='Site feito com PHP para envio de e-mail, utilizando a biblioteca PHPMailer e SMTP do Gmail. Configurando segurança do back-end. ' fundo="./assets/projetos_tumb/projeto14.png" replink="https://github.com/giansb/EnvioEmailPHP"/>
                            </div>
                            <div className="pp-box">
                            <ComponenteCardType2 cab='Web PHP' titulo='Help Desk' desc='Site Gerenciador de chamados suporte de T.i, com sistema de autenticação de login. Feito em PHP com Boostrap.' fundo="./assets/projetos_tumb/projeto13.png" replink="https://github.com/giansb/SiteChamadosInformatica"/>
                            </div>
                            <div className="pp-box">
                            <ComponenteCard cab='Web JavaScript' titulo='Calculadora Web' desc='Calculadora, feita para rever alguns conceitos de DOM. Foi feita em html,css e Javavscript.' fundo="./assets/projetos_tumb/projeto12.png" sitelink="https://giansb.github.io/CalculadoraWeb/" replink="https://github.com/giansb/CalculadoraWeb"/>
                            </div>
                            <div className="pp-box">
                            <ComponenteCard cab='Web React.js' titulo='Agência de design' desc='Pagina de uma agência de design, colocando em prática o conhecimento de variáveis de estado.' fundo="./assets/projetos_tumb/projeto1.png" sitelink="https://giansb.github.io/react-site-design/" replink="https://github.com/giansb/react-site-design"/>
                            </div>
                            <div className="pp-box">
                            <ComponenteCard cab="Web React.js" titulo="Clínica Médica" desc="Site de uma clínica médica, feito em React.js" fundo="./assets/projetos_tumb/projeto6.png" sitelink="https://giansb.github.io/SiteClinica/" replink="https://github.com/giansb/SiteClinica"/>
                            </div>
                            <div className="pp-box">
                            <ComponenteCard cab='Web React.js' titulo='Agência de viagens' desc='Página de uma Agência de viagens, nesse projeto foi colocado em pratica a criação de formularios em html.' fundo='./assets/projetos_tumb/projeto3.png' sitelink='https://giansb.github.io/SiteAgenciaDeViagens/' replink='https://github.com/giansb/SiteAgenciaDeViagens'/>
                            </div>
                            <div className="pp-box">
                            <ComponenteCard cab="Web React.js" titulo="A Biblioteca da Meia-Noite" desc="Site feito para o livro A Biblioteca da Meia-noite. Migrado para React.js" fundo="./assets/projetos_tumb/projeto4.png" sitelink="https://giansb.github.io/SitelivroABibliotecaDaMeia-noite/" replink="https://github.com/giansb/SitelivroABibliotecaDaMeia-noite"/>
                            </div>
                            <div className="pp-box">
                            <ComponenteCard cab="Web React.js" titulo="Ótica vida" desc="Página de uma Ótica, colocando em prática os estudos de flex-box e responsividade." fundo="./assets/projetos_tumb/projeto5.png" sitelink="https://giansb.github.io/react-site-oculos2/" replink="https://github.com/giansb/react-site-oculos2"/>
                            </div>
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
                            <div className="pp-box">
                            <ComponenteCardType2 cab='Java Swing' titulo='CRUD caixa mercado V2' desc='Segunda versão do CRUD de caixa de mercado. Desenvolvido seguindo o padrão MVC com interação de banco MySQL. ' fundo="./assets/projetos_tumb/projeto16.png" replink="https://github.com/giansb/ProjetoCaixaMercadoV2" />
                            </div>
                            <div className="pp-box">
                            <ComponenteCardType2 cab='Java Swing' titulo='CRUD caixa mercado' desc='CRUD de um sistema de caixa de mercado, desenvolvido em Java com interação com banco de dados MySQL.' fundo="./assets/projetos_tumb/projeto8.jpg" replink="https://github.com/giansb/ProjetoCaixaMercado" />
                            </div>
                            <div className="pp-box">
                            <ComponenteCardType2 cab='Java Swing' titulo='CRUD Pizzaria' desc='CRUD de uma piazzaria, feito em Java utilizando array list. Cria um arquivo txt ao finalizar o pedido como nota fiscal.' fundo="./assets/projetos_tumb/projeto7.jpg" replink="https://github.com/giansb/JavaCrudPizzaria"/>
                            </div>
                            <div className="pp-box">
                            <ComponenteCardType2 cab='' titulo='' desc='' fundo="./assets/projetos_tumb/embreve.jpg" />
                            </div>
                            <div className="pp-box">
                            <ComponenteCardType2 cab='' titulo='' desc='' fundo="./assets/projetos_tumb/embreve.jpg" />
                            </div>
                            <div className="pp-box">
                            <ComponenteCardType2 cab='' titulo='' desc='' fundo="./assets/projetos_tumb/embreve.jpg" />
                            </div>
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
                            <div className="pp-box">
                            <ComponenteCardType2 cab='Em desenvolvimento' titulo='Senac Tech VR' desc='Passeio virtual Senac, sendo desenvolvido em equipe na Unity para óculos VR. Modelagem feita no Blender.' fundo="./assets/projetos_tumb/projeto92.png" replink="https://github.com/giansb/ModelagemVRSenacTech"/>
                            </div>
                            <div className="pp-box">
                            <ComponenteCardType2 cab='Blender' titulo='Setup' desc='Modelagem de um setup, feito no Blender como trabalho final do curso "Introdução ao Blender", da UNHIDE.' fundo="./assets/projetos_tumb/projeto10.png" replink="https://github.com/giansb/ModelagemSetupBlender"/>
                            </div>
                            <div className="pp-box">
                            <ComponenteCardType2 cab='Em desenvolvimento' titulo='CCMQ' desc='Modelagem Casa de Cultura Mario Quintana feita no Blender. Estudo de modelagem modular.' fundo="./assets/projetos_tumb/projeto11.png" replink="https://github.com/giansb/ModelagemCCMQBlender"/>
                            </div>
                            <div className="pp-box">
                            <ComponenteCardType2 cab='' titulo='' desc='' fundo="./assets/projetos_tumb/embreve.jpg" />
                            </div>
                            <div className="pp-box">
                            <ComponenteCardType2 cab='' titulo='' desc='' fundo="./assets/projetos_tumb/embreve.jpg" />
                            </div>
                            </Carousel>
                            </div>
                        </div>
                   
                    </div>
                    
                    
                </section>
                
            </PaginaMolde>
        </div>
    );
}