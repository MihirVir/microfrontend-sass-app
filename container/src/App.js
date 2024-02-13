import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/header.js";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles"

// app component
const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
});

export default () => {
    return (
        <>
          <StylesProvider generateClassName = {generateClassName} >
          <BrowserRouter>
            <div>
              <Header />  
              <MarketingApp />
            </div>
          </BrowserRouter>
          </StylesProvider>
        </>
    )
};
