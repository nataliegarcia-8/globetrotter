import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import CardTravelIcon from "@material-ui/icons/CardTravel";
import EventIcon from "@material-ui/icons/Event";
import { Route, Redirect, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    color: "white",
    backgroundColor: "#BB86FC",
    "&:hover": {
      backgroundColor: "#BB90FF",
    },
    width: "325px",
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
      <Route
        render={({ history }) => (
          <Button
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

      <Route
        render={({ history }) => (
          <Button
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

      <Route
        render={({ history }) => (
          <Button
            variant='contained'
            color='primary'
            size='large'
            onClick={() => {
              history.push("/plantrip");
            }}
            className={classes.button}
            startIcon={<SpeakerNotesIcon />}>
            Plan Trip
          </Button>
        )}
      />
    </div>
  );
}
