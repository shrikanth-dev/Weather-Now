import React from "react";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const icon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <img src={icon} alt={weather.weather[0].description} />
      <p>🌡️ Temp: {weather.main.temp}°C</p>
      <p>☁️ {weather.weather[0].description}</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>🌬️ Wind: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
