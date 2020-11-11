import React from "react";
import Login from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";
import NoMatch from "./Pages/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />

          <Route exact path="/dashboard" component={Dashboard} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
