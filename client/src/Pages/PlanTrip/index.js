import React, { useState, useEffect, useContext } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import API from "../../utils/API";

import Geocode from "react-geocode";
import Copyright from "../../Components/Copyright";
import Booking from "./Components/Booking";
import SubmitButton from "./Components/SubmitButton";
import Location from "./Components/Location";
import Dropdown from "./Components/Dropdown";
import { GlobalUserState } from "../../Components/globalUserState";

import Footer from "../../Components/Footer";
import Navigation from "../../Components/Navigation";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  headline: {
    color: "white",
    fontSize: 100,
    fontWeight: 300,
    letterSpacing: "4px",
    padding: theme.spacing(4, 0, 1),
  },
  booking: {
    padding: theme.spacing(6, 20),
  },
  footer: {
    padding: theme.spacing(6),
  },
}));

export default function PlanTrip() {
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#BB86FC",
      },
      type: "dark",
    },
  });

  const initialTripState = {
    city: "",
    state: "",
    budget: "",
    return: "",
    departure: "",
    lat: 0,
    long: 0,
    current: "future",
  };
  const coordinates = {
    lat: 0,
    long: 0,
  };
  // ---------- States -------------

  const [tripState, setTripState] = useState(initialTripState);
  const [coordinatesState, setCoordinates] = useState(coordinates);
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [globalUserData, setGlobalUserData] = useContext(GlobalUserState)

  // ---------- Use Effect hooks -------------
 
  console.log(globalUserData);
  useEffect(() => {
    getLatLong(tripState);
  }, [tripState]);

  // ----------Goecoder function for getting lat and long -------------
  Geocode.setApiKey("AIzaSyAayUREzm6gydcCBnHzTXcnN4PsneoLays");

  const getLatLong = (tripState) => {
    Geocode.fromAddress(`${tripState.city}, ${tripState.state}`).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        setCoordinates({ lat: lat, long: lng });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  // ---------- Departure and Return date Input handlers -------------
  const handleDepartDateChange = (date, value) => {
    setDepartureDate(date);
    setTripState({ ...tripState, departure: value });
  };

  const handleReturnDateChange = (date, value) => {
    setReturnDate(date);
    setTripState({ ...tripState, return: value });
  };

  // ---------- City and State Input handler -------------
  const valueSelected = (val) => {
    if (!val) {
      return;
    } else {
      setTripState({ ...tripState, city: val.city, state: val.state });

      console.log(tripState);
    }
  };

  // ---------- other input handler - mainly for budget  -------------
  const handleInputChange = ({ target: { name, value } }) =>
    setTripState({ ...tripState, [name]: value });

  // ---------- Submit button handler -------------
  const handleSubmit = () => {
    API.saveTrip(globalUserData._id, { ...tripState, ...coordinatesState });
    console.log("submit");
   
  };
  
  
  console.log(tripState, globalUserData._id);

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div className={classes.image}>
            <Typography
              className={classes.headline}
              component='h1'
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom>
              Where to Next?
            </Typography>
          </div>
          <Container maxWidth='sm'></Container>
          <Container className={classes.booking} maxWidth='md'>
            {/* End hero unit */}
            <Booking
              handleDepartDateChange={handleDepartDateChange}
              handleReturnDateChange={handleReturnDateChange}
              handleInputChange={handleInputChange}
              budget={tripState.budget}
              return={returnDate}
              departure={departureDate}>
              <Dropdown
                valueChange={valueSelected}
                handleInputChange={handleInputChange}
              />
            </Booking>
            <SubmitButton handleSubmit={handleSubmit} />
          </Container>
        </main>
        <Box pt={4} pb={4}>
          <Navigation />
          <Footer />
        </Box>
      </React.Fragment>
    </ThemeProvider>
  );
}
