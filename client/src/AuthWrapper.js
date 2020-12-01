import React, { useState, useEffect } from "react";
import Login from "./Pages/LoginPage";
import InternalApp from "./InternalApp"

function AuthWrapper(props) {
  
    console.log("Auth State: ", props.authState)
      return (
        <div>
            <Login authState={props.authState}/>
            <InternalApp authState={props.authState} />
        </div>
      );


}

export default AuthWrapper;