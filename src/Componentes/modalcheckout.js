import { Modal } from '@material-ui/core';
import React, { useState } from 'react';
import { CartContext } from '../Services/Context/CartContext';
import { useForm } from 'react-hook-form'
import './modalcheckout.css'
// import { Container } from './styles';
import DeliveryModal from './modaldelivery';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ClearIcon from '@material-ui/icons/Clear';

function Checkout({ Open, onHandleClick, Produtos, Total, taxValue, SubTotal }) {
    const [delivery, setDelivery] = useState([])
    const { updateTaxValue, RemoveItem } = React.useContext(CartContext)
    const [checkBoxMarked, setCheckboxMarked] = useState(null)
    const [openDelivery, setOpenDelivery] = useState(false)
    const {
        register,
        handleSubmit,
    } = useForm()
    const setModal = () => {
        setCheckboxMarked('entregar')
        setOpenDelivery(!openDelivery)
    }
    const setDeliveryAdress = (data) =>{
      setDelivery(data)
    }
    const checkBoxChecked = (value) => {
        setCheckboxMarked(value)
        if (value == 'retirar') {
            updateTaxValue(0.00)
        }
        if (value == 'entregar') {
            setModal()
        }
    }
    const DeleteItem = (item) => {
        RemoveItem(item)
    }
    const FecharPedido = (data) => {
        const {Nome, Telefone} = data;
        if (checkBoxMarked == 'retirar' || checkBoxMarked == 'entregar' && taxValue > 0) {
            console.log('Pedido Confirmado')
            const pedidoFormat = {
                ...delivery,
                taxa: taxValue,
                Nome: Nome,
                Telefone: Telefone,
                Entrega: checkBoxMarked
            }
            console.log(pedidoFormat)
        } else if (checkBoxMarked == 'entregar' && taxValue <= 0) {
            alert('Calcule a taxa de entrega')
            setModal()
        } else {
            alert('Selecione o metodo de entrega!.')
        }

    }
    return (
        <Modal
            open={Open}
            onClose={onHandleClick}
        >
            <div className='modal-checkout-container'>
                <header>
                    <ArrowBackIcon fontSize='small' onClick={() => onHandleClick()} />
                    <text>Carrinho</text>
                </header>
                <form onSubmit = {handleSubmit(FecharPedido)}>
                <body>
                    <div className='checkout-body-container'>
                        <section className='checkout-body-header'>
                            <h1>Dados</h1>
                        </section>
                        <div style={{ padding: '10px' }}>
                            <form  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <label>Nome</label>
                                <input {...register('Nome', {required:true, maxLength: 30})} type='text' placeholder='Digite seu nome..'></input>
                                <label>Telefone</label>
                                <input {...register('Telefone', {required:true})} type='tel' placeholder='Numero para contato'></input>
                            </form>
                        </div>
                        <section className='checkout-body-header'>
                            <h1>Delivery</h1>
                        </section>
                        <div style={{ padding: '10px' }}>
                            <section className='checkout-section-flex'>
                                <h2>Retirar</h2>
                                <input value='retirar' checked={checkBoxMarked == 'retirar'} onChange={(e) => checkBoxChecked(e.target.value)} type='checkbox'></input>
                            </section>
                            <section>
                                <section className='checkout-section-flex'>
                                    <h2>Entregar</h2>
                                    <input value='entregar' checked={checkBoxMarked == 'entregar'} onChange={(e) => checkBoxChecked(e.target.value)} type='checkbox'></input>
                                </section>
                                {taxValue > 0 ?
                                    <label style={{ color: 'red' }}> Taxa de entrega R${taxValue},00</label>
                                    :
                                    <label onClick={() => setModal()} style={{ color: 'red' }}>Calcular taxa de Entrega</label>
                                }
                            </section>
                        </div>
                        <section className='checkout-body-header'>
                            <h1>Resumo</h1>
                        </section>
                        <div className='checkout-body-produtos'>
                            {Produtos.map((item) => (
                                <div className='checkout-produtos-card' >
                                    <section style={{ display: 'flex', justifyContent: 'end', marginTop: '-2px' }}>
                                        <ClearIcon onClick={() => DeleteItem(item.IDCart)} fontSize='default' />
                                    </section>
                                    <section className='checkout-section-flex'>
                                        <h1>{item.Qtd}x {item.Nome}</h1>
                                        <text>R${item.Preco},00</text>
                                    </section>
                                    {item.Opcoes.map((a) => (
                                        <section className='checkout-section-flex'>
                                            <text>{a.Nome}</text>
                                        </section>
                                    ))}
                                    {item.Adicionais.map((e) => (
                                        <section className='checkout-section-flex'>
                                            <text>{e.Nome}</text>
                                            <text>R${e.Valor},00</text>
                                        </section>
                                    ))}
                                    {item.obs != '' &&
                                        <section>
                                            <text>
                                                <span style={{ color: 'black' }}>Observação:</span> <br />
                                                {item.obs}
                                            </text>
                                        </section>}
                                    <section style={{ justifyContent: 'right', display: 'flex' }}>
                                        <text>R${item.Total},00</text>
                                    </section>

                                </div>
                            ))}
                        </div>
                        <section style={{ justifyContent: 'right', display: 'flex', padding: '10px' }}>
                            <div style={{ alignItems: "center", width: '150px' }}>
                                <section className='checkout-section-flex'>
                                    <text>Sub total</text>
                                    <text>R${SubTotal},00</text>
                                </section>
                                <section className='checkout-section-flex'>
                                    <text>Entrega</text>
                                    <text>R${taxValue},00</text>
                                </section>
                                <hr></hr>
                                <section className='checkout-section-flex'>
                                    <text>Total</text>
                                    <text>R${Total},00</text>
                                </section>
                            </div>
                        </section>
                    </div>
                    <div style={{ justifyContent: 'center', display: 'flex', padding: '10px' }}>
                        <input type = 'submit' value = 'Confirmar'/>
                    </div>
                </body>
                </form>
                {openDelivery && <DeliveryModal open={openDelivery} setDeliveryAdress = {setDeliveryAdress} setModal={setModal} />}
            </div>

        </Modal>

    );
}

export default Checkout;