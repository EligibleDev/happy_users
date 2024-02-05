import axios from "axios";

const axiosSecure = axios.create({
      // baseURL: "https://contest-hub-server-rho.vercel.app/api/v1",
      baseURL: "http://localhost:5000/api/v1",
});

export default axiosSecure;