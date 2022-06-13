import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from './Utils/Menu';
import rutas from './route-config';
import configurarValidaciones from './Validaciones/validaciones';

configurarValidaciones();

function App() {

  return (
    <>
    <BrowserRouter>
    <Menu />
      <div className='container'>
        <Switch>
           {rutas.map(ruta=>
           <Route key={ruta.path} 
                  path={ruta.path} 
                  exact={ruta.exact}>
            <ruta.componente />
           </Route>)}
        </Switch>
      </div>
      <footer>Esto es un pie de pagina</footer>
    </BrowserRouter>
    </>
  );
}

export default App;
