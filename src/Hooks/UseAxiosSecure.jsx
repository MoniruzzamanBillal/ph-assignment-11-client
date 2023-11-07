import React from "react";
import axios from "axios";
import UseAuthContext from "./UseAuthContext";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const UseAxiosSecure = () => {
  const { logout } = UseAuthContext();

  axiosSecure.interceptors.response.use(
    (res) => res,
    (error) => {
      console.log(error);
      //   console.log(error.response.status);
      if (error.response.status === 401 || error.response.status === 403) {
        logout()
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        console.log("logout the user ");

        axios
          .get("http://localhost:5000/logout")
          .then((res) => console.log(res))
          .catch((error) => console.log(error));
      }
    }
  );

  return axiosSecure;
};

export default UseAxiosSecure;
