import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Carousel from "../../Components/Carousel";
import Container from "@material-ui/core/Container";
import Drawer from "../../Components/Drawer";
import Copyright from "../../Components/Copyright";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import FeaturedPost from "../../Components/FeaturePost";
import Sidebar from "../../Components/Sidebar";
import Main from "./Components/main";
import Footer from "../../Components/Footer";
import Navigation from "../../Components/Navigation";

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
  },
  headline: {
    color: "white",
    fontSize: 100,
    fontWeight: 300,
    letterSpacing: "4px",
    padding: theme.spacing(4, 0, 1),
  },
  dates: {
    display: "flex",
    justifyContent: "center",
  },
  carousel: {
    padding: theme.spacing(6, 20),
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const FavoritePlace = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

export default function PreviousTrip() {
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#BB86FC",
      },
      type: "dark",
    },
  });
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
              City
            </Typography>
            <Typography
              className={classes.dates}
              variant='h4'
              color='inherit'
              fullWidth
              noWrap></Typography>
          </Container>
          <Drawer />
        </div>
        <Container maxWidth='lg'>
          <main>
            <Container className={classes.carousel} maxWidth='md'>
              <Carousel />
            </Container>
            <Grid container spacing={4}>
              {FavoritePlace.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
            <Grid container spacing={5} className={classes.mainGrid}>
              <Main title='From the firehose' />
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
              />
            </Grid>
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
