import { FunctionComponent } from "react";

import { useCurrentPosition, useWeather } from "utils/weather";

export const Weather: FunctionComponent = () => {
  const currentPosition = useCurrentPosition();
  console.log("currentPosition", currentPosition);

  const weatherInfo = useWeather(currentPosition);
  console.log("weatherInfo", weatherInfo);

  return <div> WeatherAPI fetch result goes here! </div>;
};
