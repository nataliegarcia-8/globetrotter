import React from "react";
import ReactDOM from "react-dom";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

Amplify.configure(awsconfig);

ReactDOM.render(<App />, document.getElementById("root"));
