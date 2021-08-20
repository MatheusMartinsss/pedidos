import React from 'react';
import { Modal } from '@material-ui/core'

import './produto.css'

function Produto(props) {
    const Opcoes = [{
        Nome: 'Chocoball',
        ID: 0,
    }, {
        Nome: 'Confete',
        ID: 1,
    }, {
        Nome: 'Raspas de Chocolate',
        ID: 2
    }]
    const Adicionais = [{
        Nome: 'Morango',
        Valor: 'R$5,00'
    }, {
        Nome: 'Raspas de Chocolate',
        Valor: 'R$5,00'
    }, {
        Nome: 'Biz de Chocolate',
        Valor: 'R$5,00'
    }
    ]
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
                        {Opcoes.map((a) => (
                            <section className='product-options'>

                                <a>
                                    <text> {a.Nome} </text>
                                    <input type='checkbox'></input>
                                </a>

                            </section>
                        ))}
                        <h2>Adicionais</h2>
                        {Adicionais.map((e) => (
                            <section className='product-options'>
                                <a>
                                    <text> {e.Nome}</text>
                                    <input type='checkbox'></input>
                                </a>
                                <span> R$2,00 </span>
                            </section>
                        ))}
                        <textarea placeholder='Deixe uma observação aqui..'></textarea>
                        <section className='product-buttons'>
                            <button onClick={() => props.handleClick} className='btn-cancel'>Cancelar</button>
                            <button className='btn-add'>Adicionar</button>
                        </section>
                    </div>
                ))}
            </div>
        </Modal>
    </div>
}

export default Produto;