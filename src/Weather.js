import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let [description, setDescription] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [displayCity, setDisplayCity] = useState(null);

  function callTemperature(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDescription(response.data.weather.description);
    setIcon({
      Icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setDisplayCity(response.data.name);
    setLoaded(true);
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
      <figure class="figure">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="..."
        />
        <figcaption class="figure-caption">
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
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Monday</th>
            <th scope="col">Tuesday</th>
            <th scope="col">Thursday</th>
            <th scope="col">Friday</th>
            <th scope="col">Friday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <img
                src="https://assets.msn.com/weathermapdata/1/static/svg/72/v5_2/card_fix_partlysunny/PartlyCloudyNightV2.svg"
                class="figure-img img-fluid rounded"
                alt="..."
              />
            </th>
            <td>
              <img
                src="https://assets.msn.com/weathermapdata/1/static/svg/72/v5_2/card_fix_partlysunny/PartlyCloudyNightV2.svg"
                class="figure-img img-fluid rounded"
                alt="..."
              />
            </td>
            <td>
              <img
                src="https://assets.msn.com/weathermapdata/1/static/svg/72/v5_2/card_fix_partlysunny/PartlyCloudyNightV2.svg"
                class="figure-img img-fluid rounded"
                alt="..."
              />
            </td>
            <td>
              <img
                src="https://assets.msn.com/weathermapdata/1/static/svg/72/v5_2/card_fix_partlysunny/PartlyCloudyNightV2.svg"
                class="figure-img img-fluid rounded"
                alt="..."
              />
            </td>
            <td>
              <img
                src="https://assets.msn.com/weathermapdata/1/static/svg/72/v5_2/card_fix_partlysunny/PartlyCloudyNightV2.svg"
                class="figure-img img-fluid rounded"
                alt="..."
              />
            </td>
          </tr>
          <tr>
            <th scope="row">10°C</th>
            <td>11°C</td>
            <td>12°C</td>
            <td>11°C</td>
            <td>11°C</td>
          </tr>
        </tbody>
      </table>
      <footer>
        Open Source coded by Priyanka in{" "}
        <a href="https://github.com/coolanjali/happy">Github</a>
      </footer>
    </div>
  );

  if (loaded) {
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
        <figure class="figure">
          <img src={icon.Icon} alt="..." />
          <figcaption class="figure-caption">
            5:10pm on Wednesday,October 26
          </figcaption>
        </figure>
        <span className="temperatureMeasure">
          {Math.round(temperature)}° <a href="/">C</a>/<a href="/">F</a>
        </span>
        <div className="heading">
          <h3>{displayCity}</h3>
          <ul>
            <li>Wind: {Math.round(wind)}%</li>
            <li>Humidity:{Math.round(humidity)} Km/h</li>
            <li>{description}</li>
          </ul>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Monday</th>
              <th scope="col">Tuesday</th>
              <th scope="col">Thursday</th>
              <th scope="col">Friday</th>
              <th scope="col">Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <img
                  src="https://assets.msn.com/weathermapdata/1/static/svg/72/v5_2/card_fix_partlysunny/PartlyCloudyNightV2.svg"
                  class="figure-img img-fluid rounded"
                  alt="..."
                />
              </th>
              <td>
                <img
                  src="https://assets.msn.com/weathermapdata/1/static/svg/72/v5_2/card_fix_partlysunny/PartlyCloudyNightV2.svg"
                  class="figure-img img-fluid rounded"
                  alt="..."
                />
              </td>
              <td>
                <img
                  src="https://assets.msn.com/weathermapdata/1/static/svg/72/v5_2/card_fix_partlysunny/PartlyCloudyNightV2.svg"
                  class="figure-img img-fluid rounded"
                  alt="..."
                />
              </td>
              <td>
                <img
                  src="https://assets.msn.com/weathermapdata/1/static/svg/72/v5_2/card_fix_partlysunny/PartlyCloudyNightV2.svg"
                  class="figure-img img-fluid rounded"
                  alt="..."
                />
              </td>
              <td>
                <img
                  src="https://assets.msn.com/weathermapdata/1/static/svg/72/v5_2/card_fix_partlysunny/PartlyCloudyNightV2.svg"
                  class="figure-img img-fluid rounded"
                  alt="..."
                />
              </td>
            </tr>
            <tr>
              <th scope="row">10°C</th>
              <td>11°C</td>
              <td>12°C</td>
              <td>11°C</td>
              <td>11°C</td>
            </tr>
          </tbody>
        </table>
        <footer>
          Open Source coded by Priyanka in{" "}
          <a href="https://github.com/coolanjali/happy">Github</a>
        </footer>
      </div>
    );
  } else {
    return Weather;
  }
}