import React, { useEffect, useState } from 'react';

import './navbar.css'

function NavBar(props) {
    const Categorias = props.Categorias;
    const Position = props.position;
    const Length = Categorias.length;
    const aWidth = window.innerWidth
    const [currentSlides, setCurrent] = useState(0);
    const [maxItens, setMax] = useState(0)
    const [currentCat, setCurrentCat] = useState(0);
    useEffect(function setSlide(){
        if(aWidth < 600){
            setMax(2)
        }else{
            setMax(10)
        }
    },[aWidth])
    console.log(maxItens)
    function onHandleClick(props){
        setCurrentCat(props) //Seta a categoria selecionada atualmente
        window.location.replace(`#${props}`) 
    }
    return (
        <div className = {Position ? 'navbarContainer navbarContainerScroll':'navbarContainer'}>
            {Categorias.map(item =>(
               <ul>
                   <li className = {item.Cod === currentCat ? 'navbarContainer liSelect' : 'navbarContainer liNormal'}  //Aqui eu comparo a const currentCat, caso seja igual a categoria que vai ser exibida, eu uso a classe liSelect que tem a border-bottom, caso não seja uso a Li normal
                   onClick = {() => onHandleClick(item.Cod) //Aqui eu pego o ID da categoria que foi clicada para setar ela como selecionada
                   }>{item.Nome}</li>
               </ul>
            ))}
  
        </div>
    )
}

export default NavBar;