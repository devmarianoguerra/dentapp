import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'
import LoginLogo from './components/LoginLogo';


function App(props) {

  return (
    <BrowserRouter>
      <Header backgroundColor="#00D9CC" color="#ffffff" handleButtonPress="/">
        <LoginLogo />
      </Header>

      <Switch>
        <Route path="/">
          <div>Registro</div>
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
