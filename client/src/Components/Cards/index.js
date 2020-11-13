import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TripCard from "./TripCard";
import CardInfo from "./cards";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  }

}));

export default function PlanTrip(props) {
  const classes = useStyles();
    return(
      <React.Fragment>
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth='md'>
         <Grid container spacing={5}>
      {CardInfo.map((p, i) => <TripCard key={i + '-trip'} {...p} />)}
         </Grid>
      </Container>
    </React.Fragment>
 )};
