import { FunctionComponent } from "react";
import { useWeather } from "utils/api";


export const Weather: FunctionComponent = () => {
    return (
        <div> WeatherAPI fetch result goes here! {useWeather()} </div>
    );
};
