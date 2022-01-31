import { IonItem, IonImg } from "@ionic/react";
import { FunctionComponent } from "react";

import { useCurrentPosition, useWeather } from "utils/weather";

export const Weather: FunctionComponent = () => {
  const currentPosition = useCurrentPosition();
  console.log("currentPosition", currentPosition);

  const weatherInfo = useWeather(currentPosition);
  console.log("weatherInfo", weatherInfo);



  if (weatherInfo.loading) {
    return <div> loading Weather Info....</div>;
  } else if (weatherInfo.data.loading) {
    return <div> loading Weather Info....</div>;
  } else {
    return (
      <IonItem>
        {weatherInfo.data.location.name} {`${weatherInfo.data.current.temp_c}°C`} <IonImg src={weatherInfo.data.current.condition.icon}></IonImg>
      </IonItem>
    )
  }
};
