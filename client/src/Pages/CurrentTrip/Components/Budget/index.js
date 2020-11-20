import React, {useState} from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "../../../../Components/Title/index";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  balance: {
    color: "#BB86FC",
  },
});

export default function Deposits(props) {


  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component='p' variant='h4'>
        ${props.budget}
      </Typography>
    </React.Fragment>

  );
}