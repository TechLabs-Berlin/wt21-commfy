import React, { useRef, useState } from "react";

import { IonContent, IonPage, IonHeader, IonToolbar, IonButton, IonTitle, IonIcon, IonRow, IonCol, IonGrid, IonModal, IonDatetime } from "@ionic/react";
import { add } from 'ionicons/icons'
import RouteCardCreator from "utils/routeCardCreator";
import { useRoute } from "utils/state";


const TodayScheduleHome: React.FC = () => {

  const current = new Date();
  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });

  const [showModal, setShowModal] = useState(false);
  const [newTime, setNewTime] = useState(time)
  const [newRoute] = useRoute()





  const newSchedule = () => {
    const newCard = document.createElement("div");
    newCard.innerText = `Start: ${newTime}`;
    const body = document.querySelector("#body");
    setShowModal(false);
    return body.appendChild(newCard);
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton onClick={() => setShowModal(!showModal)} slot="end">
            <IonIcon slot="icon-only" icon={add}> </IonIcon>
          </IonButton>
          <IonModal
            trigger="trigger-button"
            isOpen={showModal}
            breakpoints={[0.1, 0.5, 1]}
            initialBreakpoint={0.5}>
            <IonContent>
              <IonHeader style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <IonButton onClick={() => setShowModal(false)} fill="clear">cancel
                </IonButton>
                Add to Schedule
                <IonButton fill="clear" onClick={() => newSchedule()}> add
                </IonButton>
              </IonHeader>
              <IonGrid>
                <IonRow className="ion-justify-content-center">
                  <IonDatetime presentation="time" value={newTime} onIonChange={(e) => setNewTime(e.detail.value)}></IonDatetime>
                </IonRow>
              </IonGrid>
              <RouteCardCreator key={2} from={newRoute.startingPoint} to={newRoute.destination} />
            </IonContent>
          </IonModal>
          <IonIcon slot="icon-only" icon={add}>
          </IonIcon>
          <IonTitle>Today's Schedule</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <div id="body"></div>Set today's schedule to get specific recommendations</IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage >
  );
};

export default TodayScheduleHome
