import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import { Auth } from "aws-amplify";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ConfirmSignUp from "./ConfirmSignUp";
import { Redirect } from "react-router-dom";


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
    backgroundColor: "#BB86FC",
    "&:hover": {
      backgroundColor: "#BB90FF",
    },
  },
}));

function AuthForms() {
  const initialFormState = {
    email: "",
    password: "",
    code: "",
    formType: "signIn",
    firstName: "",
    lastName: ""

  };
  const [formState, setFormState] = useState(initialFormState);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);
  
  // ------- check for current user ----------
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
  // ---------- Save New User To db ----------------
  // const saveNewUser = (user, firstName, lastName ) => {
    

  //     API.saveUser({
  //       email: user.attributes.email,
  //       cognitoId: user.username,
  //       firstName: firstName,
  //       lastName: lastName
  //     });
    
  // };
  //  ---------- Handle Input Change -------------
  const handleInputChange = ({ target: { name, value } }) =>
    setFormState({ ...formState, [name]: value });

  const { formType } = formState;

  //  --------------- Handle form button press functions ---------------
  const signUp = async (e) => {
    e.preventDefault();
    const { email, password} = formState;
    await Auth.signUp({ username: email, password });
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
    // saveNewUser(user, formState.firstName, formState.lastName )
    setFormState({ ...formState, formType: "signedIn" });

  };

  //  ------------ Switch between sugn up and sign in page ------------
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
     
    </div>
  );
}

export default AuthForms;
