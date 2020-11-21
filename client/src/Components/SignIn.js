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
  ThemeProvider,
  createMuiTheme,
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

function SignIn(props) {
  const classes = useStyles();

  return (
    <div>
      <Typography component='h1' variant='h5' className='text-center'>
        Sign In
      </Typography>
      <form className={props.classes.form} noValidate>
        <ThemeProvider theme={theme}>
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
          onClick={props.signIn}>
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link  variant='body2' className={classes.fontcolor}>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link
              
              variant='body2'
              onClick={props.toSignUp}
              className={classes.fontcolor}>
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </form>
    </div>
  );
}

export default SignIn;
