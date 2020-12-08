import React, { useEffect, useState, useContext } from "react";
import clsx from "clsx";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import SavedItinerary from "./Components/savedItinerary";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Route, Redirect, Link } from "react-router-dom";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import CardTravelIcon from "@material-ui/icons/CardTravel";
import EventIcon from "@material-ui/icons/Event";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import NotificationsIcon from "@material-ui/icons/Notifications";
import MainListItems from "./Components/sidebar/listItem";
import Footer from "../../Components/Footer";
import Navigation from "../../Components/Navigation";
import PhotoGrid from "./Components/photoGrid";
import { Auth } from "aws-amplify";
import API from "../../utils/API";
import moment from "moment";

// import { GlobalUserState } from "../../Components/globalUserState";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  jumbotron: {
    background: "linear-gradient(45deg, #BB86FC 10%, #29025a 90%)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(6),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#BB86FC",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  headline: {
    color: "white",
    fontSize: 100,
    fontWeight: 300,
    letterSpacing: "4px",
    padding: theme.spacing(4, 0, 1),
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  fixedHeight: {
    height: 500,
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  // button: {
  //   marginTop: theme.spacing(3),
  //   marginLeft: theme.spacing(1),
  // },
  button: {
    margin: theme.spacing(1),
    color: "white",
    backgroundColor: "#BB86FC",
    padding: theme.spacing(3),
    "&:hover": {
      backgroundColor: "#BB90FF",
    },
    // maxWidth: "325px",
    height: "75px",
    fontSize: "18px",
  },
  center: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dates: {
    display: "flex",
    justifyContent: "center",
  },
  // root: {
  //     flexGrow: 1,
  // },
  budget: {
    marginTop: theme.spacing(5),
    display: "flex",
    justifyContent: "center",
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
  // side: {
  //   marginRight: theme.spacing(8),
  //   marginTop: theme.spacing(5),
  // },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  // const [globalUserData, setGlobalUserData] = useContext(GlobalUserState);
  const [trips, setTrips] = useState([]);
  const [pastTrips, setPastTrips] = useState({});
  const [selectedTrip, setSelectedTrip] = useState({});
  const [firstSelected, setFirstSelected] = useState({});

  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  // ---------- Use Effect hooks -------------

  useEffect(() => {
    console.log("local: ", localData);
    // setTrips(localData.globalUserData.trips)
    setTrips(localData.globalUserData.trips);
  }, []);

  useEffect(() => {
    console.log("trips: ", trips);
    setPastTrips(
      trips.filter((trip) => {
        return trip.current.includes("past");
      })
    );
  }, [trips]);

  useEffect(() => {
    console.log("past trips: ", pastTrips);

    setSelectedTrip(pastTrips[0]);
  }, [pastTrips]);

  useEffect(() => {
    console.log("selected trip: ", selectedTrip);
  }, [selectedTrip]);

  const getSelectedTrip = (id) => {
    API.getTrip(id).then(({ data }) => {
      setSelectedTrip(data);
    });
  };
  const handleOnClickForTrip = (id) => {
    console.log(id);
    getSelectedTrip(id);
  };
  //  API.getUser()
  if (selectedTrip) {
    return (
      <ThemeProvider theme={theme}>
        <Paper>
          <div className={classes.root}>
            <CssBaseline />
            <Drawer
              variant="permanent"
              classes={{
                paper: clsx(
                  classes.drawerPaper,
                  !open && classes.drawerPaperClose
                ),
              }}
              open={open}
            >
              <div className={classes.toolbarIcon}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  className={clsx(
                    classes.menuButton,
                    open && classes.menuButtonHidden
                  )}
                >
                  <MenuIcon />
                </IconButton>
              </div>
              <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon color="#BB86FC" />
                </IconButton>
              </div>
              <Divider />
              <List>
                <MainListItems
                  trips={pastTrips}
                  handleClick={handleOnClickForTrip}
                />
              </List>
            </Drawer>
            <main className={classes.content}>
              {/* <div className={classes.appBarSpacer} /> */}
              <div className={classes.jumbotron}>
                <Container maxWidth="sm">
                  <Typography
                    className={classes.headline}
                    component="h1"
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                  >
                    {selectedTrip.city}
                  </Typography>
                  <Typography
                    className={classes.dates}
                    variant="h4"
                    color="inherit"
                    noWrap
                  >
                    {moment(selectedTrip.departure).format("MMM Do YYYY")} -{" "}
                    {moment(selectedTrip.return).format("MMM Do YYYY")}
                  </Typography>
                </Container>
              </div>
              <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6} lg={6}>
                    <Paper className={fixedHeightPaper}>
                      <Typography component="h1" variant="h4" align="left">
                        Trip Itinerary
                      </Typography>
                      <SavedItinerary activities={selectedTrip.activities} />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <Paper className={fixedHeightPaper}>
                      <PhotoGrid photos={selectedTrip.photos} />
                    </Paper>
                  </Grid>
                </Grid>
                <Box pt={4}>
                  <Navigation />
                  <Footer />
                </Box>
              </Container>
            </main>
          </div>
        </Paper>
      </ThemeProvider>
    );
  } else {
    
   
    return (
      <ThemeProvider theme={theme}>
        <Paper>
          <div className={classes.root}>
            <CssBaseline />

            <main className={classes.content}>
              {/* <div className={classes.appBarSpacer} /> */}
              <div className={classes.jumbotron}>
                <Container maxWidth="sm">
                  <Typography
                    className={classes.dates}
                    variant="h2"
                    color="inherit"
                    noWrap
                  >
                    {"No Past Trips Found"}
                  </Typography>
                </Container>
              </div>
              <Container maxWidth="lg" className={classes.container}>
                
              <div className={classes.center}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={4} lg={4}>
                        <Route
                          render={({ history }) => (
                            <Button
                              fullWidth
                              variant="contained"
                              color="primary"
                              size="large"
                              onClick={() => {
                                history.push("/currenttrip");
                              }}
                              className={classes.button}
                              startIcon={<CardTravelIcon />}
                            >
                              Current Trip
                            </Button>
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} md={4} lg={4}>
                        <Route
                          render={({ history }) => (
                            <Button
                              fullWidth
                              variant="contained"
                              color="primary"
                              size="large"
                              onClick={() => {
                                history.push("/");
                              }}
                              className={classes.button}
                              startIcon={<EventIcon />}
                            >
                              Dashboard
                            </Button>
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} md={4} lg={4}>
                        <Route
                          render={({ history }) => (
                            <Button
                              fullWidth
                              variant="contained"
                              color="primary"
                              size="large"
                              onClick={() => {
                                history.push("/plantrip");
                              }}
                              className={classes.button}
                              startIcon={<SpeakerNotesIcon />}
                            >
                              Plan A Trip
                            </Button>
                          )}
                        />
                      </Grid>
                    </Grid>
                  </div>
                
                <Box pt={4}>
                  <Navigation />
                  <Footer />
                </Box>
              </Container>
            </main>
          </div>
        </Paper>
      </ThemeProvider>
    );
  }
}
