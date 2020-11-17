import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

}))

export default function AddressForm() {

  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Notes
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <TextField
          id="standard-multiline-static"
          label="Tell us about your trip"
          multiline
          fullWidth
          rows={8}
          // defaultValue="Tell us about your trip"
        />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fav"
            name="fav"
            label="Favorite Place"
            fullWidth
            // autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="fav2" name="fav2" label="Favorite Memory" fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}