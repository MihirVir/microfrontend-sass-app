import React from "react";
import ReactDOM from "react-dom";

// Mount function to start up the app 
const mount = (el) => {
    ReactDOM.render(
        <h1>Hi There!</h1>,
        el
    )
};

// If we are in dev and isolation mount immediately
if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#marketing-dev-root");

    if (devRoot) {
        mount(devRoot);
    }
}

// if we are running through a container 
// and we should export the mount function

export { mount };