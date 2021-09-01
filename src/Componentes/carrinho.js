import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Services/Context/CartContext';
import { ProdutosContext } from '../Services/Context/ProdutoContext';
import './carrinho.css'
function Carrinho() {
  const { ProdutosCart, getProdutos  } = React.useContext(CartContext)

  const [Data, setData] = useState([])
  useEffect(() => {
      const i = getProdutos()
      setData(i)
  }, [ProdutosCart])
  return (<>
    {ProdutosCart.length > 0 && <div className='cart-container'>


    </div>}
  </>
  )
}

export default Carrinho;