import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { createMemoryHistory, createBrowserHistory } from "history";
// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initPath }) => {
  // if default history is provided we use it else we create a memory history
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initPath],
    });

  // whenever the path changes automatically call the onNavigate
  // function.
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// If we are in dev and isolation mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#marketing-dev-root");

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// if we are running through a container
// and we should export the mount function

export { mount };
