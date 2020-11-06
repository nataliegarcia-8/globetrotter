import React, { useState, useEffect } from "react";
import Globe from "../Globe";
import { Auth } from "aws-amplify";
import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";
import config from "../aws-exports";
Amplify.configure(config);

function LandingPage() {
  const [email, setEmail] = useState("");
  const [something, setSomething] = useState('')

  // useEffect(() => {
  //   Auth.currentUserInfo()
  //     .then((data) => {
  //       setEmail(data.attributes.email);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const onSignOutClick = () => {
    setSomething("something")
    Auth.signOut()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  const submit = () => {
    setSomething("something")
  };

  return (
    <>
      <h1>Hello {something}</h1>
      <Globe />
      <button onClick={onSignOutClick}>Sign Out</button>
      <button onClick={submit}>asas</button>

    </>
  );
}

export default withAuthenticator(LandingPage, {
  usernameAttributes: "email",
  signUpConfig: {
    hiddenDefaults: ["phone_number"],
  },
});
