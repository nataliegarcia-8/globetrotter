import React, { useState, useEffect } from "react";
import Login from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";
import NoMatch from "./Pages/NoMatch";
import PlanTrip from "./Pages/PlanTrip";
import API from "./utils/API";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Auth, Hub } from "aws-amplify";
import PastTrip from "./Pages/PastTrip";
import CurrentTrip from "./Pages/CurrentTrip";

function App() {
  const [loginState, setLoginState] = useState("signedOut");

  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
    setAuthListener();
  }, [loginState]);

  const checkUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
      console.log("user: ", user);
      console.log("signedIn");
      setLoginState("signedIn");
    } catch (error) {
      console.log(error);
      console.log("signedOut");
      setLoginState("signedOut");
    }
  };

  const saveNewUser = (user) => {
    API.saveUser({
      email: user.attributes.email,
      cognitoId: user.username,
    });
  };

  const setAuthListener = async () => {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signIn":
          console.log("user signed in");
          setLoginState("signedIn");
          break;

        case "signOut":
          console.log("user signed out");
          setLoginState("signedOut");

          break;
        default:
          break;
      }
    });
  };

  switch (loginState) {
    case "signedIn":
      saveNewUser(user);
      return (
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/plantrip' component={PlanTrip} />
              <Route exact path='/pasttrip' component={PastTrip} />
              <Route exact path='/currenttrip' component={CurrentTrip} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      );

    case "signedOut":
      return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      );
    default:
      break;
  }
}

export default App;
