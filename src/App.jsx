import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import { Redirect, BrowserRouter, Route, Link } from "react-router-dom";
import store from "./store.js";
import Plant from "./Plant.jsx";

class App extends Component {
  render = () => {
    return (
      <Provider store={store}>
        <Plant />
      </Provider>
    );
  };
}

export default App;
