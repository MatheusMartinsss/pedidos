import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Services/Context/CartContext';
import { ProdutosContext } from '../Services/Context/ProdutoContext';
import './carrinho.css'
function Carrinho() {
  const { ProdutosCart, getProdutos, getTotalCart } = React.useContext(CartContext)

  const [Data, setData] = useState([])
  const [TotalCart, setTotalCart] = useState(0)
  useEffect( async () => {
    const resultPrdotuos = await getProdutos()
    setData(resultPrdotuos)
  }, [ProdutosCart])

  useEffect( async () => {
    const resultTotal = await getTotalCart()
    console.log(resultTotal)
    setTotalCart(resultTotal)
  }, [Data])
  return (<>
    {ProdutosCart.length > 0 && <div className='cart-container'>

      <text>{TotalCart}</text>

    </div>}
  </>
  )
}

export default Carrinho;