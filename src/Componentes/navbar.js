import React, { useEffect, useState } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

import './navbar.css'

function NavBar(props) {
    const Categorias = props.Categorias;
    const Position = props.position;
    const aWidth = window.innerWidth;
    const catLength = Categorias.length;
    const View = []
    const [currentSlides, setCurrent] = useState(1);
    const [maxItens, setMax] = useState(0)
    const [currentCat, setCurrentCat] = useState(0);
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
        Categorias.slice((currentSlides - 1) * maxItens, currentSlides * maxItens).map((item) => {
            View.push(
                <ul>

                    <li className={item.Cod === currentCat ? 'navbarContainer liSelect' : 'navbarContainer liNormal'} onClick={() => onHandleClick(item.Cod)}>
                        {item.Nome}
                    </li>
                </ul>
            )

        })
    }
    else {

        Categorias.slice((currentSlides - 1) * maxItens, currentSlides * maxItens).map((item) => {
            View.push(
                <ul>

                    <li className={item.Cod === currentCat ? 'navbarContainer liSelect' : 'navbarContainer liNormal'} onClick={() => onHandleClick(item.Cod)}>
                        {item.Nome}
                    </li>
                </ul>
            )

        })

    }

    return (
        <div className={Position ? 'navbarContainer navbarContainerScroll' : 'navbarContainer'}>

            <button className='backButton' onClick={() => {currentSlides > 1 && setCurrent(currentSlides - 1)}}>
                <ChevronLeftIcon></ChevronLeftIcon>
            </button>

            {View}

            <button className='backButton' onClick={() => {currentSlides < catLength / maxItens && setCurrent(currentSlides + 1)}}>
                <ChevronRight></ChevronRight>
            </button>

        </div>
    )
}

export default NavBar;

// 