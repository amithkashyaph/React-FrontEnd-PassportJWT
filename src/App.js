import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/welcome";
import { Switch, Route } from "react-router-dom";
import RegisterForm from "./components/register";
import LoginForm from "./components/login";
import Home from "./components/home";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
