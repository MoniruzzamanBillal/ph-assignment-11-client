import React, { useContext } from "react";
import { AppContext } from "../Context/AuthContext";

const UseAuthContext = () => {
  return useContext(AppContext);
};

export default UseAuthContext;
