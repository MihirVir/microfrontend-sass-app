import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/header.js";
import AuthApp from "./components/AuthApp.js";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

// app component
const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <>
      <StylesProvider generateClassName={generateClassName}>
        {/* creating browser history  */}
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/auth" component={AuthApp} />
              <Route path="/" component={MarketingApp} />
            </Switch>
          </div>
        </BrowserRouter>
      </StylesProvider>
    </>
  );
};
