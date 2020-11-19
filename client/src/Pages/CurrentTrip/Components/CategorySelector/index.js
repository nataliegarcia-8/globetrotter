import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: theme.spacing(3),
  },
  margin: {
    marginLeft: theme.spacing(5),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  // textField: {
  //   width: '25ch',
  // },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function CategorySelector() {
  const classes = useStyles();
  const [category, setcategory] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setcategory(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [values, setValues] = React.useState({
    amount: "",
  });

  const handleInput = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} md={4} lg={4}>
        <FormControl className={classes.formControl}>
          <InputLabel id='demo-controlled-open-select-label'>
            Category
          </InputLabel>
          <Select
            labelId='demo-controlled-open-select-label'
            id='demo-controlled-open-select'
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={category}
            onChange={handleChange}>
            <MenuItem value=''>
              <em>Select one</em>
            </MenuItem>
            <MenuItem value={10}>Food</MenuItem>
            <MenuItem value={20}>Activities</MenuItem>
            <MenuItem value={30}>Flight</MenuItem>
            <MenuItem value={40}>Hotel</MenuItem>
            <MenuItem value={50}>Transportation</MenuItem>
            <MenuItem value={60}>Misc</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={4} lg={4} className={classes.margin}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='standard-adornment-amount'>Amount</InputLabel>
          <Input
            id='standard-adornment-amount'
            value={values.amount}
            onChange={handleInput("amount")}
            startAdornment={<InputAdornment position='start'>$</InputAdornment>}
          />
        </FormControl>
      </Grid>
    </div>
  );
}
