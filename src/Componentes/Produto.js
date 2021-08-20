import React, { useState } from 'react';
import { Modal } from '@material-ui/core'
import InputNumber from './InputNumber'
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
        Valor: 5.00,
        ID: 0,
    }, {
        Nome: 'Raspas de Chocolate',
        Valor: 5.00,
        ID: 1,
    }, {
        Nome: 'Biz de Chocolate',
        Valor: 5.00,
        ID: 2,
    }
    ]
    const Produto = [props.Produto];
    const [qtdProd, setQtd] = useState(1)
    const maxOptions = 2;
    const optionChecked = []
    const adicionaisChecked = []
    const checkedCount = optionChecked.length;
    const totalAdicionais = 0.00;
    const total = 0.00;
    const subTotal = 0.00;

    function somaTotal(valor) {
        let a;
        a = valor + totalAdicionais;
        return (
            <text>{a}</text>
        )
    }
    function handleCheckedOptions(e) {
        let index;
        if (e.target.checked) {
            optionChecked.push(
                e.target.value
            )
        } else {
            index = optionChecked.indexOf(+e.target.value)
            optionChecked.splice(index, 1)
        }

        console.log(optionChecked.length)
    }
    function handleCheckedAdicionais(e, valor) {
        let index;
        if (e.target.checked) {
            adicionaisChecked.push(
                e.target.value,
            )
   
        } else {
            index = adicionaisChecked.indexOf(+e.target.value)
            adicionaisChecked.splice(index, 1)
        }
    }
    return <div className='produto-container'>
        <Modal
            open={props.Open}
            onClose={props.handleClick}
            onEscapeKeyDown={props.handleClick}
        >
            <div className='modal-container'>
                {Produto.map((item) => (
                    <div className='product-modal-card'>
                        <h1>{item.Nome}</h1>
                        <span></span>
                        <h2>Escolha até duas opções</h2>
                        {Opcoes.map((a) => (
                            <section className='product-options'>
                                <a>
                                    <text> {a.Nome} </text>
                                    <input type='checkbox'
                                        value={a.ID}
                                        onChange={(e) => handleCheckedOptions(e)}
                                        disabled={!optionChecked[a.ID] && checkedCount === maxOptions ? true : false}

                                    ></input>
                                </a>

                            </section>
                        ))}
                        <h2>Adicionais</h2>
                        {Adicionais.map((e) => (
                            <section className='product-options'>
                                <a>
                                    <text> {e.Nome}</text>
                                    <input onChange={(a) => handleCheckedAdicionais(a, e.Valor)} type='checkbox'></input>
                                </a>
                                <a>{e.Valor}</a>
                            </section>
                        ))}
                        <textarea placeholder='Deixe uma observação aqui..'></textarea>
                        <section className='product-options'>
                            <a>
                                {somaTotal(item.Preco)}
                                <InputNumber
                                    value={qtdProd}
                                    minimalValue={1}
                                    onInputChange={(e) => setQtd(e)}
                                ></InputNumber>
                            </a>
                            <text>Sub Total</text>
                        </section>
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