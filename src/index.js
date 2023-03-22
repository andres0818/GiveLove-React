import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import ContextWrapper from './context/ContextWrapper.js'

ReactDOM.render(
  <Provider store = {store}>
    <ContextWrapper>
    <App />
    </ContextWrapper> 
  </Provider>,
  document.getElementById("root")
);