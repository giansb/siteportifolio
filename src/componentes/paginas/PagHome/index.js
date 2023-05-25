import React from 'react';
import './style.css'
import ComponenteBanner from '../../ComponenteBanner';
import ComponenteSobre from '../../ComponenteSobre';
import ComponenteProjetos from '../../ComponenteProjetos';
import ComponenteContato from '../../ComponenteContato';
import ComponenteCurriculo from '../../ComponenteCurriculo';
import PaginaMolde from '../../ComponentePaginaMolde';



export default function PagHome(){
    return(
        <div className='p-principal'>
            <PaginaMolde>
            <ComponenteBanner/>
            <ComponenteSobre/>
            <ComponenteProjetos/>
            <ComponenteCurriculo/>
            <ComponenteContato/>
            </PaginaMolde>
        </div>
    );
}