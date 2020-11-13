import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#BB86FC",
  },
}));

export default function Title(props) {
  const classes = useStyles();
  return (
    <Typography
      component='h2'
      variant='h6'
      className={classes.title}
      gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};
