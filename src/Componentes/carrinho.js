import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Services/Context/CartContext';
import { ProdutosContext } from '../Services/Context/ProdutoContext';
import './carrinho.css'
function Carrinho() {
  const { ProdutosCart, getProdutos, getTotalCart, getTotalItems } = React.useContext(CartContext)

  const [Data, setData] = useState([])
  const [TotalCart, setTotalCart] = useState(0)
  const [TotalItems, setTotalItems] = useState(0);
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
  return (<>
    {ProdutosCart.length > 0 &&
      <div className='cart-container'>
        <div className='cart-container-content'>
          <text>Itens {TotalItems}</text>
          <button>Fechar Pedido</button>
          <text>Total:R${TotalCart},00</text>
        </div>
      </div>}
  </>
  )
}

export default Carrinho;