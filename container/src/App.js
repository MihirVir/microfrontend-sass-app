import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header.js";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const MarketingLazy = lazy(() => import("./components/MarketingApp.js"));
const AuthLazy = lazy(() => import("./components/AuthApp.js"));

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
            <Suspense fallback={<div>Loading</div>}>
              <Switch>
                <Route path="/auth" component={AuthLazy} />
                <Route path="/" component={MarketingLazy} />
              </Switch>
            </Suspense>
          </div>
        </BrowserRouter>
      </StylesProvider>
    </>
  );
};
