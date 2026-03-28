import { useState } from "react";
import Search from "./Search.jsx";
import InfoBox from "./InfoBox.jsx";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 21.12, // was FeelsLike
    humidity: 73, // was Humidity
    temp: 21.05, // was Temperature
    tempMax: 21.05, // was MaxTemperature
    tempMin: 21.05, // was MinTemperature
    weather: "Haze", // was Weather
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div>
      <h1>weather App By Prajol</h1>
      <Search updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
