import "./App.css";
import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact to="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
