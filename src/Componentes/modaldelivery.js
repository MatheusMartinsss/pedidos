import { Modal } from '@material-ui/core';
import React, { useState } from 'react';
import { CartContext } from '../Services/Context/CartContext';
import './modaldelivery.css'
import { useForm } from 'react-hook-form'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import { Container } from './styles';

function DeliveryModal({ open, setModal, setDeliveryAdress}) {
    const { Entrega, getCity, updateTaxValue } = React.useContext(CartContext)
    const [City, setCity] = useState(null)
    const [taxa, setTaxa] = useState(0.00)
    const [BairroSelect, setBairro] = useState('')
    const {
        register,
        handleSubmit
    } = useForm();
    const onSubmit = (data) => {
        updateTaxValue(taxa)
        setDeliveryAdress(data)
        setModal()
    };
    const onHandleChange = (target) => {
        console.log(target)
        if (target !== '') {
            const result = Entrega.filter((item) => item.ID == target)
            setCity(result)
            setBairro('')
            setTaxa(0.00)
        } else {
            setCity(null)
            setBairro('')
            setTaxa(0.00)
        }
        console.log(City)
    }
    const onHandleChangeBairro = (target) => {
        console.log(target)
        const [select] = City.map((item) => (item.Bairros.filter((e) => e.Bairro == target)))
        setTaxa(parseInt(select.map((item) => item.Valor)))
        console.log(select)
        setBairro(target)
    }
    return (
        <Modal
            open={open}
            onClose={setModal}
        >
            <div className='delivery-modal-container'>
                <ArrowBackIcon fontSize='small' onClick={() => setModal()} />
                <hr />
                <div>
                    <div className='delivery-flex-items'>
                        <label>Cidade</label>
                        <select onChange={(e) => onHandleChange(e.target.value)}  >
                            {City == null && <option defaultChecked value='' placeholder='Selecione uma Cidade' > </option>}
                            {
                                Entrega.map((item) => {
                                    return <option value={item.ID}>{item.Cidade}</option>
                                })
                            }
                        </select>

                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} hidden={City == null ? true : false}>
                        {City?.map((item) => (
                            <div>
                                <div className='delivery-flex-div'>
                                    <div className='delivery-flex-items'>
                                        <label>Logradouro</label>
                                        <input style={{ width: '250px' }} {...register('Logradouro', { required: true, maxLength: 80 })} type='text' placeholder='Digite o endereço aqui...'></input>
                                    </div>
                                    <div className='delivery-flex-items'>
                                        <label>Numero</label>
                                        <input style={{ width: '80px' }} {...register('Numero', { required: true, maxLength: 6 })} type='number' placeholder='N° Casa/Ap'></input>
                                    </div>
                                </div>
                                <div className='delivery-flex-div'>
                                    <div className='delivery-flex-items'>

                                        <label>Bairro</label>
                                        <select name='Bairro' {...register('Bairro', { required: true })} value={BairroSelect} onChange={(e) => onHandleChangeBairro(e.target.value)}>
                                            <option defaultChecked={true} aria-disabled value=''></option>
                                            {item.Bairros.map((v) => {
                                                return <option value={v.Bairro}>{v.Bairro}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className='delivery-flex-items'>
                                        <label >Complemento</label>
                                        <input {...register('Complemento', { required: false, maxLength: 25 })} type='text' placeholder='Complemento..'></input>
                                    </div>
                                </div>

                            </div>
                        ))}
                        <div style={{ gap: '5px', display: 'flex', flexDirection:'column', alignItems:'center', justifyContent: 'center' }}>
                            <label style = {{color:'red'}}>Taxa de entrega R${taxa},00</label>
                            <input type='submit' value='Confirmar'></input>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
}

export default DeliveryModal;