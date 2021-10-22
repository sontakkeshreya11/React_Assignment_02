import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Usercart from "../Pages/Usercart";
import Manageproduct from "./Manageproduct";
import Topics from "./Topics";
import "../Style/Style.css";

function Navigation() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/" className="Link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/categories" className="Link">
              Category
            </Link>
          </li>
          <li>
            <Link to="/cart" className="Link">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/manageproduct" className="Link">
              Manage Product
            </Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/categories">
            <Topics />
          </Route>
          <Route path="/cart">
            <Usercart />
          </Route>
          <Route path="/manageproduct">
            <Manageproduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navigation;
