import { Modal } from '@material-ui/core';
import React, { useState } from 'react';
import './modalcheckout.css'
// import { Container } from './styles';

function Checkout({ Open, onHandleClick, Produtos, Total }) {
    const [delivery, setDelivery] = useState(false)
    const Etapas = [{
        id: 1,
        Nome: 'Confirmar'
    }, {
        id: 2,
        Nome: 'Dados'
    }, {
        id: 3,
        Nome: 'Pagamento'
    }]
    const [etapaAtual, setEtapa] = useState(1)
    console.log(delivery)
    const DeliveryCheck = () => {
        setDelivery(!delivery)
        console.log(etapaAtual)
    }
    const nextStep = () => {
        if (etapaAtual == 1) {
            setEtapa(2)
        }
    }
    let Confirmar = (<div className='checkout-body-item-list'>
        <h2>Oba... estamos quase lá para fechar seu pedido, primeiro preciso que você confirme se esses são os itens que você precisa..</h2>
        <div className='checkout-item-list'>
            {Produtos.map((item, key) => (
                <div key={key} className='checkout-item-card'>
                    <section style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h1><span>{item.Qtd}x </span>
                            {item.Nome}</h1>
                        <h2>R${item.Preco},00</h2>
                    </section>
                    <section style={{ padding: '5px', display: 'flex', flexDirection: 'column' }}>
                        {item.Opcoes.map((e) => (
                            <text>{e.Nome}</text>
                        ))}
                        {item.Adicionais.map((i) => (
                            <section style={{ justifyContent: "space-between", display: 'flex' }}>
                                <text>{i.Nome}</text>
                                <text>R${i.Valor},00</text>
                            </section>
                        ))}
                    </section>
                    <section style={{ display: 'flex', justifyContent: "space-between" }}>
                        <text>Total</text>
                        <text>R${item.Total},00</text>
                    </section>
                </div>
            ))}
        </div>
        <section style={{ display: 'flex', justifyContent: "space-between", padding: '10px' }}>
            <text>Total</text>
            <text>R${Total},00</text>
        </section>
        <section style={{ display: 'flex', justifyContent: 'end' }}>
            <button onClick={() => nextStep()}>Confirmar</button>
        </section>
    </div>)
    let Dados = (<div className='checkout-dados-body'>
        <h1>Quase la.. agora preciso que você confirme os seus dados...</h1>
        <form className='checkout-dados-form'>
            <div className = 'checkout-flex-form'>
                <span> 
                    <label htmlFor='nome'>Nome</label>
                    <input style = {{width: '300px'}} id='nome' type='text' placeholder='Digite seu nome aqui'></input>
                </span>
                <span> 
                    <label>Telefone</label>
                    <input style = {{width: '200px'}} type='text' placeholder='Digite seu telefone aqui..'></input>
                </span>
            </div>
            <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
                <span>
                    <input type='checkbox'></input>
                    <text>Retirar</text>
                </span>
                <span>
                    <input type='checkbox'></input>
                    <text>Entrega</text>
                </span>
            </div>
            <div className = 'checkout-flex-form'>
                <span>
                    <label>Endereço</label>
                    <input style = {{width: '300px'}} type='text' placeholder='Digite seu endereço aqui...'></input>
                </span>
                <span>
                    <label>Numero</label>
                    <input type='number' placeholder='Numero'></input>
                </span>
            </div>
            <div className = 'checkout-flex-form'>
                <span>
                    <label>Setor</label>
                    <input type='text' placeholder='Digite o setor aqui'></input>
                </span>
                <span>
                    <label>Complemento</label>
                    <input type='text'></input>
                </span>        
            </div>
        </form>
    </div>)
    let Pagamento = (<div>
        <h1>Oba... estamos quase lá para fechar seu pedido, primeiro preciso que você confirme se esses são os itens que você precisa..</h1>
    </div>)
    return (
        <Modal
            open={Open}
            onClose={onHandleClick}
        >
            <div className='modal-checkout-container'>
                <div className='navbar-checkout'>
                    {Etapas.map((item) => (
                        <text className={etapaAtual == item.id ? 'navbar-etapa navbar-etapa-select' : 'navbar-etapa'}>
                            <span >{item.id}</span>
                            {item.Nome}
                        </text>
                    ))}
                </div>
                <hr />
                <div className='checkout-body'>
                    {etapaAtual === 1 && Confirmar}
                    {etapaAtual === 2 && Dados}
                    {etapaAtual === 3 && Pagamento}
                </div>
            </div>
        </Modal>

    );
}

export default Checkout;