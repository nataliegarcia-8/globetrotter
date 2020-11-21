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
import CheckIcon from "@material-ui/icons/Check";

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

export default function AddressForm() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography color='textSecondary' className={classes.depositContext}>
            Check out what you did in City!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <List className={classes.root}>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.icon}>
                  <CheckIcon />
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
                  <CheckIcon />
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
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Hiking sesh' secondary='July 20, 2014' />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.icon}>
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Hiking sesh' secondary='July 20, 2014' />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.icon}>
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Hiking sesh' secondary='July 20, 2014' />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.icon}>
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Hiking sesh' secondary='July 20, 2014' />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.icon}>
                  <CheckIcon />
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
