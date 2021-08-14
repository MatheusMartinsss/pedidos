import React from 'react';

import './navbar.css'

function NavBar(props) {
    const Categorias = props.Categorias;
    function onHandleClick(){
        
    }
    return (
        <div className = 'navbarContainer'>
            {Categorias.map(item =>(
               <ul>
                   <li onClick = {() => onHandleClick()}>{item.Nome}</li>
               </ul>
            ))}
  
        </div>
    )
}

export default NavBar;