import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  styling: {
    margin: theme.spacing(6),
    border: " 2px solid #BB86FC",
    color: "white",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "#BB90FF",
      color: "#121212",
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtonSize(props) {
  const classes = useStyles();

  return (
    <Grid container justify='center'>
      <Fab variant='extended' aria-label='add' className={classes.styling} onClick={props.handleSubmit}>
        <AddIcon className={classes.extendedIcon} />
        Add Trip
      </Fab>
    </Grid>
  );
}
