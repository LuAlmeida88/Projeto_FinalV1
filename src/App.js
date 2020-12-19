
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';



import Rodape from './componentes/Rodape';
import Menu from './componentes/Menu';
import Inicio from './componentes/Home/Inicio';
import Lojas from './componentes/Lojas/Lojas';
import Contato from './componentes/Contantos/Contato';
import Produtos from './componentes/Produtos/Produtos';



function App() {
  return (
    <BrowserRouter>
      <div className='App'>

        <Menu />

        <Route path='/'  exact component={Inicio} /> 
        <Route path='/Lojas' component={Lojas} />
        <Route path='/Produtos' component={Produtos} />       
        
        <Route path='/Contato' component={Contato} />  

        <Rodape />
      </div>
    </BrowserRouter>
  );
}

export default App;
