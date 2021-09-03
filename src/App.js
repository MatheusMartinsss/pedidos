import React, { useEffect, useState } from 'react';
import Header from './Componentes/header'
import Navbar from './Componentes/navbar'
import Produtos from './Componentes/produtos';
import './App.css';
import { ProdutosContext } from './Services/Context/ProdutoContext';
import CartProvider from './Services/Context/CartContext';
import Carrinho from './Componentes/carrinho'


function App() {
  const { ProdutosData, Categorias } = React.useContext(ProdutosContext)
  return (
    <div className="App">
      <Header />
      <Navbar Categorias={Categorias} />
      <CartProvider>
        <Produtos Categorias={Categorias} Prods={ProdutosData} />
        <Carrinho />
      </CartProvider>
    </div>
  );
}

export default App;
