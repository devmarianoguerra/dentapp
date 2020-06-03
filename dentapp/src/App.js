import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/index.js";

import Header from "./components/Header";
import LoginLogo from "./components/LoginLogo";
import LoadingSpinner from "./components/LoadingSpinner";

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
      </Header>

      <Switch>
        <Route path="/">
          <div>Registro</div>
          <LoadingSpinner handleShows />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
