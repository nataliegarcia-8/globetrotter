import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import ScheduleIcon from "@material-ui/icons/Schedule";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  depositContext: {
    margin: theme.spacing(2, 0),
  },
  icon: {
    color: "white",
    background: "#BB86FC",
  },
  root: {
    maxHeight: 285,
    overflow: "auto",
    position: "relative",
  },
}));

export default function ActivitiesForm(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography color='textSecondary' className={classes.depositContext}>
            Add to your schedule
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='activity'
            name='activity'
            label='Activity'
            fullWidth
            onChange={props.handleOnChange}
            // autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='datetime-local'
            type='datetime-local'
            name='date'
            label='Date / Time'
            defaultValue='2017-05-24T10:30'
            fullWidth
            onChange={props.handleOnChange}
          />
        </Grid>
        <Grid container justify='center'>
      <Fab variant='extended' aria-label='add' onClick={props.handleSubmit}>
        <AddIcon />
        Add Trip
      </Fab>
    </Grid>
        <Grid item xs={12} sm={12}>
          <List className={classes.root}>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.icon}>
                  <ScheduleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary='Tour the Smithsonian'
                secondary='Jan 9, 2014'
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.icon}>
                  <ScheduleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary='Happy hour at brewery'
                secondary='Jan 7, 2014'
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.icon}>
                  <ScheduleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Hiking sesh' secondary='July 20, 2014' />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.icon}>
                  <ScheduleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Hiking sesh' secondary='July 20, 2014' />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.icon}>
                  <ScheduleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Hiking sesh' secondary='July 20, 2014' />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.icon}>
                  <ScheduleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Hiking sesh' secondary='July 20, 2014' />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.icon}>
                  <ScheduleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Hiking sesh' secondary='July 20, 2014' />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}