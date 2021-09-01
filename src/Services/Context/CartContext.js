import { useState } from "react"
import React from 'react'
import { ProdutosContext } from "./ProdutoContext"
export const CartContext = React.createContext(null)



const CartProvider = ({ children }) => {
    const [ProdutosCart, setProdutosCart] = useState(null || [])
    const { ProdutosData, AdicionaisData, OpcoesData, getProduto, getProdutoAdicionaisChecked } = React.useContext(ProdutosContext)
    const [Produto, setProduto] = useState(null || [])

    const addProdutoCart = (props) => {
        const newData = {
            ID: props.idProduto,
            idAdicionais: props.idAdicionais,
            idOpcoes: props.idOpcoes,
            idAdicionaisGroup: props.adicionaisGroup,
            idOpcoesGroup: props.opcoesGroup,
            Qtd: props.qtd,
            obs: props.obs,

        }
        setProdutosCart([...ProdutosCart, newData])
    }
    const getProdutos = () => {
        console.log('adds', AdicionaisGroup)
        const merged = ProdutosCart.map((item) => ({
            ...ProdutosData.find((o) => (o.ID === item.ID)),
            ...item
        }));
        console.log(merged)
        return merged;
    }
    return (
        <CartContext.Provider value={{ ProdutosCart, getProdutos, addProdutoCart }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;