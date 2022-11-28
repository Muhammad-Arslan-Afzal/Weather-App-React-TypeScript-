import { Fragment } from "react";
import CurrentWeather from "./Components/CurrentWeather/CurrentWeather";
import AirPollution from "./Components/AirPollution/AirPollution";
function App() {
  return (
    <Fragment>
      <CurrentWeather />
      <AirPollution />
    </Fragment>
  );
}

export default App;
