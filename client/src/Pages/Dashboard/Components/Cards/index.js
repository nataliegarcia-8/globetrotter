import React, { useEffect, useState, useContext } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Toolbar from "@material-ui/core/Toolbar";
import CountUp from "react-countup";
import moment from "moment"
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import TripCard from "./TripCard";
import CardInfo from "./cards";
import { Typography } from "@material-ui/core";
import API from "../../../../utils/API.js";
import ProgressCircle from "../../Components/ProgressCircle";
import { GlobalUserState } from "../../../../Components/globalUserState.js";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
  headline: {
    fontSize: "22px",
    fontWeight: "400",
    height: "50px",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#BB86FC",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    display: "flex",
    paddingTop: theme.spacing(4),
    color: "#BB86FC",
    "&:hover": {
      color: "#BB90FF",
    },
  },
  cardMedia: {
    border: "2px solid #BB86FC",
    height: "66px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    paddingTop: theme.spacing(4),
  },
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  counter: {
    fontSize: "40px",
    fontWeight: "700",
    textAlign: "center",
    color: "#BB86FC",
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

  const [globalUserData, setGlobalUserData] = useContext(GlobalUserState);
  const [trips, setTrips] = useState([]);
  const [futureTrips, setFutureTrips] = useState([]);

  useEffect(() => {
    console.log("global state: ", globalUserData);
    setTrips(globalUserData.trips);
  }, [globalUserData]);

  useEffect(() => {
    console.log("trips: ", trips);
    setStatesBeenTo(countStatesBeenTo(trips));
    if(trips){
      console.log("here");
      setFutureTrips(
        trips.filter((trip) => {
          return trip.current.includes("future");
        })
      );
    }
  }, [trips]);

  useEffect(() => {
    console.log("future trips: ", futureTrips);
    
  }, [futureTrips]);
  const countStatesBeenTo = (placesArray) => {
    let count = 0;
    if (placesArray) {
      placesArray.forEach((place) => {
        if (statesArray.find((state) => state.label === place.state)) {
          count++;
        }
      });
      console.log((count / 50) * 100);
      return count;
    }
  };
  const displayFutureTrips = () => {
    if (futureTrips.length >= 1) {
      return (
        <>
          <Typography component="p" variant="h4">
            {futureTrips[0].city}, {futureTrips[0].state}
          </Typography>
          <Typography color="textSecondary" className={classes.depositContext}>
          {moment(futureTrips[0].departure).format("MMM Do YYYY")}
          </Typography>
          <div>
            <Link
              className={classes.link}
              target="_blank"
              href="https://www.priceline.com/?tab=flights&match=e&kw=airlines%20booking%20online&adp=&refid=PLGOOGLECPC&refclickid=D%3AcFlight_JGCV_16839507390g3182264857601555969115kwd-1993568360%7C1015452&gclid=CjwKCAiAwrf-BRA9EiwAUWwKXi9aNxfxFkskjog_vnUKT7moHBc-bwi8OIPvQuRcQjvGkY0090i-zxoCEisQAvD_BwE&gclsrc=aw.ds&slingshot=1090&vrid=eb91f04d1cec423c5de1998fd8bbee9f"
            >
              Book a Flight
            </Link>
          </div>
        </>
      );
    } else {
      return (
        <>
          <Typography component="p" variant="h4">
            No Upcoming Trips
          </Typography>
          <Typography color="textSecondary" className={classes.depositContext}>
            Plan a trip below
          </Typography>
          
        </>
      );
    }
  };
  function moneySpent() {}

  return (
    <React.Fragment>
      <CssBaseline />
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia}>
          <Typography
            className={classes.headline}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Amount Traveled
          </Typography>
        </CardMedia>

        <CardContent className={classes.cardContent}>
          <ProgressCircle statesBeenTo={statesBeenTo} />
        </CardContent>
      </Card>

      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia}>
          <Typography
            className={classes.headline}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Upcoming Trip
          </Typography>
        </CardMedia>

        <CardContent className={classes.center}>
         {displayFutureTrips()}
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
