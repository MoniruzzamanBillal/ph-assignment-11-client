import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://resto-server11.vercel.app",
  withCredentials: true,
});

const UseAxios = () => {
  return axiosInstance;
};

export default UseAxios;
