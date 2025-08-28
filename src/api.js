import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: { q: city, appid: API_KEY, units: "metric" }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather by city:", error);
    return null;
  }
};

export const getWeatherByCoords = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: { lat, lon, appid: API_KEY, units: "metric" }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather by location:", error);
    return null;
  }
};

export const getForecastByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: { q: city, appid: API_KEY, units: "metric" }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching forecast:", error);
    return null;
  }
};

export const getForecastByCoords = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: { lat, lon, appid: API_KEY, units: "metric" }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching forecast by location:", error);
    return null;
  }
};
