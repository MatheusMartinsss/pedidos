import React, { useEffect, useState } from 'react';
import Header from './Componentes/header'
import Produtos from './Componentes/produtos'
import Navbar from './Componentes/navbar'
import './App.css';

const Categorias = [{
  Nome: 'Açai no copo 290ml',
  Cod: 0,
  Img: 'https://osorvetao.com.br/wp-content/uploads/2020/11/Sorvetao_Aplicativo_Ac%CC%A7ai_Copo.jpg',
}, {
  Nome: 'Açai no copo 300ml',
  Cod: 1,
  Img: 'https://hiper-gestao.s3.amazonaws.com/684ff2c2-86c5-4c92-ab46-cf090431922d/imagem-de-produto/09211c20-2025-42eb-8947-b67591f1f5f5/600.jpeg',
}, {
  Nome: 'Açai pote 500ml',
  Cod: 2,
  Img: 'https://osorvetao.com.br/wp-content/uploads/2020/11/Sorvetao_Aplicativo_Ac%CC%A7ai_Copo.jpg',
}, {
  Nome: 'Barca de açai',
  Cod: 3,
  Img: 'https://osorvetao.com.br/wp-content/uploads/2020/11/Sorvetao_Aplicativo_Ac%CC%A7ai_Copo.jpg',
}, {
  Nome: 'Pote de Sorvete 500ml',
  Cod: 4,
  Img: 'https://osorvetao.com.br/wp-content/uploads/2020/11/Sorvetao_Aplicativo_Ac%CC%A7ai_Copo.jpg',
}, {
  Nome: 'Pote de sorvete 1lt',
  Cod: 5,
  Img: 'https://osorvetao.com.br/wp-content/uploads/2020/11/Sorvetao_Aplicativo_Ac%CC%A7ai_Copo.jpg',
}, {
  Nome: 'Pote de sorvete 1lt',
  Cod: 6,
  Img: 'https://osorvetao.com.br/wp-content/uploads/2020/11/Sorvetao_Aplicativo_Ac%CC%A7ai_Copo.jpg',
}, {
  Nome: 'Pote de sorvete 1lt',
  Cod: 7,
  Img: 'https://osorvetao.com.br/wp-content/uploads/2020/11/Sorvetao_Aplicativo_Ac%CC%A7ai_Copo.jpg',
}, {
  Nome: 'Pote de sorvete 1lt',
  Cod: 8,
  Img: 'https://osorvetao.com.br/wp-content/uploads/2020/11/Sorvetao_Aplicativo_Ac%CC%A7ai_Copo.jpg',
}, {
  Nome: 'Pote de sorvete 1lt',
  Cod: 9,
  Img: 'https://osorvetao.com.br/wp-content/uploads/2020/11/Sorvetao_Aplicativo_Ac%CC%A7ai_Copo.jpg',
}];

const Prods = [{
  Nome: 'Açai no Copo 290ml',
  Descricao: 'Acai com chocoball e confete ',
  Categoria: 0,
  Preco: 10.00
}, {
  Nome: 'Açai no Copo 290ml',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 0,
  Preco: 10.00
}, {
  Nome: 'Açai no Copo 290ml',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 0,
  Preco: 10.00
}, {
  Nome: 'Açai no Copo 300ml',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 1,
  Preco: 15.00
}, {
  Nome: 'Açai no Copo 290ml',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 0,
  Preco: 10.00
}, {
  Nome: 'Açai no Copo 290ml',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 0,
  Preco: 10.00
}, {
  Nome: 'Açai no Copo 290ml',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 0,
  Preco: 10.00
}, {
  Nome: 'Açai no Copo 290ml',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 0,
  Preco: 10.00
}, {
  Nome: 'Açai no Copo 290ml',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 0,
  Preco: 10.00
}, {
  Nome: 'Açai no Copo 300ml',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 1,
  Preco: 15.00
}, {
  Nome: 'Açai no pote 500ML',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 2,
  Preco: 20.00
}, {
  Nome: 'Açai no pote 500ML',
  Descricao: 'Acai com Confete',
  Categoria: 2,
  Preco: 20.00
}, {
  Nome: 'Barca de Acaiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 3,
  Preco: 10.00
}, {
  Nome: 'Açai no Copo 290ml',
  Descricao: 'Acai com chocoball e confeteaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  Categoria: 3,
  Preco: 10.00
},
{
  Nome: 'Açai no Copo 290ml',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 4,
  Preco: 10.00
}, {
  Nome: 'Açai no Copo 290ml',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 4,
  Preco: 10.00
}, {
  Nome: 'Açai no Copo 300ml',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 4,
  Preco: 15.00
}, {
  Nome: 'Açai no pote 500ML',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 4,
  Preco: 20.00
}, {
  Nome: 'Açai no pote 500ML',
  Descricao: 'Acai com Confete',
  Categoria: 5,
  Preco: 20.00
}, {
  Nome: 'Barca de Acaiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  Descricao: 'Acai com chocoball e confete',
  Categoria: 5,
  Preco: 10.00
}, {
  Nome: 'Açai no Copo 290ml',
  Descricao: 'Acai com chocoball e confeteaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  Categoria: 5,
  Preco: 10.00
}]

function App() {
  const [scrollTrue, setScroll] = useState(false)

  useEffect(
    function Scroll() {
      if (window.scrollY > 10) {
        setScroll(true)
      } else {
        setScroll(false)
      }
      window.addEventListener('scroll', Scroll)
      
    
    }, [])
 
  return (
    <div className="App">
      <Header />
      <Navbar position={scrollTrue} Categorias={Categorias} />
      <Produtos Categorias={Categorias} Prods={Prods} />

    </div>
  );
}

export default App;
