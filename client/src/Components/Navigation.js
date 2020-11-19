import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

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

function handleClick(event) {
  event.preventDefault();
}

export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label='breadcrumb' className={classes.center}>
      <Link
        color='textPrimary'
        href='/'
        onClick={handleClick}
        className={classes.link}>
        <HomeIcon className={classes.icon} />
        Home
      </Link>
      <Link
        color='textPrimary'
        href='/getting-started/installation/'
        onClick={handleClick}
        className={classes.link}>
        <ExitToAppIcon className={classes.icon} />
        Logout
      </Link>
    </Breadcrumbs>
  );
}
