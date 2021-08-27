import { useState } from "react"
import React from 'react'

export const ProdutosContext = React.createContext(null)

const Prods = [{
  ID: 0,
  Nome: 'Açai no Copo 290ml',
  Descricao: 'Acai com chocoball e confete ',
  Categoria: 0,
  Preco: 10.00,
  AdicionaisGroup: 0,
  OpcoesGroup: 0,
}, {
  ID: 1,
  Nome: 'Açai no Copo 290ml',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 0,
  Preco: 10.00,
  AdicionaisGroup: 0,
  OpcoesGroup: 0,
}, {
  ID: 2,
  Nome: 'Açai no Copo 290ml',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 0,
  Preco: 10.00,
  AdicionaisGroup: 0,
  OpcoesGroup: 0,
}, {
  ID: 3,
  Nome: 'Açai no Copo 300ml',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 1,
  Preco: 15.00,
  AdicionaisGroup: 0,
  OpcoesGroup: 0,
}, {
  ID: 4,
  Nome: 'Açai no Copo 290ml',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 0,
  Preco: 10.00,
  AdicionaisGroup: 0,
  OpcoesGroup: 0,
}, {
  ID: 5,
  Nome: 'Açai no Copo 290ml',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 0,
  Preco: 10.00,
  AdicionaisGroup: 0,
  OpcoesGroup: 0,
}, {
  ID: 6,
  Nome: 'Açai no Copo 290ml',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 0,
  Preco: 10.00,
  AdicionaisGroup: 0,
  OpcoesGroup: 0,
}, {
  ID: 7,
  Nome: 'Açai no Copo 290ml',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 0,
  Preco: 10.00,
  AdicionaisGroup: 0,
  OpcoesGroup: 0,
}, {
  ID: 8,
  Nome: 'Açai no Copo 290ml',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 0,
  Preco: 10.00,
  AdicionaisGroup: 0,
  OpcoesGroup: 0,
}, {
  ID: 9,
  Nome: 'Açai no Copo 300ml',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 1,
  Preco: 15.00,
  AdicionaisGroup: 0,
  OpcoesGroup: 0,
}, {
  ID: 10,
  Nome: 'Açai no pote 500ML',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 2,
  Preco: 20.00,
  AdicionaisGroup: 0,
  OpcoesGroup: 0,
}, {
  ID: 11,
  Nome: 'Açai no pote 500ML',
  Descricao: 'Acai com Confete',
  Categoria: 2,
  Preco: 20.00,
  AdicionaisGroup: 0,
  OpcoesGroup: 0,
}, {
  ID: 12,
  Nome: 'Barca de Acaiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 3,
  Preco: 10.00,
  AdicionaisGroup: 0,
  OpcoesGroup: 0,
}, {
  ID: 13,
  Nome: 'Açai no Copo 290ml',
  Descricao: 'Acai com chocoball e confeteaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  Categoria: 3,
  Preco: 10.00,
  AdicionaisGroup: 0,
  OpcoesGroup: 0,
},
{
  ID: 14,
  Nome: 'Açai no Copo 290ml',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 4,
  Preco: 10.00,
  AdicionaisGroup: 0,
  OpcoesGroup: 0,
}, {
  ID: 15,
  Nome: 'Açai no Copo 290ml',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 4,
  Preco: 10.00,
  AdicionaisGroup: 0,
  OpcoesGroup: 0,
}, {
  ID: 16,
  Nome: 'Açai no Copo 300ml',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 4,
  Preco: 15.00,
  AdicionaisGroup: 0,
  OpcoesGroup: 0,
}, {
  ID: 17,
  Nome: 'Açai no pote 500ML',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 4,
  Preco: 20.00,
  AdicionaisGroup: 0,
  OpcoesGroup: 0,
}, {
  ID: 18,
  Nome: 'Açai no pote 500ML',
  Descricao: 'Acai com Confete',
  Categoria: 5,
  Preco: 20.00,
  AdicionaisGroup: 0,
  OpcoesGroup: 0,
}, {
  ID: 19,
  Nome: 'Barca de Acaiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 5,
  Preco: 10.00,
  AdicionaisGroup: 0,
  OpcoesGroup: 0,
}, {
  ID: 20,
  Nome: 'Açai no Copo 290ml',
  Descricao: 'Acai com chocoball e confeteaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  Categoria: 5,
  Preco: 10.00,
  AdicionaisGroup: 0,
  OpcoesGroup: 0,
}]

const Cat = [{
  Nome: 'Açai no copo 290ml',
  Cod: 0,
}, {
  Nome: 'Açai no copo 300ml',
  Cod: 1,
}, {
  Nome: 'Açai pote 500ml',
  Cod: 2,
}, {
  Nome: 'Barca de açai',
  Cod: 3,
}, {
  Nome: 'Pote de Sorvete 500ml',
  Cod: 4,
}, {
  Nome: 'Pote de sorvete 1lt',
  Cod: 5,
}, {
  Nome: 'Pote de sorvete 1lt',
  Cod: 6,
}, {
  Nome: 'Pote de sorvete 1lt',
  Cod: 7,
}, {
  Nome: 'Pote de sorvete 1lt',
  Cod: 8,
}, {
  Nome: 'Pote de sorvete 1lt',
  Cod: 9,
}];

const Opcoes = [{
  ID: 0,
  Nome: 'Opções açai',
  MaxOpcoes: 2,
  Itens: [{
    Nome: 'Chocoball',
    ID: 0,
  }, {
    Nome: 'Confete',
    ID: 1,
  }, {
    Nome: 'Raspas de Chocolate',
    ID: 2
  }]
}]
const Adicionais = [{
  ID: 0,
  Nome: 'Adiocinais Açai',
  MaxOpcoes: 3,
  Itens: [{
    Nome: 'Morango',
    Valor: 5.00,
    ID: 0,
  }, {
    Nome: 'Raspas de Chocolate',
    Valor: 5.00,
    ID: 1,
  }, {
    Nome: 'Biz de Chocolate',
    Valor: 5.00,
    ID: 2,
  }]
}]

const ProdutosProvider = ({ children }) => {
  const [ProdutosData, setProdutos] = useState(Prods)
  const [Categorias, setCategorias] = useState(Cat)
  const [AdicionaisData, setAdicionais] = useState(Adicionais)
  const [OpcoesData, setOpcoes] = useState(Opcoes)

  
  const getProdutoAdicionais  = (id) =>{
    console.log(id)
    const adicionais = AdicionaisData.filter((item) => item.ID === id)
    return adicionais;
  }
  const getProdutoOpcoes = (id) =>{
    const opcoes = OpcoesData.filter((item) => item.ID === id)
    return opcoes;
  }
  return (
    <ProdutosContext.Provider value={{ ProdutosData, Categorias, AdicionaisData, OpcoesData, getProdutoAdicionais, getProdutoOpcoes}}>
      {children}
    </ProdutosContext.Provider>
  )
}
export default ProdutosProvider;