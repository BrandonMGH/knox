import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import LoginPage from "../LoginPage/LoginPage.js";
import Test from "../Test/Test.js"

let loggedIn = true

const Main = () => {
  return (
    <Router>
       <Router path="*" exact component={LoginPage} />
       {loggedIn ? <Test/> : <LoginPage />}
       <Router />
    </Router>
  );
};

export default Main;
