import React, { useEffect, useState } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

import './navbar.css'
function NavBar(props) {
    const Categorias = props.Categorias;
    const [Position, setPosition] = useState(false);
    const aWidth = window.innerWidth;
    const catLength = Categorias.length;
    const View = []
    const [currentSlides, setCurrent] = useState(1);
    const [maxItens, setMax] = useState(0)
    const [currentCat, setCurrentCat] = useState(0);
    useEffect(
        function Scroll() {
            if (window.scrollY > 10) {
                setPosition(true)
            } else {
                setPosition(false)
            }
            window.addEventListener('scroll', Scroll)
        }, [])
    useEffect(function setSlide() {
        if (aWidth < 600) {
            setMax(2)
        } else {
            setMax(5)
        }

    }, [aWidth])
    function onHandleClick(props) {
        setCurrentCat(props) //Seta a categoria selecionada atualmente
        document.getElementById(props).scrollIntoView();
    }
    if (maxItens > 2) {
        Categorias.slice((currentSlides - 1) * maxItens, currentSlides * maxItens).map((item, key) => {
            View.push(
                <a key = {key} className={item.Cod === currentCat ? 'categoriaNormal categoriaSelecionada' : 'categoriaNormal'} onClick={() => onHandleClick(item.Cod)}>
                    {item.Nome}
                </a>
            )
        })
    }
    else {
        Categorias.slice((currentSlides - 1) * maxItens, currentSlides * maxItens).map((item, key) => {
            View.push(
                <a key = {key} className={item.Cod === currentCat ? 'categoriaNormal categoriaSelecionada' : 'categoriaNormal'} onClick={() => onHandleClick(item.Cod)}>
                    {item.Nome}
                </a>
            )
        })
    }
    return (
        <div className={Position ? 'navbarContainer navbarContainerScroll' : 'navbarContainer'}>
            <div className='categoriaLista'>
                <button className='backButton' onClick={() => { currentSlides > 1 && setCurrent(currentSlides - 1) }}>
                    <ChevronLeftIcon></ChevronLeftIcon>
                </button>
                {View}
                <button className='backButton' onClick={() => { currentSlides < catLength / maxItens && setCurrent(currentSlides + 1) }}>
                    <ChevronRight></ChevronRight>
                </button>
            </div>
        </div>
    )
}

export default NavBar;

// 