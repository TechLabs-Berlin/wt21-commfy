import { bicycle, trash } from "ionicons/icons";
import { Route } from "types/Route";
import { timeAtom } from "utils/state";

import {
  IonItem,
  IonCard,
  IonIcon,
  IonRow,
  IonGrid,
  IonCol,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonLabel,
} from "@ionic/react";
import "./style.css";
import { useAtom } from "jotai";

const RouteCardCreator = (props: Route) => {
  const [time] = useAtom(timeAtom);

  return (
    <IonItemSliding>
      <IonItem className="item-wrapper">
        <IonLabel className="label-wrapper">
          <IonCard>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <h1>{props.startingPoint}</h1>
                </IonCol>
                <IonCol style={{ textAlign: "center" }}>
                  <IonIcon icon={bicycle} size="large" />
                </IonCol>
                <IonCol>
                  <h1>{props.destination}</h1>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>{time !== "00:00" ? "Start: " + `${time}` : ""}</IonCol>
                <IonCol
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    fontSize: "16px",
                  }}
                >
                  <div className={`${props.hardness}Icon`}>
                    <IonIcon icon={bicycle} />
                  </div>
                  <span className="route-duration">{` ${props.duration} Minutes`}</span>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
        </IonLabel>
      </IonItem>
      <IonItemOptions>
        <IonItemOption color="danger" onClick={() => console.log("clicked")}>
          <IonIcon slot="end" icon={trash} size="large" />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default RouteCardCreator;
