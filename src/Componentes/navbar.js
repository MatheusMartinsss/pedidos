import React from 'react';

import './navbar.css'

function NavBar(props) {
    const Categorias = props.Categorias;
    const Position = props.position;
    function onHandleClick(){
        
    }
    return (
        <div className = {Position ? 'navbarContainer navbarContainerScroll':'navbarContainer'}>
            {Categorias.map(item =>(
               <ul>
                   <li onClick = {() => onHandleClick()}>{item.Nome}</li>
               </ul>
            ))}
  
        </div>
    )
}

export default NavBar;