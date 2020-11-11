import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Auth } from "aws-amplify";
import Globe from "../Components/Globe";
import SignOut from "../Components/SignOutButton"
import { Redirect } from 'react-router-dom'
import SignOutButton from "../Components/SignOutButton";






const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  
  function Dashboard() {
    
    const classes = useStyles();
  return (
    <div>
      <h1>Hello!</h1>
      <Globe />
      <SignOut/>
    </div>
  );
}

export default Dashboard;
