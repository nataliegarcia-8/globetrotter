import React from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Copyright from './Copyright'

function ConfirmSignUp(props) {
    return (
        <div>
            
          <Typography component="h1" variant="h5" align="center">
            Confirm Sign Up
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            An email should have been sent over with a confirmation code
          </Typography>
          <form className={props.classes.form} noValidate>
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
              name="code"
              label="Verification Code"
              id="code"
              autoComplete="Verification Code"
              onChange={props.handleInputChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={props.classes.submit}
              onClick={props.confirmSignUp}
            >
              Confirm
            </Button>

            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        
        </div>
    )
}

export default ConfirmSignUp
