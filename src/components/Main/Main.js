import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import LoginPage from "../LoginPage/LoginPage.js";
import Test from "../Test/Test.js"

const Main = () => {
  return (
    <Router>
       <Route path="/Login" exact component={LoginPage} />
       <Route path="/test" exact component={Test} />
       <Route path="*" exact component={LoginPage} />
    </Router>
  );
};

export default Main;
