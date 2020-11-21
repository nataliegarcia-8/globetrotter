import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Route, Redirect, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
    color: "#BB86FC",
    "&:hover": {
      color: "#BB90FF",
    },
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
    color: "#BB86FC",
    "&:hover": {
      color: "#BB90FF",
    },
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <div className={classes.center}>
      <Route
        render={({ history }) => (
          <Link
            color='textPrimary'
            href='localhost:3000/'
            onClick={() => {
              history.push("/");
            }}
            className={classes.link}>
            <HomeIcon className={classes.icon} />
            Home
          </Link>
        )}
      />
    </div>
  );
}
