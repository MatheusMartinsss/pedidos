import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Services/Context/CartContext';
import { ProdutosContext } from '../Services/Context/ProdutoContext';
import Checkout from './modalcheckout';
import './carrinho.css'
function Carrinho() {
  const { ProdutosCart, getProdutos, getTotalCart, getTotalItems } = React.useContext(CartContext)

  const [Data, setData] = useState([])
  const [TotalCart, setTotalCart] = useState(0)
  const [TotalItems, setTotalItems] = useState(0);
  const [modalCheckout, setModal] = useState(false)
  useEffect(async () => {
    const resultPrdotuos = await getProdutos()
    setData(resultPrdotuos)
  }, [ProdutosCart])

  useEffect(async () => {
    const resultTotal = await getTotalCart()
    setTotalCart(resultTotal)
    const resultTotalItems = await getTotalItems()
    setTotalItems(resultTotalItems)
  }, [Data])
  const onHandleClick = () =>{
    setModal(!modalCheckout)
  }
  return (<>
    {ProdutosCart.length > 0 &&
      <div className='cart-container'>
        <div className='cart-container-content'>
          <text>Itens {TotalItems}</text>
          <button  onClick = {() => onHandleClick()}>Fechar Pedido</button> 
          <text>Total:R${TotalCart},00</text>
          {modalCheckout  && <Checkout Open = {modalCheckout} onHandleClick = {onHandleClick} Produtos = {Data} Total = {TotalCart} />}
        </div>
      </div>}
  </>
  )
}

export default Carrinho;