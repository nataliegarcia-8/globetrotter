import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import CardTravelIcon from "@material-ui/icons/CardTravel";
import EventIcon from "@material-ui/icons/Event";
import { Route, Redirect, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
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
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div className={classes.center}>
      <Grid container spacing={3}>
      <Grid item xs={12} md={4} lg={4}>
      <Route
        render={({ history }) => (
          <Button
          fullWidth
            variant='contained'
            color='primary'
            size='large'
            onClick={() => {
              history.push("/pasttrip");
            }}
            className={classes.button}
            startIcon={<EventIcon />}>
            Previous Trips
          </Button>
        )}
      />
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
      <Route
        render={({ history }) => (
          <Button
          fullWidth
            variant='contained'
            color='primary'
            size='large'
            onClick={() => {
              history.push("/currenttrip");
            }}
            className={classes.button}
            startIcon={<CardTravelIcon />}>
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
            variant='contained'
            color='primary'
            size='large'
            onClick={() => {
              history.push("/plantrip");
            }}
            className={classes.button}
            startIcon={<SpeakerNotesIcon />}>
            Plan A Trip
          </Button>
        )}
      />
    </Grid>
    </Grid>
    </div>
  );
}
