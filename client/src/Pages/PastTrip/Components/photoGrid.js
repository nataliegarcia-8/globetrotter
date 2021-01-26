import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
// import tileData from './tileData';

import { el } from "date-fns/locale";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 600,
    height: 475,
  },
}));

export default function ImageGridList(props) {
  const classes = useStyles();
if(props.photos){

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {props.photos.map((photo) => (
          <GridListTile key={photo.photo} cols={ 1}>
            <img src={photo.photo} alt={"photo"} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
} else {
  return null
}
}
