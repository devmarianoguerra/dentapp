import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/index.js';

import Header from './components/Header'
import LoginLogo from './components/LoginLogo';
import LoadingSpinner from './components/LoadingSpinner';


function App(props) {

  return (
    <BrowserRouter>
      <Header backgroundColor="#00D9CC" color="#ffffff" handleButtonPress="/">
        <LoginLogo />
      </Header>

      <Switch>
        <Route path="/">
          <div>Registro</div>
          <LoadingSpinner handleShow={true}/>
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
