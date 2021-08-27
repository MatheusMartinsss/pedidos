import React, { useState } from 'react';
import  Produto from './Produto'
import './produtos.css'




function Produtos(props) {
    const Categorias = props.Categorias;
    const Prods = props.Prods;
    const [produtoSelected, setProdSelected] = useState([])
    const [modalOpen, setModal] = useState(false)
    function handleClick(props) {
        setProdSelected(props)
        setModal(!modalOpen);  
    }
    return (
        <div className='Container'>
            {Categorias.map((i) => (
                <div id={i.Cod}>
                    <h1>{i.Nome}</h1>

                    <div className='GridContainer'>
                        {Prods.filter(item => item.Categoria === i.Cod).map(item => (
                            <div onClick={() => handleClick({...item})} class='GridCard'>
                                <div class='itemInfo'>
                                    <h1>{item.Nome}</h1>
                                    <h2>{item.Descricao}</h2>
                                    <h3>{item.Preco}</h3>
                                </div>
                                <div class='CardImg'>
                                    <img class='img' alt = '' src={'https://github.com/MatheusMartinsss/pedidos/blob/master/src/Componentes/humm-sorvetes-acai-no-copo.jpg?raw=true'}></img>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>

            ))}
            {modalOpen && <Produto Data = {produtoSelected}  Open={modalOpen} handleClick = {handleClick} />}
            
        </div>

    );
}
export default Produtos;
