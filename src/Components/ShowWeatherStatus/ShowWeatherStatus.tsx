import React, { Fragment } from "react";
import classes from "./ShowWeatherStatus.module.css";

const ShowWeatherStatus: React.FC<{ onShow: { [key: string]: any } }> = (
  props
) => {
  const currentTemp = props.onShow.main.temp;
  const minTemp = props.onShow.main.temp_min;
  const maxTemp = props.onShow.main.temp_max;
  const humidity = props.onShow.main.humidity;
  const windSpeed = props.onShow.wind.speed;
  const weatherCondition = props.onShow.weather[0].main;
  const weatherIcon = props.onShow.weather[0].icon;
  // const currentTemp = props.onShow.temp;

  const tempCalculator = (input: number): number => {
    // C = K - 273.15;
    return Math.round(input - 273.15);
  };

  return (
    <Fragment>
      <div className={classes.main}>
        {/* -------------- */}
        <div className={classes.tempStatus}>
          <img src={`http://openweathermap.org/img/w/${weatherIcon}.png`} />

          <div className={classes.tempValnUnit}>
            <span className={classes.tempValue}>
              {tempCalculator(currentTemp)}
            </span>

            <span className={classes.tempUnit}>
              <sup>o</sup>C
            </span>
          </div>
        </div>

        {/* <div>
          <span>Current Temperature </span>
          {tempCalculator(currentTemp)}
          <sup>
            <WiDegrees />C
          </sup>
        </div> */}
        <div>
          <span className={classes.weatherTitle}>Weather Condition</span>
          <span className={classes.weatherCondition}> {weatherCondition}</span>
        </div>
        <div>
          <span className={classes.weatherTitle}>Minimum Temperature </span>
          <span className={classes.weatherCondition}>
            {" "}
            {tempCalculator(minTemp)}
          </span>
        </div>
        <div>
          <span className={classes.weatherTitle}>Maximum Temperature </span>
          <span className={classes.weatherCondition}>
            {" "}
            {tempCalculator(maxTemp)}
          </span>
        </div>

        <div>
          <span className={classes.weatherTitle}>Humidity</span>{" "}
          <span className={classes.weatherCondition}>{`${humidity} %`}</span>
        </div>
        <div>
          <span className={classes.weatherTitle}>Wind Speed</span>{" "}
          <span className={classes.weatherCondition}>{`${windSpeed} m/s`}</span>
        </div>
      </div>
    </Fragment>
  );
};

export default ShowWeatherStatus;
