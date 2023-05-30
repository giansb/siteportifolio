import './style.css'

import { HashLink } from 'react-router-hash-link';



export default function Topo(){
    return(
        <header>
            <div className='topo limita-secao'>
                <div class="button" tabindex="0">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </div>
                <p>Gian  S Braga | <span className='azul'>Dev</span> Front-end</p>
                    <nav>
                        <HashLink to="/">Inicio</HashLink>
                        <HashLink to="/#curriculo" smooth>Currículo</HashLink>
                        <HashLink to="/projetos#top" smooth>Projetos</HashLink>
                        <HashLink to="/#contato" smooth>Contato</HashLink>
                    </nav>
                
            </div>
        </header>
    );
}