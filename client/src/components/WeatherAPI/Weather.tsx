import {
  IonItem,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
} from "@ionic/react";
import { FunctionComponent, } from "react";
import { useCurrentPosition, useWeather } from "utils/weather";
import "./Weather.css";

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
      <IonItem className="current-weather-card">
        <IonContent>
          <IonGrid id="grid-test">
            <IonRow>
              <IonCol size="8">
                <span className="location">
                  {weatherInfo.data.location.name}
                </span>
              </IonCol>
              <IonCol size="2">
                <span className="temp">
                  {`${weatherInfo.data.current.temp_c}°C`}{" "}
                </span>
              </IonCol>
              <IonCol size="2">
                <IonImg src={weatherInfo.data.current.condition.icon}></IonImg>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonItem>
    );
  }
};
