import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EventIcon from "@material-ui/icons/Event";
import CardTravelIcon from "@material-ui/icons/CardTravel";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import PersonIcon from "@material-ui/icons/Person";
import LayersIcon from "@material-ui/icons/Layers";
import { Auth } from "aws-amplify";
import { Redirect, Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary='Dashboard' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EventIcon />
      </ListItemIcon>
      <ListItemText primary='Previous Trips' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CardTravelIcon />
      </ListItemIcon>
      <ListItemText primary='Current Trip' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SpeakerNotesIcon />
      </ListItemIcon>
      <ListItemText primary='Plan Trip' />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>User Settings</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary='Account Info' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText
        primary='Logout'
        onClick={() => {
          Auth.signOut();
          <Redirect to='/' />;
        }}></ListItemText>
    </ListItem>
  </div>
);
