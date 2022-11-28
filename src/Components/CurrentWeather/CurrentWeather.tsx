import React, { Fragment, useRef, useState } from "react";
import ShowWeatherStatus from "../ShowWeatherStatus/ShowWeatherStatus";
import classes from "./CurrentWeather.module.css";

// type finalWeatherData = {
//   feels_like: number;
//   grnd_level: number;
//   humidity: number;
//   pressure: number;
//   sea_level: number;
//   temp: number;
//   temp_max: number;
//   temp_min: number;
// };

const CurrentWeather: React.FC = (props) => {
  const cityNameInput = useRef<HTMLInputElement>(null);
  const [showWeather, setShowWeather] = useState(false);
  const [weatherDetail, setweatherDetail] = useState<{ [key: string]: any }>(
    {}
  );

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cityName = cityNameInput.current?.value;
    (async function () {
      try {
        const firstResponse = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=b3e46639f1dcd4c1cbeddaa5b42bb6a2`
        );
        const locationData = await firstResponse.json();
        const latValue = await locationData[0].lat;
        const lonValue = await locationData[0].lon;

        const secondResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latValue}&lon=${lonValue}&appid=b3e46639f1dcd4c1cbeddaa5b42bb6a2`
        );

        const weatherInformation = await secondResponse.json();
        console.log(weatherInformation);
        setweatherDetail(weatherInformation);
        // const finalWeatherData = weatherInformation.main;
        // console.log(finalWeatherData);
        // console.log(weatherDetail);

        setShowWeather(true);
      } catch (e) {
        console.log(e);
      }
    })();
  };

  return (
    <Fragment>
      <div className={classes.main}>
        <form onSubmit={submitHandler}>
          <input ref={cityNameInput} placeholder="Enter a valid city name" />
          <button>Find Weather</button>
        </form>

        {/* {showWeather && <p>{weatherDetail.main.temp}</p>} */}
        {showWeather && <ShowWeatherStatus onShow={weatherDetail} />}
      </div>
    </Fragment>
  );
};

export default CurrentWeather;

// const [employee, setEmployee] = useState<{ name: string; salary: number }>({
//   name: "",
//   salary: 0,
// });

// const [employee, setEmployee] = useState<{
//   name: string;
//   salary?: number;
// }>({
//   name: "",
// });

// const [employee, setEmployee] = useState<{ [key: string]: any }>({});
