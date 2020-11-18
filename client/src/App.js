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
  const [loginState, setLoginState] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
    // setAuthListener();
  }, [loginState]);

  const checkUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
      console.log("user: ", user);

      setLoginState(true);
    } catch (error) {
      console.log(error);
      console.log("signedOut");
      setLoginState(false);
    }
  };

  const saveNewUser = (user) => {
    API.saveUser({
      email: user.attributes.email,
      id: user.username,
    });
  };

  const setAuthListener = async () => {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signIn":
          console.log("user signed in");
          setLoginState(true);
          break;

        case "signOut":
          console.log("user signed out");
          setLoginState(false);

          break;
        default:
          break;
      }
    });
  };

  return <Router>
    <div>
      <Switch>
        <ProtectedRoute loginState={loginState} exact path="/" component={Dashboard} />
        <ProtectedRoute loginState={loginState}  exact path='/plantrip' component={PlanTrip} />
        <ProtectedRoute loginState={loginState}  exact path='/pasttrip' component={PastTrip} />
        <ProtectedRoute loginState={loginState}  exact path='/currenttrip' component={CurrentTrip} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
}

function ProtectedRoute({ loginState, component:Component, ...rest }) {
  return <Route {...rest} component={loginState ? Component: Login}/>
};

export default App;
