import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import configureStore from "./configureStore";
// import "font-awesome/css/font-awesome.min.css";

import Modal from "react-modal";

const store = configureStore();

if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    // store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

Modal.setAppElement(document.getElementById("root"));

const renderApp = () =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./App", renderApp);
}

renderApp();

// import 'bootstrap/dist/css/bootstrap.min.css';
// import "jquery/dist/jquery";
// import "popper.js";
// import "bootstrap/dist/js/bootstrap.min.js";

// ReactDOM.render(<App />, document.getElementById("root"));
