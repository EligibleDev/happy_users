import axios from "axios";

const axiosSecure = axios.create({
      baseURL: "https://happy-users-server.vercel.app/api/v1",
      // baseURL: "http://localhost:5000/api/v1",
});

export default axiosSecure;