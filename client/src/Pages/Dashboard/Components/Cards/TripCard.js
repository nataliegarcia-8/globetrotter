import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Route } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  link: {
    color: "#BB86FC",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    display: "flex",
    paddingTop: "35%",
    backgroundColor: "#BB86FC",
    justifyContent: "center",
  },
  cardContent: {
    flexGrow: 1,
  },
  // footer: {
  //   backgroundColor: theme.palette.background.paper,
  //   padding: theme.spacing(6),
  // },
}));
function TripCard(props) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
            
      <Card className={classes.card}>
                
        <CardMedia className={classes.cardMedia}>
                    {props.icon}
                  
        </CardMedia>
                
        <CardContent className={classes.cardContent}>
                    
          <Typography gutterBottom variant='h5' component='h2'>
                        {props.title}
                      
          </Typography>
                    
          <Typography>
                        {props.paragraph}
                      
          </Typography>
                  
        </CardContent>
                
        <CardActions>
                    
          <Route
            render={({ history }) => (
              <Button
                className={classes.link}
                size='small'
                primary='Previous Trips'
                onClick={() => {
                  history.push(props.link);
                }}>
                              {props.buttonWords}
                              
              </Button>
            )}
          />
                  
        </CardActions>
              
      </Card>
          
    </Grid>
  );
}
export default TripCard;
