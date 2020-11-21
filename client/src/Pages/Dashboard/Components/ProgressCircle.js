import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const useStyles = makeStyles((theme) => ({
    percent: {
        fontSize: '12',
        color: '#BB86FC',
    }
  }));

function CircularProgressWithLabel(props) {
    const classes = useStyles();

    const percentage = ((props.statesBeenTo / 50) * 100);
  return (
 
<CircularProgressbar 
textColor='#BB86FC'
trailColor='#BB86FC'
value={percentage} text={`${percentage}%`} />

  )}

  export default CircularProgressWithLabel;