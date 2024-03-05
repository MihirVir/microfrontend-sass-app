import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { createMemoryHistory } from "history";
// Mount function to start up the app
const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();

  // whenever the path changes automatically call the onNavigate
  // function.
  history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, el);
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
