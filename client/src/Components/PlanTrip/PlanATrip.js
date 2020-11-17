import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Copyright from "../Copyright";
import Booking from "./Booking";
import SubmitButton from "./SubmitButton";
import Location from "./Location";
import Dropdown from "./Dropdown";
import API from "../../utils/API"
import { Auth } from "aws-amplify";
import Geocode from "react-geocode";

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
  };
  const [tripState, setTripState] = useState(initialTripState);
  const [userId, setUserId] = useState("");
  const [dbId, setDbId] = useState("");

  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  useEffect(() => {
    checkUser();
  }, []);

  Geocode.setApiKey("AIzaSyAayUREzm6gydcCBnHzTXcnN4PsneoLays");

  const getLatLong = (tripState) => {

    Geocode.fromAddress(`${tripState.city}, ${tripState.state}`).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        setTripState({ ...tripState, lat: lat, long: lng });
      },
      error => {
        console.error(error);
      }
    );
  }
  const handleDepartDateChange = (date, value) => {
    setDepartureDate(date);
    setTripState({ ...tripState, departure: value });
    
  };

  const handleReturnDateChange = (date, value) => {
    setReturnDate(date);
    setTripState({ ...tripState, return: value });
  };

  const checkUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUserId(user.username);
      dbUserSelect();
      
    } catch (error) {
      console.log(error);
    }
  };
  const dbUserSelect = () => {
    API.getUsers().then((data) =>
    data.data.forEach(user => {
      if(user.id === userId)
        setDbId(user._id)
      
    }))
  }

  const valueSelected = (val) => {
    if (!val) {
      return;
    } else {
      setTripState({ ...tripState, city: val.city, state: val.state });
      console.log(tripState);
      getLatLong(tripState);
    }
  };
  const handleSubmit = () =>{
    API.saveTrip(dbId, tripState)
    console.log("submit");
    console.log(dbId);

    
  }
  const handleInputChange = ({ target: { name, value } }) =>
    setTripState({ ...tripState, [name]: value });
  console.log(tripState);

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div className={classes.image}>
            <Typography
              className={classes.headline}
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Where to Next?
            </Typography>
          </div>
          <Container maxWidth="sm"></Container>
          <Container className={classes.booking} maxWidth="md">
            {/* End hero unit */}
            <Booking
              handleDepartDateChange={handleDepartDateChange}
              handleReturnDateChange={handleReturnDateChange}
              handleInputChange={handleInputChange}
              budget={tripState.budget}
              return={returnDate}
              departure={departureDate}
            >
              <Dropdown
                valueChange={valueSelected}
                handleInputChange={handleInputChange}
              />
            </Booking>
            <SubmitButton handleSubmit={handleSubmit} />
          </Container>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" component="p">
            Your Next Adventure Awaits
          </Typography>
          <Copyright />
        </footer>
        {/* End footer */}
      </React.Fragment>
    </ThemeProvider>
  );
}
