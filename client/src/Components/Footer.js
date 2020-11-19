import React from "react";

import Typography from "@material-ui/core/Typography";
import Copyright from "./Copyright";
import Navigation from "./Navigation";

function Footer() {
  return (
    <footer>
      <Typography variant='h6' align='center' component='p'>
        Your Next Adventure Awaits
      </Typography>
      <Copyright />
    </footer>
  );
}
export default Footer;
