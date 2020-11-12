import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Copyright from "./Copyright";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fontcolor: {
    color: "#BB86FC",
    "&:hover": {
      color: "#BB90FF",
    },
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#BB86FC",
    },
    type: "dark",
  },
});

function SignUp(props) {
  const classes = useStyles();

  return (
    <>
      <Typography component='h1' variant='h5' className='text-center'>
        Sign Up
      </Typography>
      <form className={props.classes.form} noValidate>
        <ThemeProvider theme={theme}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='firstName'
            label='First Name'
            name='firstName'
            autoComplete='First Name'
            autoFocus
            onChange={props.handleInputChange}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='lastName'
            label='Last Name'
            name='lastName'
            autoComplete='Last Name'
            autoFocus
            onChange={props.handleInputChange}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            onChange={props.handleInputChange}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={props.handleInputChange}
          />
        </ThemeProvider>
        <FormControlLabel
          control={<Checkbox value='remember' color='white' />}
          label='Remember me'
        />
        <Button
          color='primary'
          type='submit'
          fullWidth
          variant='contained'
          className={props.classes.submit}
          onClick={props.signUp}>
          Sign Up
        </Button>
        <Grid item>
          <Link
            href='#'
            variant='body2'
            onClick={props.backToSignIn}
            className={classes.fontcolor}>
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
