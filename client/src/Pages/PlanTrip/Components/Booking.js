import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Location from "./Location";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import Dropdown from "./Dropdown";
const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(5),
  },
}));

export default function MaterialUIPickers(props) {
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify='space-around'></Grid>
      <Grid container justify='space-around'>
        <FormControl>
          <KeyboardDatePicker
            variant='inline'
            format='MM/dd/yyyy'
            margin='normal'
            id='departing'
            label='Departing'
            name='departure'
            value={props.departure}
            onChange={props.handleDepartDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </FormControl>

        <FormControl>
          <KeyboardDatePicker
            variant='inline'
            margin='normal'
            id='returning'
            label='Returning'
            name='return'
            format='MM/dd/yyyy'
            value={props.return}
            onChange={props.handleReturnDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </FormControl>
        <FormControl className={classes.margin}>
          {props.children}

          {/* <Location /> */}
        </FormControl>
        <FormControl variant='outlined' className={classes.margin}>
          <InputLabel htmlFor='standard-start-adornment'>Budget</InputLabel>
          <OutlinedInput
            id='standard-start-adornment'
            name='budget'
            value={props.budget}
            style={{ width: 225 }}
            onChange={props.handleInputChange}
            startAdornment={<InputAdornment position='start'>$</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
