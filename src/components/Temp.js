import React, { useState, useEffect } from "react";

import "./style.css";
import WeatherCard from "./WeatherCard";

const Temp = () => {
  const [searchValue, setsearchValue] = useState("Mumbai");

  const [tempInfo, settempInfo] = useState({})

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=d5b3031d793cd247d30322ebde7b69cd`;

      const res = await fetch(url);

      const data = await res.json();

      const { temp, humidity, pressure } = data.main;

      const { main: weathermood } = data.weather[0];

      const { name } = data;

      const { speed } = data.wind;

      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };


      settempInfo(myNewWeatherInfo)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      {/* search part div starts  */}
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            className="searchTerm"
            placeholder="Enter City"
            name=""
            id="search"
            autoFocus
            value={searchValue}
            onChange={(event) => setsearchValue(event.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>
      {/* search part div ends */}

     

<WeatherCard  tempInfo={tempInfo}    />





    </>
  );
};

export default Temp;
