import { useState } from "react"
import React from 'react'
export const CartContext = React.createContext(null)



const CartProvider = ({children}) =>{
    const [ProdutosCart, setProdutosCart] = useState([])

    const addProdutoCart = (props) =>{
        const newProd = {
            idProduto: props.id,
            idAdicionais: props.idAdicionais,
            qtdProduto: props.qtd
        }
        setProdutosCart([...ProdutosCart, newProd])
    }
    return (
        <CartContext.Provider value = {{ProdutosCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;