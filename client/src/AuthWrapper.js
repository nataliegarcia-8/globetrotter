import React, { useState, useEffect } from "react";
import Login from "./Pages/LoginPage";
import InternalApp from "./InternalApp"

function AuthWrapper(props) {
  
    console.log("Auth State: ", props.authState)
      return (
        <div>
            <Login authState={props.authState} onStateChange={props.onStateChange}/>
            <InternalApp authState={props.authState} onStateChange={props.onStateChange}/>
        </div>
      );


}

export default AuthWrapper;