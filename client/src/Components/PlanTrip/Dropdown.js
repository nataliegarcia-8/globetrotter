import React, { useState } from "react";
import locations from "../../locations.json";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Dropdown = () => {
  const array = locations;

  const [value, setValue] = useState("");

  const renderCities = () => {
    if (value.length > 1) {
      return array.filter((city) => city.city.includes(value));
    }

    return [];
  };

  return (
    <div>
      <Autocomplete
        id="City, State"
        style={{ width: 225 }}
        options={locations}
        
        getOptionLabel={(option) => (option.city + ", " + option.state)}
        renderOption={(option) => (
            <React.Fragment>
              {option.city}, {option.state}
            </React.Fragment>
          )}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="City, State" variant="outlined" />
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
