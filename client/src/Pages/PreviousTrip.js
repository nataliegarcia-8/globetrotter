import React from "react";
import {
    makeStyles,
    createMuiTheme,
    ThemeProvider,
  } from "@material-ui/core/styles";
  import Typography from "@material-ui/core/Typography";
  import CssBaseline from "@material-ui/core/CssBaseline";


const useStyles = makeStyles((theme) => ({
jumbotron: {
    background: 
    (props) =>
      props.color === 'purple'
        ? 'linear-gradient(45deg, #BB86FC 10%, #29025a 90%)'
        : 'linear-gradient(45deg, #BB86FC 10%, #29025a 90%)',
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

}));

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
        <main>
          {/* Hero unit */}
          <div className={classes.jumbotron}>
            <Typography
              className={classes.headline}
              component='h1'
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom>
              Previous Trips
            </Typography>
          </div>
          </main>
          </React.Fragment>
    </ThemeProvider>
  );
}