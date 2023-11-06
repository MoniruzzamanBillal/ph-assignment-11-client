import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const UseAxios = () => {
  return axiosInstance;
};

export default UseAxios;
