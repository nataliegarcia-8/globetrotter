import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Copyright from './Copyright'


function SignUp(props) {
  

  return (
        <>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={props.classes.form} noValidate>
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
              onChange={props.handleInputChange}
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
              onChange={props.handleInputChange}
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
              onChange={props.handleInputChange}
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
              className={props.classes.submit}
              onClick={props.signUp}
            >
              Sign Up
            </Button>
            <Grid item>
              <Link href="#" variant="body2" onClick={props.backToSignIn}>
                {"Already have an account? Sign in"}
              </Link>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </>
      
  );
}

export default SignUp;
