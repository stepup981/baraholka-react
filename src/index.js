import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "@store/store";
import { Provider } from "react-redux";

import App from "@components/app/App";

import normalize from "@styles/normalize.css";
import index from "@styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
