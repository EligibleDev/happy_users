import axios from "axios";

const axiosSecure = axios.create({
      // baseURL: "https://contest-hub-server-rho.vercel.app",
      baseURL: "http://localhost:5000",
});

export default axiosSecure;