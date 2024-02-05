import axios from "axios";
import axiosSecure from "."

export const getWeather = async () => {
      await window.navigator.geolocation.getCurrentPosition(position => { });

      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`);
      return data;
}     