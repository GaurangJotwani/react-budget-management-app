import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/style.scss";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";


import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouters";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Gas Bill", amount: 100, createdAt: 0 })
);
store.dispatch(
  addExpense({ description: "Water Bill", amount: 5000, createdAt: 100 })
);

store.dispatch(
  addExpense({ description: "rent", amount: 1095, createdAt: -100 })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
