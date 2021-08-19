import React from 'react';
import { Modal } from '@material-ui/core'

import './produto.css'

function Produto(props) {
    const Produto = [props.Produto];
    return <div className='produto-container'>
        <Modal
            open={props.Open}
            onClose={props.handleClick}
            onEscapeKeyDown={props.handleClick}

        >
            <div className='modal-container'>
                {Produto.map((item) => (
                    <div>
                        <h1>{item.Nome}</h1>
                        <span></span>
                        <h2>Escolha até duas opções</h2>
                        <section className='product-options'>
                            <a>
                                <label> chocoball </label>
                                <input type='radio'></input>
                            </a>
                            <a>
                                <label> chocoball </label>
                                <input type='radio'></input>
                            </a>
                            <a>
                                <label> chocoball </label>
                                <input type='radio'></input>
                            </a>
                        </section>
                        <h2>Adicionais</h2>
                        <section className='product-options'>
                            <a>
                                <label> chocoball </label>
                                <input type='radio'></input>
                            </a>
                            <a>
                                <label> chocoball </label>
                                <input type='radio'></input>
                            </a>
                            <a>
                                <label> chocoball </label>
                                <input type='radio'></input>
                            </a>
                        </section>
                        <textarea placeholder='Deixe uma observação aqui..'></textarea>
                    </div>
                ))}
            </div>
        </Modal>
    </div>
}

export default Produto;