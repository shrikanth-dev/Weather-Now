import React from "react";

const Forecast = ({ forecast }) => {
  if (!forecast) return null;

  const dailyForecasts = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-grid">
        {dailyForecasts.map((day, index) => {
          const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;

          return (
            <div key={index} className="forecast-card">
              <p><b>{new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "long" })}</b></p>
              <img src={icon} alt={day.weather[0].description} />
              <p>{Math.round(day.main.temp)}°C</p>
              <p>{day.weather[0].description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
