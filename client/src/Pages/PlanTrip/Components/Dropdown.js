import React, { useState } from "react";
import locations from "../../../locations.json";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const Dropdown = (props) => {
  const array = locations;

  const [value, setValue] = useState("");

  const renderCities = () => {
    if (value.length > 1) {
      return array.filter((city) => city.city.includes(value));
    }

    return [];
  };

  const useStyles = makeStyles((theme) => ({
    icon: {
      color: theme.palette.text.secondary,
      marginRight: theme.spacing(2),
    },
  }));

  const classes = useStyles();
  return (
    <div>
      <Autocomplete
        id="City, State"
        style={{ width: 225 }}
        options={locations}
        name="location"
        onChange={(event, value) => props.valueChange(value)}
        getOptionLabel={(option) => option.city + ", " + option.state}
        renderOption={(option) => {
          return (
            <span >
              {option.city}, {option.state}
            </span>
            // <Grid container alignItems='center'>
            //   <Grid item>
            //     <LocationOnIcon className={classes.icon} />
            //   </Grid>
            //   <Grid item xs>

            //       <span

            //         style={{ fontWeight: 400 }}>
            //         {option.city},
            //       </span>

            //     <Typography variant='body2' color='textSecondary'>
            //     {option.state}
            //     </Typography>
            //   </Grid>
            // </Grid>
          );
        }}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="City, State"
            variant="outlined"
            
          />
        )}
      />
      {/* <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <select>
        {renderCities().map((city, key) => {
          return <option key={key}>{city.city}</option>;
        })}
      </select> */}
    </div>
  );
};
export default Dropdown;
