import React, { useState, useEffect } from "react";

const WeatherCard = ({ tempInfo }) => {
  const [weatherState, setweatherState] = useState("");

  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setweatherState("wi-day-cloudy");
          break;
        case "Haze":
          setweatherState("wi-fog");
          break;
        case "Clear":
          setweatherState("wi-day-Sunny");
          break;
        case "Rain":
          setweatherState("wi-day-Rainy");
          break;

        default:
          setweatherState("wi-day-Sunny");
          break;
      }
    }
  }, [weathermood]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      {/* main div with weather details starts  */}

      <article className="widget">
        {/* //icon div starts  */}
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        {/* //icon div ends  */}
        {/* // weather detail div starts */}
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name},{country}
            </div>
          </div>
        </div>
        {/* // weather detail div ends */}

        {/* date and time div starts  */}

        <div className="date">{new Date().toLocaleString()}</div>

        {/* date and time div ends  */}

        {/* our four colmn section of weather data starts */}

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity}
                <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed}km/hr
                <br />
                Speed
              </p>
            </div>
          </div>
        </div>

        {/* our four colmn section of weather data ends */}
      </article>

      {/* main div with weather details ends  */}
    </>
  );
};

export default WeatherCard;
