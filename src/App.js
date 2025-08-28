import React, { useState, useEffect } from "react";
import "./App.css";
import {
  getWeatherByCity,
  getWeatherByCoords,
  getForecastByCity,
  getForecastByCoords,
} from "./api";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  // 🌍 Auto-load user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const weatherData = await getWeatherByCoords(latitude, longitude);
          const forecastData = await getForecastByCoords(latitude, longitude);
          setWeather(weatherData);
          setForecast(forecastData);
        },
        (error) => {
          console.error("Geolocation error:", error);
        }, 
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    }
  }, []);

  // 🔎 Search city
  const handleSearch = async (city) => {
    const weatherData = await getWeatherByCity(city);
    const forecastData = await getForecastByCity(city);
    setWeather(weatherData);
    setForecast(forecastData);
  };

  return (
    <div className="App">
      <h1>🌍 Weather Now</h1>
      <SearchBar onSearch={handleSearch} />
      {weather ? (
        <>
          <WeatherCard weather={weather} />
          <Forecast forecast={forecast} />
        </>
      ) : (
        <p>Loading your location’s weather...</p>
      )}
    </div>
  );
}

export default App;
