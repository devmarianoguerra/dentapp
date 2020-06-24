import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/index.js";

import Header from "./components/Header";
import LoginLogo from "./components/LoginLogo";
import LoadingSpinner from "./components/LoadingSpinner";
import IconButton from "./components/iconButton";

function App(props) {
  const primaryColor = "#00D9CC";
  const secundaryColor = "#ffffff";
  return (
    <BrowserRouter>
      <Header
        backgroundColor={primaryColor}
        iconAndTitleColor={secundaryColor}
        routeToNavigate="/"
      >
        <LoginLogo />
        <IconButton />
      </Header>

      <Switch>
        <Route path="/">
          <div>Registro</div>
          <LoadingSpinner show />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
