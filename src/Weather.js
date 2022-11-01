import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather(props) {
  let [city, setCity] = useState("");
  let [weatherdata, controlWeather]= useState({ready:false});

  function callTemperature(response,props) {
    controlWeather({
      ready:true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,

    })
    
  }
  function changeForm(event) {
    event.preventDefault();
    let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(callTemperature);
  }
  function changeCity(event) {
    setCity(event.target.value);
  }

  let Weather = (
    <div className="container">
      <h2>Searching for City Weather ....</h2>
      <form className="formControl" onSubmit={changeForm}>
        <input
          type="search"
          placeholder="Enter city name"
          onChange={changeCity}
        />
        <input type="submit" placeholder="Search" className="btn btn-primary" />
      </form>
      <figure className="figure">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="..."
        />
        <figcaption className="figure-caption">
          5:10pm on Wednesday,October 26
        </figcaption>
      </figure>
      <span className="temperatureMeasure">
        10° <a href="/">C</a>/<a href="/">F</a>
      </span>
      <div className="heading">
        <h3>Paris</h3>
        <ul>
          <li>Wind:50%</li>
          <li>Humidity:12 Km/h</li>
          <li>Cloudy</li>
        </ul>
      </div>
      <footer>
        Open Source coded by Priyanka in{" "}
        <a href="https://github.com/coolanjali/happy">Github</a>
      </footer>
    </div>
  );

  if (weatherdata.ready) {
    return (
      <div className="container">
        <h2>Searching for City Weather ....</h2>
        <form className="formControl" onSubmit={changeForm}>
          <input
            type="search"
            placeholder="Enter city name"
            onChange={changeCity}
          />
          <input
            type="submit"
            placeholder="Search"
            className="btn btn-primary"
          />
        </form>
        <figure className="figure">
          <img src={weatherdata.icon} alt="..." />
          <figcaption className="figure-caption">
          </figcaption>
        </figure>
        <span className="temperatureMeasure">
          {Math.round(weatherdata.temperature)}° <a href="/">C</a>/<a href="/">F</a>
        </span>
        <div className="heading">
          <h3>{city}</h3>
          <ul>
            <li>Wind: {Math.round(weatherdata.wind)}%</li>
            <li>Humidity:{Math.round(weatherdata.humidity)} Km/h</li>
            <li>{weatherdata.description}</li>
          </ul>
        </div>
        <footer>
          Open Source coded by Priyanka in{" "}
          <a href="https://github.com/coolanjali/happy">Github</a>
        </footer>
      </div>
    );
  } else {
    Weather();
    return "loading...";
  }
}