import React, { useState, useEffect } from "react";
import { Authenticator } from "aws-amplify-react";
import AuthWrapper from "./AuthWrapper";
import awsconfig from "./aws-exports";
function App() {
  
      return (
        <Authenticator hideDefault={true} amplifyConfig={awsconfig}>
          <AuthWrapper/>
        </Authenticator>
      );

}

export default App;





