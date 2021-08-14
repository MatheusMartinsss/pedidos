import Header from './Componentes/header'
import Produtos from './Componentes/produtos'
import Navbar from './Componentes/navbar'
import './App.css';

const Categorias = [{
  Nome: 'Açai no copo 290ml',
  Cod: 0
}, {
  Nome: 'Açai no copo 300ml',
  Cod: 1,
}, {
  Nome: 'Açai pote 500ml',
  Cod: 2,
}, {
  Nome: 'Barca de açai',
  Cod: 3
}, {
  Nome: 'Pote de Sorvete 500ml',
  Cod: 4,
}, {
  Nome: 'Pote de sorvete 1lt',
  Cod: 5
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
},]

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar Categorias={Categorias} />
      <Produtos Categorias={Categorias} Prods={Prods} />

    </div>
  );
}

export default App;
