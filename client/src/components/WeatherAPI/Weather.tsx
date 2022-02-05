import {
  IonItem,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonSpinner,
} from "@ionic/react";
import { FunctionComponent } from "react";
import { useCurrentPosition, useWeather } from "utils/weather";
import "./Weather.css";

export const Weather: FunctionComponent = () => {
  const currentPosition = useCurrentPosition();
  console.log("currentPosition", currentPosition);

  const weatherInfo = useWeather(currentPosition);
  console.log("weatherInfo", weatherInfo);

  if (weatherInfo.loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <IonSpinner name="dots"></IonSpinner>Loading Weather Info....
        <IonSpinner name="dots"></IonSpinner>
      </div>
    );
  } else if (weatherInfo.data.loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <IonSpinner name="dots"></IonSpinner>loading Weather Info....
        <IonSpinner name="dots"></IonSpinner>
      </div>
    );
  } else {
    return (
      <IonItem className="current-weather-card">
        <IonContent className="content-wrapper">
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
