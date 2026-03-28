import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import "./Search.css";

export default function Search({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "84d5499a641f98079891ae501ee152e6";

  let getResponseData = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
      );
      let jsonResponse = await response.json();
      // console.log(jsonResponse);
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMax: jsonResponse.main.temp_max,
        tempMin: jsonResponse.main.temp_min,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };
  let handleChange = (event) => {
    setCity(event.target.value);
    // console.log(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getResponseData();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <br></br> <br></br>
        <Button variant="contained" type="submit">
          {" "}
          Search{" "}
        </Button>
        {error && (
          <p style={{ color: "red" }}>No such Location Found in the API</p>
        )}
      </form>
    </div>
  );
}
