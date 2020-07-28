import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/style.scss";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouters";
import configureStore from "./store/configureStore";
import "./firebase/firebase";

console.log(process.env.NODE_ENV);

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
