import React, { useState, useEffect } from "react";


import { makeStyles } from "@material-ui/core/styles";
import { Auth } from "aws-amplify";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ConfirmSignUp from "./ConfirmSignUp";
import { Redirect } from 'react-router-dom'

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

function AuthForms() {
  const initialFormState = {
    email: "",
    password: "",
    code: "",
    formType: "signIn",
    name: "",
  };
  const [formState, setFormState] = useState(initialFormState);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
        console.log("user: ", user.username);
        setFormState({ ...formState, formType: "signedIn" });
      } catch (error) {
        console.log(error);
      }
    };
    checkUser();
  }, []);

  const handleInputChange = ({ target: { name, value } }) =>
    setFormState({ ...formState, [name]: value });

  const { formType } = formState;

  //  --------------- Handle form button press functions ---------------
  const signUp = async (e) => {
    e.preventDefault();
    const { email, password, name } = formState;
    await Auth.signUp({ username: email, password, attributes: { name } });
    setFormState({ ...formState, formType: "confirmSignUp" });
  };

  const confirmSignUp = async (e) => {
    e.preventDefault();

    const { email, code } = formState;
    await Auth.confirmSignUp(email, code);
    setFormState({ ...formState, formType: "signIn" });
  };
  const signIn = async (e) => {
    e.preventDefault();

    const { email, password } = formState;
    await Auth.signIn(email, password);
    setFormState({ ...formState, formType: "signedIn" });
  };

  const backToSignIn = () => {
    setFormState({ ...formState, formType: "signIn" });
  };
  const backToSignUp = () => {
    setFormState({ ...formState, formType: "signUp" });
  };

  const classes = useStyles();
  return (
    <div>
      {formType === "signUp" && (
        <SignUp
          handleInputChange={handleInputChange}
          signUp={signUp}
          classes={classes}
          backToSignIn={backToSignIn}
        />
      )}
      {formType === "confirmSignUp" && (
        <ConfirmSignUp
          handleInputChange={handleInputChange}
          confirmSignUp={confirmSignUp}
          classes={classes}
        />
      )}
      {formType === "signIn" && (
        <SignIn
          handleInputChange={handleInputChange}
          signIn={signIn}
          classes={classes}
          toSignUp={backToSignUp}
        />
      )}
      {formType === "signedIn" && (
        <Redirect to='/dashboard' />
      )}
      
    </div>
  );
}

export default AuthForms;
