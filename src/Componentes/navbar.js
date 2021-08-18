import React, { useEffect, useState } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import './navbar.css'

function NavBar(props) {
    const Categorias = props.Categorias;
    const Position = props.position;
    const aWidth = window.innerWidth;
    const View = []
    const [currentSlides, setCurrent] = useState(0);
    const [maxItens, setMax] = useState(0)
    const [currentCat, setCurrentCat] = useState(0);
    useEffect(function setSlide() {
        if (aWidth < 600) {
            setMax(2)
        } else {
            setMax(10)
        }
    }, [aWidth])
    function onHandleClick(props) {
        setCurrentCat(props) //Seta a categoria selecionada atualmente
        document.getElementById(props).scrollIntoView();
    }
    if (maxItens > 2) {
        Categorias.map(item => {
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

        Categorias.slice(currentCat, currentCat + 2).map((item) => {
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
            {currentCat > 0 && maxItens < 3 &&
                <button className='backButton' onClick={() => onHandleClick(currentCat - 1)}>
                    <ChevronLeftIcon></ChevronLeftIcon>
                </button>


            }
            {View}
        </div>
    )
}

export default NavBar;

// 