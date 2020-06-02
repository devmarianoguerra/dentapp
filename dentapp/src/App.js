import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import logo from './logo.svg';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

function App() {

  return (
    <BrowserRouter>

      {/* backgroundColor="#00D9CC" color="#ffffff" color verde/blanco*/}
      {/* backgroundColor="#ffffff" color="#000000" color blanco/negro*/}

      <Header backgroundColor="#00D9CC" color="#ffffff" handleButtonPress='/About'>
        {/* Esto es el props.children */}
        <div>Insertar hijo aqui </div>
        {/* Fin del props.children */}
      </Header>


      <Switch>
        <Route path="/about">
          <div>About</div>
        </Route>
        <Route path="/topics">
          <div>Topics</div>
        </Route>
        <Route path="/">
          <div>Home</div>
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
