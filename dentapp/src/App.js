import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/index.js";

import Header from "./components/Header";
import Jeringa from "./assets/Jeringa.svg";
import ProductCard from "./components/ProductCard";

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

      </Header>

      <Switch>
        <Route path="/">
          <ProductCard onClick="" title="Jeringa de
Anestesia Dental" price="$599.00" img={Jeringa}></ProductCard>
          <ProductCard onClick="" title="Jeringa de
Anestesia Dental" price="$599.00" img={Jeringa}></ProductCard>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
