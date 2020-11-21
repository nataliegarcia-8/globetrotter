import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Auth } from "aws-amplify";
import { Route, Redirect, Link } from "react-router-dom";
import RoomIcon from '@material-ui/icons/Room';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon 
      style={{
        color:"#BB86FC",
      }}>
        <RoomIcon />
      </ListItemIcon>
      <Route
        render={({ history }) => (
          <ListItemText
            primary="City, State"
            onClick={() => {
              history.push("/pasttrip");
            }}
          />
        )}
      />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <RoomIcon />
      </ListItemIcon>
      <Route
        render={({ history }) => (
          <ListItemText
            primary="City, State"
            onClick={() => {
              history.push("/pasttrip");
            }}
          />
        )}
      />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <RoomIcon />
      </ListItemIcon>
      <Route
        render={({ history }) => (
          <ListItemText
            primary="City, State"
            onClick={() => {
              history.push("/pasttrip");
            }}
          />
        )}
      />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <RoomIcon />
      </ListItemIcon>
      <Route
        render={({ history }) => (
          <ListItemText
            primary="City, State"
            onClick={() => {
              history.push("/pasttrip");
            }}
          />
        )}
      />
    </ListItem>
  </div>
);