import React from "react";
import LandingPage from "./Pages/Landingpage";
// import SignUp from "./Pages/SignUp";
// import Dashboard from "./Pages/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          {/* <Route exact path="/signup" component={SignUp} /> */}
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
