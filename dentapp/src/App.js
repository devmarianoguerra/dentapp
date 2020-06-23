import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/index.js";

import Header from "./components/Header";
import DesechablesIcon from './assets/DesechablesIcon.svg'

import Category from "./components/Category";

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
        {/* <LoginLogo /> */}
      </Header>

      <Switch>
        <Route path="/">
          <Category title="Desechables" bgColor="#57edf799" icon={DesechablesIcon} />
          <Category title="Estuches" bgColor="#00d9cc99" icon={DesechablesIcon} />
          <Category title="Desechables" bgColor="#57edf799" icon={DesechablesIcon} />

        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
