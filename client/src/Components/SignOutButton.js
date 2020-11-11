import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Auth } from "aws-amplify";
import Button from "@material-ui/core/Button";
import { Redirect } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  
  function SignOutButton() {
    
    const classes = useStyles();
  return (
    
      <Button
        type="sign out"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={() => {
          Auth.signOut();
          <Redirect to='/' />
        }}
      >
        Sign out
      </Button>
    
  );
}

export default SignOutButton;