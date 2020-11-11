import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Auth } from "aws-amplify";
import Globe from "../Components/Globe";
import Button from "@material-ui/core/Button";



const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  
  function Dashboard() {
    const classes = useStyles();
  return (
    // <div>
    //   <h1>Hello!</h1>
    //   <Globe />
    //   <Button
    //     type="sign out"
    //     fullWidth
    //     variant="contained"
    //     color="primary"
    //     className={classes.submit}
    //     onClick={() => {
    //       Auth.signOut();
    //     }}
    //   >
    //     Sign out
    //   </Button>
    // </div>
    <div>
      <h2>Dashboard</h2>
      <form>
      <div className="form-input">
        <input 
        type="text"
        name="title"
        value=""
        onChange={2}
        />
      </div>
<div className="form-input">
  <textarea name="body" cols="30" rows="10" value="" onChange={2}></textarea>
</div>
<button>Submit</button>
      </form>
    </div>
  );
}

export default Dashboard;
