import React, { useState, useEffect } from "react";
import Dashboard from "./Pages/Dashboard";
import NoMatch from "./Pages/NoMatch";
import PlanTrip from "./Pages/PlanTrip";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PastTrip from "./Pages/PastTrip";
import CurrentTrip from "./Pages/CurrentTrip";
import UserState from "./Components/globalUserState";
import API from "./utils/API";
import { Auth } from "aws-amplify";

function InternalApp(props) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    if (user === null) {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
        console.log("user: ", user);
        saveNewUser(user);
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }
  };

  const saveNewUser = (user) => {
    API.saveUser({
      email: user.attributes.email,
      cognitoId: user.username,
    });
  };
  if (props.authState === "signedIn") {
    return (
      <>
        <Router>
          <div>
            <UserState>
              <Switch>
                <Route exact path="/">
                  <Dashboard />
                </Route>
                <Route exact path="/plantrip">
                  <PlanTrip />
                </Route>
                <Route exact path="/pasttrip">
                  <PastTrip />
                </Route>
                <Route exact path="/currenttrip">
                  <CurrentTrip />
                </Route>
                <Route component={NoMatch} />
              </Switch>
            </UserState>
          </div>
        </Router>
      </>
    );
  } else {
    return null;
  }
}

export default InternalApp;
