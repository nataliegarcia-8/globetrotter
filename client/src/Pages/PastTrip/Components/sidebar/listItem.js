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
