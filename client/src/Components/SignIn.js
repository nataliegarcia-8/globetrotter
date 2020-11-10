import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Auth, Hub } from "aws-amplify";
import Amplify from "aws-amplify";

import config from "../aws-exports";
Amplify.configure(config);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © Globetrotter "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
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

function SignIn() {
    const initialFormState = {
        email: "",
        password: "",
        code: "",
        formType: "signIn",
        name: "",
    };
    const [formState, setFormState] = useState(initialFormState);
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        checkUser()
        
    }, [])
    const checkUser = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser()
            setUser(user)
            console.log("user: ", user);
            setFormState(() => ({ ...formState, formType: "signedIn" }))
        } catch (error) {
            
        }
    }
    
    const handleInputChange = (e) => {
        setFormState(() => ({ ...formState, [e.target.name]: e.target.value }));
        console.log(e.target.value);
    };
    
    
    const { formType } = formState;
    
    //  --------------- Handle form button press functions ---------------
    const signUp = async (e) => {
        e.preventDefault();
        const { email, password, name } = formState;
        await Auth.signUp({ username: email, password, attributes: { name } });
        setFormState(() => ({ ...formState, formType: "confirmSignUp" }));
    };
    const confirmSignUp = async (e) => {
        e.preventDefault();

        const { email, code } = formState;
        await Auth.confirmSignUp({ username: email, code });
        setFormState(() => ({ ...formState, formType: "signIn" }));
    };
    const signIn = async (e) => {
        e.preventDefault();

        const { email, password } = formState;
        await Auth.signIn({ username: email, password });
        setFormState(() => ({ ...formState, formType: "signedIn" }));
    };


    const classes = useStyles();
    return (
        <div>
      {formType === "signUp" && (
          <div>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="Full Name"
              autoFocus
              onChange={handleInputChange}
              />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleInputChange}
              />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInputChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={signUp}
            >
              Sign Up
            </Button>
            <Grid item>
                <Link href="#" variant="body2" onClick={() => {setFormState(() => ({ ...formState, formType: "signIn" }))}}>
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      )}
      {formType === "confirmSignUp" && (
        <div>
          <Typography component="h1" variant="h5" align="center">
            Confirm Sign Up
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            An email should have been sent over with a confirmation code
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="code"
              label="Verification Code"
              id="code"
              autoComplete="Verification Code"
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={confirmSignUp}
            >
              Confirm
            </Button>

            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      )}
      {formType === "signIn" && (
        <div>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInputChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={signIn}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={() => {setFormState(() => ({ ...formState, formType: "signUp" }))}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      )}
      <Button
              type="sign out"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={()=> {
                  Auth.signOut();
              }}
            >
              Sign out
            </Button>
    </div>
  );
}

export default SignIn;
