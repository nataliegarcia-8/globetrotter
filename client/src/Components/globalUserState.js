import React, { useState, createContext, useEffect } from "react";
import API from "../utils/API";

import { Auth } from "aws-amplify";

export const GlobalUserState = createContext();

const UserState = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [dbId, setDbId] = useState("");
  const [globalUserData, setGlobalUserData] = useState({});

  // ---------- Use Effect hooks -------------
  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    dbUserSelect();
  }, [userId]);

  useEffect(() => {
    API.getUser(dbId).then((data) => {
        setGlobalUserData(data.data);
    });
  }, [dbId]);

  // ---------- Check cognito user and then get db user from cognito ID -------------
  const checkUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUserId(user.username);
      console.log("Cognito User Info: ", user);
    } catch (error) {
      console.log(error);
    }
  };
  const dbUserSelect = () => {
    API.getUsers().then((data) =>
      data.data.forEach((user) => {
        if (user.cognitoId === userId) setDbId(user._id);
        console.log(dbId);
      })
    );
  };

  return (
    <GlobalUserState.Provider value={[globalUserData, setGlobalUserData]}>
      {children}
    </GlobalUserState.Provider>
  );
};

export default UserState;
