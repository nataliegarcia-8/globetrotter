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

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(5),
  },
}));

export default function MaterialUIPickers() {
  const [departureDate, setDepartureDate] = React.useState(new Date());
  const [returnDate, setReturnDate] = React.useState(new Date());

  const handleDepartDateChange = (date) => {
    setDepartureDate(date);
  };

  const handleReturnDateChange = (date) => {
    setReturnDate(date);
  };

  const [values, setValues] = React.useState({
    amount: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
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
            value={departureDate}
            onChange={handleDepartDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </FormControl>

        <FormControl>
          <KeyboardDatePicker
            margin='normal'
            id='returning'
            label='Returning'
            format='MM/dd/yyyy'
            value={returnDate}
            onChange={handleReturnDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <Location />
        </FormControl>
        <FormControl variant='outlined' className={classes.margin}>
          <InputLabel htmlFor='standard-start-adornment'>Budget</InputLabel>
          <OutlinedInput
            id='standard-start-adornment'
            value={values.amount}
            style={{ width: 225 }}
            onChange={handleChange("amount")}
            startAdornment={<InputAdornment position='start'>$</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
