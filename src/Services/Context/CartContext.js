import { useState } from "react"
import React from 'react'
import { ProdutosContext } from "./ProdutoContext"
import SomarTotal from '../../Functions/somarProduto';
export const CartContext = React.createContext(null)

const Cidades = [{
    ID: 0,
    Cidade: 'Ariquemes',
    Uf: 'RO',
    Bairros: [
        {
            id: 0,
            Bairro: 'Setor 6',
            Valor: 1.00
        }, {
            id: 1,
            Bairro: 'Setor 5',
            Valor: 2.00
        }, {
            id: 2,
            Bairro: 'Setor 4',
            Valor: 3.00
        }, {
            id: 3,
            Bairro: 'Setor 8',
            Valor: 4.00
        }
    ]
}, {
    ID: 1,
    Cidade: 'Ariquemes',
    Uf: 'RO',
    Bairros: [
        {
            id: 0,
            Bairro: 'Setor 10',
            Valor: 5.00
        }, {
            id: 1,
            Bairro: 'Setor 11',
            Valor: 6.00
        }, {
            id: 2,
            Bairro: 'Setor 20',
            Valor: 7.00
        }, {
            id: 3,
            Bairro: 'Setor 8',
            Valor: 8.00
        }
    ]

}]


const CartProvider = ({ children }) => {
    const [ProdutosCart, setProdutosCart] = useState(null || [])
    const { ProdutosData, AdicionaisData, OpcoesData, getProduto, getProdutoAdicionaisChecked, getProdutoOpcoesChecked } = React.useContext(ProdutosContext)
    const [Produto, setProduto] = useState(null || [])
    const [Entrega, setEntrega] = useState(Cidades)
    const [taxValue, setTaxValue] = useState(0.00)
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
            TotalAdicionais: getProdutoAdicionaisChecked({ groupID: item.idAdicionaisGroup, idx: item.idAdicionais }).reduce((a, b) => a + b.Valor, 0),
            Opcoes: getProdutoOpcoesChecked({ groupID: item.idAdicionaisGroup, idx: item.idOpcoes }),// Pega todas Opções qual o ID esteja na ProdutosCart
            ...item
        }));
        const formatedWithTotal = merged.map((item) => ({
            Total: (item.TotalAdicionais + item.Preco) * item.Qtd,
            ...item
        }))
        setProduto(formatedWithTotal)
        return formatedWithTotal;
    }

    /*
        getTotalCart: Primeiro soma o valor de todos Adicionais no Produto, e depois soma;

    */
    const getSubTotalCart = () => {
        const Sum = Produto.map((item) => ({
            ValorAdicionais: item.Adicionais.reduce((a, b) => (a + b.Valor), 0),
            Qtd: item.Qtd,
            Valor: item.Preco,
        })).reduce((a, b) => a + (b.ValorAdicionais + b.Valor) * b.Qtd, 0)
        console.log('total', Sum)
        return Sum;
    }
    const getTotalCart = () => {
        const Sum = Produto.map((item) => ({
            ValorAdicionais: item.Adicionais.reduce((a, b) => (a + b.Valor), 0),
            Qtd: item.Qtd,
            Valor: item.Preco,
            txEntrega: taxValue
        })).reduce((a, b) => a + (b.ValorAdicionais + b.Valor) * b.Qtd, 0)
        console.log('total', Sum)
        return Sum + taxValue;
    }
    const getTotalItems = () => {
        const Sum = Produto.reduce((a, item) => a + item.Qtd, 0)
        return Sum;
    }
    const getCity = ({ ID }) => {
        const result = Entrega.filter((item) => item.ID == ID)
        console.log(result)
        return result;
    }
    const updateTaxValue = (value) => {
        console.log(value)
        setTaxValue(value)
    }
    return (
        <CartContext.Provider value={{ ProdutosCart, Entrega, getProdutos, addProdutoCart, getTotalCart, getTotalItems, getCity, updateTaxValue, getSubTotalCart, taxValue }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;