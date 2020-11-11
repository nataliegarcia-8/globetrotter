import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Auth } from "aws-amplify";
import Globe from "../Components/Globe";
import Button from "@material-ui/core/Button";

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
      <Button
        type='sign out'
        fullWidth
        variant='contained'
        color='primary'
        className={classes.submit}
        onClick={() => {
          Auth.signOut();
        }}>
        Sign out
      </Button>
    </div>
  );
}

export default Dashboard;
