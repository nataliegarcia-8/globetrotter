import React from "react";
import LandingPage from "./Pages/Landingpage";
// import SignUp from "./Pages/SignUp";
// import Dashboard from "./Pages/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";


import config from "./aws-exports";
Amplify.configure(config);


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

export default withAuthenticator(App, {
  usernameAttributes: 'email',
  signUpConfig: {     
     hiddenDefaults: ["phone_number"]
  }
});
