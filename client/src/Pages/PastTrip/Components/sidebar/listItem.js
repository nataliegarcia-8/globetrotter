import React, { useEffect } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Auth } from "aws-amplify";
import { Route, Redirect, Link } from "react-router-dom";
import RoomIcon from "@material-ui/icons/Room";

export default function MainListItems(props) {
  useEffect(() => {
    console.log("listItem.js", props.trips);
  }, [props.trips]);

  const renderPastTripList = () => {
    if (props.trips.length > 1) {
      return props.trips.map((trip, i) => (
        <ListItem button
        key={i}>
          <ListItemIcon
            style={{
              color: "#BB86FC",
            }}
          >
            <RoomIcon />
          </ListItemIcon>


          <ListItemText
            primary={trip.city + ", " + trip.state}
            value={trip._id}
            
            onClick={() => {
              props.handleClick(trip._id);
            }}
          />
        </ListItem>
      ));
    } else {
      return;
    }
  };
  return <div>
    {renderPastTripList()}
    {/* <ListItem button>
          <ListItemIcon
            style={{
              color: "#BB86FC",
            }}
          >
            <RoomIcon />
          </ListItemIcon>
          <ListItemText
            primary="City, State"
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon
            
          >
            <RoomIcon />
          </ListItemIcon>
          <ListItemText
            primary="City, State"
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon
            
          >
            <RoomIcon />
          </ListItemIcon>
          <ListItemText
            primary="City, State"
          />
        </ListItem> */}
  </div>;
}
