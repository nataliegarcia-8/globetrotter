import React, { useState, useEffect } from "react";
import Login from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";
import NoMatch from "./Pages/NoMatch";
import PlanTrip from "./Pages/PlanTrip";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Auth, Hub } from "aws-amplify";

function App() {
  // return (
  //   // <Router>
  //   //   <div>
  //   //     <Switch>
  //   //       <Route exact path='/' component={Login} />

  //   //       <Route exact path='/dashboard' component={Dashboard} />
  //   //       <Route exact path='/plan-trip' component={PlanTrip} />
  //   //       <Route component={NoMatch} />
  //   //     </Switch>
  //   //   </div>
  //   // </Router>
  // );
  const [loginState, setLoginState] = useState("signedOut");

  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
    setAuthListener();
  }, []);
  const checkUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
      console.log("user: ", user.username);
      setLoginState("signedIn");
    } catch (error) {
      console.log(error);
    }
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
      console.log("user signed in");
      return (
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      );

    case "signedOut":
      console.log("user signed out");
      return (
        <Router>
          <div>
            <Switch>
              <Route exact path='*' component={Login} />
            </Switch>
          </div>
        </Router>
      );
    default:
      break;
  }
}

export default App;
