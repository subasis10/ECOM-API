import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import ProductProvider from "./context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ProductProvider>
        <App />
      </ProductProvider>
    </Provider>
  </React.StrictMode>
);
