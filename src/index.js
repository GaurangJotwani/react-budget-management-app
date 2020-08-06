import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/style.scss";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import "core-js/stable";

import { Provider } from "react-redux";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";

import AppRouter, { history } from "./routers/AppRouters";
import configureStore from "./store/configureStore";
import "./firebase/firebase";
import { firebase } from "./firebase/firebase";
import LoadingPage from "./components/LoadingPage";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("root"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
    // history.push("/");
  }
});
