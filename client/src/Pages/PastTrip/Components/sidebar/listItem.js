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
import { Auth } from "aws-amplify";
import { Route, Redirect, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import RoomIcon from '@material-ui/icons/Room';

export const mainListItems = (
  <div>
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

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>User Settings</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <PersonIcon />
//       </ListItemIcon>
//       <ListItemText primary="Account Info" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <ExitToAppIcon />
//       </ListItemIcon>
//       <ListItemText
//         primary="Logout"
//         onClick={() => {
//           Auth.signOut();
//         }}
//       ></ListItemText>
//     </ListItem>
//   </div>
// );
