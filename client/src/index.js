import React from "react";
import ReactDOM from "react-dom";
import Amplify from "aws-amplify";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

Amplify.configure({
  Auth: {
    region: "us-east-1",
    userPoolId: "us-east-1_O9fYnQkA9",
    userPoolWebClientId: "o0q470hl95an7murb10fabvfv",
  },
});
window.LOG_LEVEL = "DEBUG";
ReactDOM.render(<App />, document.getElementById("root"));
