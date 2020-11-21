import React, { useState, useEffect, useContext } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Budget from "./Components/Budget";
import Steps from "./Components/Steps";
import BudgetTable from "./Components/BudgetTable";
import CategorySelector from "./Components/CategorySelector";
import clsx from "clsx";
import ImgGrid from "./Components/ImgGrid";
import UploadBtn from "./Components/ImgGrid/UploadButton";
import Title from "../../Components/Title";
import Footer from "../../Components/Footer";
import Box from "@material-ui/core/Box";
import Navigation from "../../Components/Navigation";
import ItineraryForm from "./Components/ItineraryForm";
import API from "../../utils/API";
import { Auth } from "aws-amplify";
import { GlobalUserState } from "../../Components/globalUserState";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  jumbotron: {
    background: "linear-gradient(45deg, #BB86FC 10%, #29025a 90%)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
  headline: {
    color: "white",
    fontSize: 100,
    fontWeight: 300,
    letterSpacing: "4px",
    padding: theme.spacing(4, 0, 1),
  },
  carousel: {
    padding: theme.spacing(6, 20),
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  appBar: {
    position: "relative",
    marginBottom: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    // overflow: 'auto',
    flexDirection: "column",
  },
  fixedHeight: {
    height: 500,
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  dates: {
    display: "flex",
    justifyContent: "center",
  },
  root: {
    flexGrow: 1,
  },
  budget: {
    marginTop: theme.spacing(5),
    display: "flex",
    justifyContent: "center",
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function CurrentTrip() {
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#BB86FC",
      },
      type: "dark",
    },
  });

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const initialActivityState = {
    activity: "",
    date: "",
  };

  const [globalUserData, setGlobalUserData] = useContext(GlobalUserState);
  const [trips, setTrips] = useState([]);
  const [currentTrip, setCurrentTrip] = useState({});
  const [activity, setActivity] = useState(initialActivityState);

  useEffect(() => {
    console.log("global state: ", globalUserData);
    setTrips(globalUserData.trips);
  }, [globalUserData]);

  useEffect(() => {
    console.log("trips: ", trips);
    findCurrentTrip();
  }, [trips]);

  useEffect(() => {
    console.log("current: ", currentTrip);
  }, [currentTrip]);

  const findCurrentTrip = () => {
    trips.forEach((trip) => {
      if (trip.current === "current") {
        API.getTrip(trip._id).then((data) => {
          setCurrentTrip(data.data);
        });
      }
      console.log(trip);
    });
  };

  const handleActivitySubmit = () => {
    API.saveActivity(currentTrip._id, activity);
  };
  const handleActivityInputChange = ({ target: { name, value } }) =>
    setActivity({ ...activity, [name]: value });
  console.log(activity, currentTrip._id);

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        {/* Hero unit */}
        <div className={classes.jumbotron}>
          <Container maxWidth='sm'>
            <Typography
              className={classes.headline}
              component='h1'
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom>
              {currentTrip.city}
            </Typography>
            <Typography
              className={classes.dates}
              variant="h4"
              color="inherit"
              noWrap
            >
              {moment().format("MMMM Do, YYYY")}
            </Typography>
          </Container>
        </div>
        <Container maxWidth='lg'>
          <Steps />
          <main className={classes.layout}>
            <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={8}>
                  <Paper className={fixedHeightPaper}>
                    <Typography component='h1' variant='h4' align='left'>
                      Trip Itinerary
                    </Typography>

                    <ItineraryForm
                      handleSubmit={handleActivitySubmit}
                      handleOnChange={handleActivityInputChange}
                      activities={currentTrip.activities}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                  <Paper className={fixedHeightPaper}>
                    <div>
                      {" "}
                      <Budget />{" "}
                    </div>
                    <CategorySelector />
                    <BudgetTable />
                  </Paper>
                </Grid>
                <Grid item xs={12} justify='center'>
                  <Paper
              className={classes.paper}>
                    <Title>
                      <UploadBtn />
                    </Title>
                    <ImgGrid />
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </main>
          <Box pt={4} pb={4}>
            <Navigation />
            <Footer />
          </Box>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}
