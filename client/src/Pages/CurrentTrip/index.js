import React, {useState, useEffect} from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
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
// import moment from 'moment';
// var displayDate = 
// var currentDate = moment().format('MM-DD-YYYY');

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

  const [userId, setUserId] = useState("");
  const [dbId, setDbId] = useState("");

// ---------- Use Effect hooks -------------
   useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    dbUserSelect();
  }, [userId]);

// ---------- Check cognito user and then get db user from cognito ID -------------
const checkUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUserId(user.username);
    } catch (error) {
      console.log(error);
    }
  };
  const dbUserSelect = () => {
    API.getUsers().then((data) =>
      data.data.forEach((user) => {
        if (user.cognitoId === userId) setDbId(user._id);

        console.log(dbId);
        API.getUser(dbId).then((data) => console.log(data));
      })
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        {/* Hero unit */}
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
              City
            </Typography>
            <Typography
              className={classes.dates}
              variant="h4"
              color="inherit"
              noWrap
            >
 Date
            </Typography>
          </Container>
        </div>
        <Container maxWidth="lg">
          <Steps />
          <main className={classes.layout}>
            <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={9}>
                  <Paper className={fixedHeightPaper}>
                    <Typography component="h1" variant="h4" align="left">
                      Trip Itinerary
                    </Typography>
                    <ItineraryForm />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <Paper className={fixedHeightPaper}>
                    <div>
                      {" "}
                      <Budget />{" "}
                    </div>
                    <CategorySelector />
                    <BudgetTable />
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
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
