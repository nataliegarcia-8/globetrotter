import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import API from "../../../../utils/API";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    width: 125,
  },
  button: {
    backgroundColor: "transparent",
    border: "2px solid #BB86FC",
    color: "white",
    margin: theme.spacing(3),
    "&:hover": {
      backgroundColor: "#BB90FF",
      color: "#121212",
    },
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
        return "transportion";
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
    amount: "0",
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
  // console.log("current: ", props.currentTrip.budget);
  // console.log(props.currentTrip._id, {expense: parseInt(values.amount), category: categoryName});

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={6} md={6} lg={6}>
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
            fullWidth
            onChange={handleChange}>
            <MenuItem value=''>
              <em>Select one</em>
            </MenuItem>
            <MenuItem name='food' value={10}>
              Food
            </MenuItem>
            <MenuItem name='activities' value={20}>
              Activities
            </MenuItem>
            <MenuItem name='flight' value={30}>
              Flight
            </MenuItem>
            <MenuItem name='hotel' value={40}>
              Hotel
            </MenuItem>
            <MenuItem name='transport' value={50}>
              Transportation
            </MenuItem>
            <MenuItem name='misc' value={60}>
              Misc
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} md={6} lg={6} className={classes.margin}>
        <FormControl 
        className={classes.formControl}>
          <InputLabel htmlFor='standard-adornment-amount'>Amount</InputLabel>
          <Input
            id='standard-adornment-amount'
            value={values.amount}
            fullWidth
            onChange={handleInput("amount")}
            startAdornment={<InputAdornment position='start'>$</InputAdornment>}
          />
        </FormControl>
      </Grid>
      
      <Grid container justify='center'>
        <Fab
          variant='extended'
          aria-label='add'
          size='small'
          className={classes.button}
            onClick={handlebudgetSubmit}>
          <AddIcon />
          add Expense
        </Fab>
      </Grid>
      </Grid>
    </div>
  );
}
