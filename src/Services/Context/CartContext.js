import { useState } from "react"
import React from 'react'
import { ProdutosContext } from "./ProdutoContext"
import SomarTotal from '../../Functions/somarProduto';
export const CartContext = React.createContext(null)




const CartProvider = ({ children }) => {
    const [ProdutosCart, setProdutosCart] = useState(null || [])
    const { ProdutosData, AdicionaisData, OpcoesData, getProduto, getProdutoAdicionaisChecked, getProdutoOpcoesChecked } = React.useContext(ProdutosContext)
    const [Produto, setProduto] = useState(null || [])
    /*
        AddProdutoCart: Salva todos os ID necessário para carregar o produto, opções e adicionais novamente, e tambem salva a quantidade selecionada.     
    */
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
    /* 
        GetProdutos: Carrega todos os Produtos, Opcoes e Adicionais salvo na ProdutosCart, com o valores atualizados, para evitar que
        caso ocorra alguma alteração no valor do produto enquanto o usuario ainda está selecionando os produtos dele, no carrinho o produto
        já ira aparecer com o valor atualizado. Retorna um objeto com todas informações necessaria para manipular no carrinho;
    */
    const getProdutos = () => {
        const merged = ProdutosCart.map((item) => ({
            ...ProdutosData.find((o) => (o.ID === item.ID)), // Carrega todas informações do Produto qual o ID está salvo na produtos cart
            Adicionais: getProdutoAdicionaisChecked({ groupID: item.idAdicionaisGroup, idx: item.idAdicionais }), // pega todos Adicionais qual o ID esteja no ProdutosCart
            Opcoes: getProdutoOpcoesChecked({ groupID: item.idAdicionaisGroup, idx: item.idOpcoes }),// Pega todas Opções qual o ID esteja na ProdutosCart
            ...item
        }));
        console.log(merged)
        setProduto(merged)
        return merged;

    }

    /*
        getTotalCart: Primeiro soma o valor de todos Adicionais no Produto, e depois soma;

    */
    const getTotalCart = () => {
        const Sum = Produto.map((item) => ({
            ValorAdicionais: item.Adicionais.reduce((a, b) => (a + b.Valor), 0),
            Qtd: item.Qtd,
            Valor: item.Preco
        })).reduce((a, b) => a + (b.ValorAdicionais + b.Valor) * b.Qtd, 0)
        console.log('total', Sum)
        return Sum;
    }
    const getTotalItems = () =>{
        const Sum = Produto.reduce((a, item) => a + item.Qtd,0)
        return Sum;
    }
    return (
        <CartContext.Provider value={{ ProdutosCart, getProdutos, addProdutoCart, getTotalCart, getTotalItems }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;