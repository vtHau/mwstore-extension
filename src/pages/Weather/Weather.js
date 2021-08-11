import React, { useState, useEffect } from "react";
import moment from "moment";

import { fetchWeather } from "./../../actions/actions";
import "./WeatherStyle.css";
import humidity from "./../../assets/image/weather/humidity.png";
import icon from "./../../assets/image/weather/icon.png";
import sunrise from "./../../assets/image/weather/sunrise.png";
import sunset from "./../../assets/image/weather/sunset.png";
import thermometer from "./../../assets/image/weather/thermometer.png";
import wind from "./../../assets/image/weather/wind.png";

function Home(props) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function getWeather() {
      const res = await fetchWeather();
      if (res !== false) {
        setWeather(res);
      } else {
        setWeather(null);
      }
    }

    getWeather();
  }, []);

  return (
    <div className="page-trans">
      {weather !== null ? (
        <div className="row weather">
          <p className="weather-city">
            {weather.name} {`${moment(weather.dt * 1000).format("DD/MM/YYYY")}`}{" "}
          </p>
          <div className="weather-content">
            <div className="box-temp">
              <img className="img-weather icon-temp" src={thermometer} alt="" />
              <p className="text-temp">{`${weather.main.temp}°C`}</p>
            </div>
            <div className="box-weather-common">
              <div className="row-weather">
                <div className="col-weather">
                  <img className="img-weather" src={humidity} alt="" />
                  <p className="weather-info-text humidity">{`${weather.main.humidity}%`}</p>
                </div>
                <div className="col-weather mal">
                  <img className="img-weather" src={wind} alt="" />
                  <p className="weather-info-text speed">{`${weather.wind.speed} m/s`}</p>
                </div>
              </div>
              <div className="row-weather">
                <div className="col-weather">
                  <img className="img-weather" src={sunrise} alt="" />
                  <p className="weather-info-text sunrise">{`${moment(
                    weather.sys.sunrise * 1000
                  ).format("hh:mm A")}`}</p>
                </div>
                <div className="col-weather mal">
                  <img className="img-weather" src={sunset} alt="" />
                  <p className="weather-info-text sunset">{`${moment(
                    weather.sys.sunset * 1000
                  ).format("hh:mm A")}`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No infomation</p>
      )}
    </div>
  );
}

export default Home;
