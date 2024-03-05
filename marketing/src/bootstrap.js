import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { createMemoryHistory } from "history";
// Mount function to start up the app
const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();

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
    mount(devRoot, {});
  }
}

// if we are running through a container
// and we should export the mount function

export { mount };
