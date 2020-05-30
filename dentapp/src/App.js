import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import logo from './logo.svg';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

function App() {

  return (
    <BrowserRouter>

      {/* backgroundColor= Dark o Light */}
      <Header backgroundColor="Light" handleButtonPress='/About'>
        {/* Esto es el props.children */}
        <div>Prueba del subMenu </div>
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
