import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProdutosProvider from './Services/Context/ProdutoContext'

ReactDOM.render(
  <React.StrictMode>
    <ProdutosProvider>,
      <App />
    </ProdutosProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

