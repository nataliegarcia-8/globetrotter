import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
// import tileData from './tileData';
import image1 from "../../CurrentTrip/Components/ImgGrid/Chicago1.jpg";
import image2 from "../../CurrentTrip/Components/ImgGrid/Chicago2.jpg";
import image3 from "../../CurrentTrip/Components/ImgGrid/Chicago3.jpg";
import image4 from "../../CurrentTrip/Components/ImgGrid/Chicago4.jpg";
import image5 from "../../CurrentTrip/Components/ImgGrid/Chicago5.jpg";
import image6 from "../../CurrentTrip/Components/ImgGrid/Chicago6.jpg";

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
const tileData = [
  {
    img: image1,
    cols: 1,
  },
  {
    img: image2,
    cols: 2,
  },
  {
    img: image3,
    cols: 3,
  },
  {
    img: image4,
    cols: 1,
  },
  {
    img: image5,
    cols: 1,
  },
  {
    img: image6,
    cols: 1,
  },
];
export default function ImageGridList(props) {
  const classes = useStyles();

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
}
