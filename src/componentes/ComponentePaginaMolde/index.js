import React from "react";
import Topo from "../Topo";
import Rodape from "../ComponenteRodape";


export default function PaginaMolde(props){
    return(
        <div>
            <Topo/>
            <div className="topo-espaco"></div>
            {props.children}
            <Rodape/>
        </div>
    );
}

