import React, { useEffect, useState } from 'react';
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
    const maxAdicionais = 2;
    const [checked, setChecked] = useState([])
    const [adicionaisChecked, setAdiocinaisChecked] = useState([])
    const [checkCount, setCheckedCount] = useState(0)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        somaTotal()
    },[adicionaisChecked, qtdProd])

    function somaTotal() {
        let a;
        const ValorItem = parseInt(Produto.map((i) => (i.Preco)))
        console.log(ValorItem)
        const ValorAdicionas = Adicionais.filter((item) => adicionaisChecked.includes(item.ID)).reduce((a, v) => a = a + v.Valor, 0)
        console.log(ValorAdicionas)
        a = (ValorItem + ValorAdicionas) * qtdProd;
        setTotal(a)
    }
    const checkChange = (value) => {
        if (checked.indexOf(value) !== -1) {
            setChecked(checked.filter((checkBox) => checkBox !== value));
        } else {
            setChecked([...checked, value]);
        }
    };
    const checkChangeAdicionais = (value) => {
        if (adicionaisChecked.indexOf(value) !== -1) {
            setAdiocinaisChecked(adicionaisChecked.filter((checkBox) => checkBox !== value));
        } else {
            setAdiocinaisChecked([...adicionaisChecked, value]);
            
        }
        console.log(adicionaisChecked)
    };
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
                                        onChange={() => checkChange(a.ID)}
                                        checked={checked.includes(a.ID)}
                                        disabled={!checked.includes(a.ID) && checked.length > maxOptions - 1}
                                    >
                                    </input>
                                </a>
                            </section>
                        ))}
                        <h2>Adicionais</h2>
                        {Adicionais.map((e) => (
                            <section className='product-options'>
                                <a>
                                    <text> {e.Nome}</text>
                                    <input type='checkbox'
                                        value={e.ID}
                                        onChange={() => checkChangeAdicionais(e.ID)}
                                        checked={adicionaisChecked.includes(e.ID)}
                                        disabled={!adicionaisChecked.includes(e.ID) && adicionaisChecked.length > maxOptions - 1}
                                    ></input>
                                </a>
                                <a>{e.Valor}</a>
                            </section>
                        ))}
                        <textarea placeholder='Deixe uma observação aqui..'></textarea>
                        <section className='product-options'>
                            <a>
                                <text>R${item.Preco}</text>
                                <InputNumber
                                    value={qtdProd}
                                    minimalValue={1}
                                    onInputChange={(e) => setQtd(e)}
                                ></InputNumber>
                            </a>
                            <a>
                                <text>Sub total</text>
                                <text>R${total}</text>
                            </a>
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