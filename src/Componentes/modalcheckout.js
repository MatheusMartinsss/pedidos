import { Modal } from '@material-ui/core';
import React, { useState } from 'react';
import './modalcheckout.css'
// import { Container } from './styles';

function Checkout({ Open, onHandleClick, Produtos }) {
    const [delivery, setDelivery] = useState(false)

    console.log(delivery)
    const DeliveryCheck = () =>{
        setDelivery(!delivery)
    }
    return (
        <>
        <Modal
            open={Open}
            onClose={onHandleClick}
            
        >
            <div className='modal-checkout-container'>
                <div className='modal-checkout-header'>
                </div>
                <hr className='divider' />
                <div className='checkout-body'>
                    <h1 className='checkout-title'><span className='circle-title'>1</span> Entrega</h1>
                    <div className='item-resume'>
                        <a>
                            <label>Retirar no Local</label>
                            <input onChange = {() => DeliveryCheck()} checked = {!delivery} type='checkbox'></input>
                        </a>
                        <a>
                            <label>Entrega</label>
                            <input onChange = {() => DeliveryCheck()} checked = {delivery} type='checkbox'></input>
                        </a>
                        {delivery && <form> 
                            <h1> Dados para Entrega </h1>
                            <a style = {{justifyContent: 'flex-start', gap: '10px'}}>
                                <input style = {{width:'70%'}} type = 'text' placeholder = 'Endereço'></input>
                                <input style = {{width: '75px'}} type = 'number' placeholder = 'Numero'></input>
                            </a >  
                            <a style = {{justifyContent: 'flex-start', gap: '10px'}}> 
                                <input type = 'text' placeholder = 'Complemento'></input>
                                <input type = 'text' placeholder = 'Bairro'></input>
                             </a>     
                        </form>}
                    </div>
                    <h1 className='checkout-title'><span className='circle-title'>2</span> Forma de Pagamento</h1>
                    <h1 className='checkout-title'><span className='circle-title'>3</span> Resumo do Pedido</h1>
                    <div className='checkout-pedido-resume'>
                        {Produtos.map((item, index) => (
                            <div className='item-resume'>
                                <div className='ckeckout-item-card' key={index}>
                                    <h1>{item.Nome}</h1>

                                    <h1>Opções</h1>
                                    {item.Opcoes.map((i) => (
                                        <a>
                                            <text>{i.Nome}</text>
                                        </a>

                                    ))}
                                    <h1> Adicionais </h1>
                                    {item.Adicionais && item.Adicionais.map((e) => (
                                        <a>
                                            <text>{e.Nome}</text>
                                            <text>R${e.Valor},00</text>
                                        </a>
                                    ))}


                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Modal>
        </>
    );
}

export default Checkout;