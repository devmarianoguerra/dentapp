import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/index.js";

import Header from "./components/Header";
import LoginLogo from "./components/LoginLogo";
// import LoadingSpinner from "./components/LoadingSpinner";
import TextFeedback from "./components/TextFeedback";

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
          <TextFeedback status="success" text="Acabamos de enviarte un mail. Haz click en el enlace para reestablecer tu contraseña."/>
          {/* <LoadingSpinner show /> */}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
