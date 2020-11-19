import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TripCard from "./TripCard";
import CardInfo from "./cards";
import { Typography } from "@material-ui/core";
import API from "../../../../utils/API.js";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
}));

export default function PlanTrip(props) {
  const classes = useStyles();

  const statesArray = [
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "AL", label: "Alabama" },
    { value: "NY", label: "New York" },
    { value: "CA", label: "California" },
    { value: "MI", label: "Michigan" },
    { value: "LA", label: "Louisiana" },
    { value: "MS", label: "Mississippi" },
    { value: "NJ", label: "New Jersey" },
    { value: "ME", label: "Maine" },
    { value: "MD", label: "Maryland" },
    { value: "NV", label: "Nevada" },
    { value: "TX", label: "Texas" },
    { value: "WS", label: "Washington" },
    { value: "RI", label: "Rhode Island" },
    { value: "TN", label: "Tennessee" },
    { value: "NM", label: "New Mexico" },
    { value: "AK", label: "Alaska" },
    { value: "AR", label: "Arkansas" },
    { value: "ID", label: "Idaho" },
    { value: "ND", label: "Nort Dakota" },
    { value: "SD", label: "South Dakota" },
    { value: "WY", label: "Wyoming" },
    { value: "IL", label: "Illinois" },
    { value: "UT", label: "Utah" },
    { value: "PA", label: "Pennsylvania" },
    { value: "SC", label: "South Carolina" },
    { value: "VT", label: "Vermont" },
    { value: "VA", label: "Virginia" },
    { value: "WI", label: "Wisconsin" },
    { value: "WV", label: "West Virginia" },
    { value: "OR", label: "Oregon" },
    { value: "OK", label: "Oklahoma" },
    { value: "OH", label: "Ohio" },
    { value: "NC", label: "North Carolina" },
    { value: "NH", label: "New Hampshire" },
    { value: "NE", label: "Nebraska" },
    { value: "MT", label: "Montana" },
    { value: "MO", label: "Missouri" },
    { value: "MN", label: "Minnesota" },
    { value: "MA", label: "Massachussets" },
    { value: "NE", label: "Nebraska" },
    { value: "KY", label: "Kentucky" },
    { value: "KS", label: "Kansas" },
    { value: "IA", label: "Iowa" },
    { value: "IN", label: "Indiana" },
    { value: "HI", label: "Hawaii" },
    { value: "DE", label: "Delaware" },
    { value: "CT", label: "Conneticut" },
    { value: "CO", label: "Colorado" },
  ];

  const [statesBeenTo, setStatesBeenTo] = useState(0);

  useEffect(() => {
    async function getTrips() {
      try {
        const results = await API.getTrips();
        console.log(results.data);
        setStatesBeenTo(countStatesBeenTo(results.data));
      } catch (error) {}
    }
    getTrips();
  }, []);

  const countStatesBeenTo = (placesArray) => {
    let count = 0;
    placesArray.forEach((place) => {
      if (statesArray.find((state) => state.label === place.state)) {
        count++;
      }
    });
    console.log((count / 50) * 100);
    return count;
  };

  return (
    <React.Fragment>
            
      <CssBaseline />
            
      <Container className={classes.cardGrid} maxWidth='lg'>
                 
        <Grid container spacing={5}>
                
          {CardInfo.map((p, i) => (
            <TripCard key={i + "-trip"} {...p} />
          ))}
                   
        </Grid>
            
        <Typography>
          {" "}
          You have visited {(statesBeenTo / 50) * 100}% of the United States of
          America so far, keep up the good work!
        </Typography>
              
      </Container>
          
    </React.Fragment>
  );
}
