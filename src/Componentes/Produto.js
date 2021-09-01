import React, { useEffect, useState } from 'react';
import { Modal } from '@material-ui/core'
import InputNumber from './InputNumber'
import './produto.css'
import SomarTotal from '../Functions/somarProduto';
import { ProdutosContext } from '../Services/Context/ProdutoContext';
import { CartContext } from '../Services/Context/CartContext';


function Produto({ Data, handleClick, Open }) {
    const { getProdutoAdicionais, getProdutoOpcoes } = React.useContext(ProdutosContext)
    const {addProdutoCart} = React.useContext(CartContext)
    const [ProdutoAdicionais, setProdutoAdicionais] = useState([])
    const [ProdutoOpcoes, setProdutoOpcoes] = useState([])
    const Produto = [Data];
    const [qtdProd, setQtd] = useState(1)
    const maxOptions = 2;
    const maxAdicionais = 2;
    const [checked, setChecked] = useState([])
    const [adicionaisChecked, setAdiocinaisChecked] = useState(null || [])
    const [observacao, setObservacao] = useState('')
    const [total, setTotal] = useState(0)
    const ValorItem = parseInt(Produto.map((i) => (i.Preco)))
    const ValorAdicionas = ProdutoAdicionais.reduce((acc, item) => {
        return acc.concat(item.ItensA.filter(a => adicionaisChecked.includes(a.ID)))
    }, []).reduce((a, v) => a + v.Valor, 0); // Puxa todos os valores dos adicionais com checkbox ativo e soma.
    useEffect(() => {
        function somaTotal() {
            let a;
            a = SomarTotal(ValorItem, qtdProd, ValorAdicionas)
            setTotal(a)
        }
        somaTotal()
    }, [adicionaisChecked, qtdProd])
    useEffect(() => {
        async function loadingAdicionais() {
            const ID = parseInt(Produto.map((item) => (item.AdicionaisGroup)))
            const result = await getProdutoAdicionais(ID)
            setProdutoAdicionais(result)
        }
        async function loadingOpcoes() {
            const ID = parseInt(Produto.map((item) => (item.OpcoesGroup)))
            const result = await getProdutoOpcoes(ID)
            setProdutoOpcoes(result)
        }
        loadingAdicionais()
        loadingOpcoes()
    }, [])
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
    function addToCart(props) {
        if (checked.length > 0) {
            handleClick()
            addProdutoCart({
                idProduto: props.ID, 
                adicionaisGroup: props.adicionaisGroup, 
                opcoesGroup: props.opcoesGroup,  
                idAdicionais: adicionaisChecked, 
                idOpcoes: checked, 
                qtd: qtdProd, 
                obs: observacao
            })
        } else {
            console.log('nenhuma opção selecionada')
        }
    }
    return <div className='produto-container'>
        <Modal
            open={Open}
            onClose={handleClick}
            onEscapeKeyDown={handleClick}
        >
            <div className='modal-container'>
                {Produto.map((item) => (
                    <div className='product-modal-card'>
                        <h1>{item.Nome}</h1>
                        <section className = 'itens-section'>
                            <h2>Escolha até duas opções</h2>
                            {ProdutoOpcoes.map((a) => (a.Itens.map((p) => (
                                <section className='product-options'>
                                    <a>
                                        <text> {p.Nome} </text>
                                        <input type='checkbox'
                                            value={p.ID}
                                            onChange={() => checkChange(p.ID)}
                                            checked={checked.includes(p.ID)}
                                            disabled={!checked.includes(p.ID) && checked.length > maxOptions - 1}
                                        >
                                        </input>
                                    </a>
                                </section>
                            ))))}
                            <h2>Adicionais</h2>
                            {ProdutoAdicionais.map((e) => (e.ItensA.map((i) => (
                                <section className='product-options'>
                                    <a>
                                        <text> {i.Nome}</text>
                                        <input type='checkbox'
                                            value={i.ID}
                                            onChange={() => checkChangeAdicionais(i.ID)}
                                            checked={adicionaisChecked.includes(i.ID)}
                                            disabled={!adicionaisChecked.includes(i.ID) && adicionaisChecked.length > maxAdicionais - 1}
                                        ></input>
                                    </a>
                                    <a>{i.Valor}</a>
                                </section>
                            ))))}
                        </section>
                        <textarea value = {observacao} onChange = {(e) => setObservacao(e.target.value)}  placeholder='Deixe uma observação aqui..'></textarea>
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
                            <button onClick={() => handleClick} className='btn-cancel'>Cancelar</button>
                            <button className='btn-add' onClick={() => addToCart({ID: item.ID, adicionaisGroup: item.AdicionaisGroup, opcoesGroup: item.OpcoesGroup})}>Adicionar</button>
                        </section>

                    </div>
                ))}
            </div>
        </Modal>
    </div>
}

export default Produto;