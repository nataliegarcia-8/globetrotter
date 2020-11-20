import React, {useState, useEffect} from "react";
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
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import API from "../../../../utils/API";


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

export default function CategorySelector(props) {
  const classes = useStyles();
  const [category, setcategory] = useState("");
  const [categoryName, setcategoryName] = useState("");
  const [currentBudget, setCurrentBudget] = useState(props.currentTrip.budget);


  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setcategory(event.target.value);
    setcategoryName(selectNameOfCategory(event.target.value));
    console.log(categoryName);
  };
  const selectNameOfCategory = (val) => {
    switch (val) {
      case 10:
        return "food";
      case 20:
        return "activities";
      case 30:
        return "flight";
      case 40:
        return "hotel";
      case 50:
        return "transport";
      case 60:
        return "misc";
      default:
        break;
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [values, setValues] = useState({
    amount: "",
  });

  const handleInput = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handlebudgetSubmit = async () => {
    await API.saveExpense(props.currentTrip._id, {expense: parseInt(values.amount), category: categoryName})
    setValues({amount: ""})
    setcategory("")
    setCurrentBudget(props.currentTrip.budget);

  };
  console.log("current: ", props.currentTrip.budget);
  console.log(props.currentTrip._id, {expense: parseInt(values.amount), category: categoryName});

  return (
    <div className={classes.root}>
      <Grid item xs={12} md={4} lg={4}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">
            Category
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={category}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>Select one</em>
            </MenuItem>
            <MenuItem name="food" value={10}>
              Food
            </MenuItem>
            <MenuItem name="activities" value={20}>
              Activities
            </MenuItem>
            <MenuItem name="flight" value={30}>
              Flight
            </MenuItem>
            <MenuItem name="hotel" value={40}>
              Hotel
            </MenuItem>
            <MenuItem name="transport" value={50}>
              Transportation
            </MenuItem>
            <MenuItem name="misc" value={60}>
              Misc
            </MenuItem>
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
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </Grid>
      <Grid container justify="center">
          <Fab variant="extended" aria-label="add" onClick={handlebudgetSubmit}>
            <AddIcon />
            Add expense
          </Fab>
        </Grid>
    </div>
  );
}
