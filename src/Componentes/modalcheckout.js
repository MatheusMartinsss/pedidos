import { Modal } from '@material-ui/core';
import React, { useState } from 'react';
import { CartContext } from '../Services/Context/CartContext';
import './modalcheckout.css'
// import { Container } from './styles';
import DeliveryModal from './modaldelivery';

function Checkout({ Open, onHandleClick, Produtos, Total, taxValue, SubTotal }) {
    const [delivery, setDelivery] = useState(false)
    const { updateTaxValue } = React.useContext(CartContext)
    const [checkBoxMarked, setCheckboxMarked] = useState()
    const [openDelivery, setOpenDelivery] = useState(false)
    const setModal = () => {
        setOpenDelivery(!openDelivery)
        setCheckboxMarked('entregar')
    }
    const checkBoxChecked = (value) => {
        setCheckboxMarked(value)
        if (value == 'retirar') {
            updateTaxValue(0.00)
        }
        if(value == 'entregar'){
            setModal()
        }
    }
    return (
        <Modal
            open={Open}
            onClose={onHandleClick}
        >
            <div className='modal-checkout-container'>
                <header>
                    <text>Carrinho</text>
                </header>
                <body>
                    <div className='checkout-body-container'>
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
                                <div >
                                    <section className='checkout-section-flex'>
                                        <h1>{item.Qtd}x {item.Nome}</h1>
                                        <text>R${item.Preco},00</text>
                                    </section>
                                    <section className='checkout-section-flex'>
                                        {item.Opcoes.map((a) => (
                                            <text>{a.Nome}</text>
                                        ))}
                                    </section>
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
                                    <hr />
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
                </body>
                {openDelivery && <DeliveryModal open={openDelivery} setModal={setModal} />}
            </div>

        </Modal>

    );
}

export default Checkout;