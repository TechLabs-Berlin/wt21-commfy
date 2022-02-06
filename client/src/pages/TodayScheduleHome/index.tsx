import React, { useState } from "react";

import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButton,
  IonTitle,
  IonIcon,
  IonRow,
  IonGrid,
  IonModal,
  IonDatetime,
  IonLabel,
  IonItem,
} from "@ionic/react";
import { add } from "ionicons/icons";
import { routeArray } from "pages/RoutesDirectory/Routesdirectory";
import { timeAtom } from "utils/state";
import { selectAtom } from "utils/state";
import { useAtom } from "jotai";
import { useSchedule } from "utils/firebase";
import { useUserProfile } from "utils/state";


import "./TodayScheduleHome.css";



const TodayScheduleHome: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [newTime, setNewTime] = useAtom(timeAtom);
  const [isHidden, setIsHidden] = useState(true);
  const [scheduleArrayDisplay, setScheduleArrayDisplay] = useState([]);
  const [_, setSelected] = useAtom(selectAtom);
  const [user] = useUserProfile()

  const id = user.NO_ID_FIELD
  const { setSchedule } = useSchedule(id);


  const addToSchedule = (e) => {
    setSelected(routeArray.indexOf(e));
    setScheduleArrayDisplay([[e], ...scheduleArrayDisplay].reverse());
    const arr = routeArray[routeArray.indexOf(e)];
    const schedule = {
      time: newTime,
      routes: [{
        from: arr.props.startingPoint,
        to: arr.props.destination,
        hardness: arr.props.hardness,
        duration: arr.props.duration
      }]
    };
    setSchedule(schedule);
  };



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton onClick={() => setShowModal(!showModal)} slot="end">
            <IonIcon slot="icon-only" icon={add}>
              {" "}
            </IonIcon>
          </IonButton>
          <IonModal
            trigger="trigger-button"
            isOpen={showModal}
            breakpoints={[0.1, 0.5, 1]}
            initialBreakpoint={0.5}
          >
            <IonContent>
              <IonHeader
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <IonButton
                  onClick={() => setShowModal(false)}
                  fill="clear"
                  className="modal-cancel-button"
                >
                  cancel
                </IonButton>
                <span>Add to Schedule</span>
                <IonButton
                  fill="clear"
                  onClick={() => setIsHidden(false)}
                  className="modal-add-button"
                >
                  {" "}
                  add
                </IonButton>
              </IonHeader>
              <IonGrid>
                <IonLabel>Select Start Time:</IonLabel>
                <IonRow className="ion-justify-content-center">
                  <IonDatetime
                    presentation="time"
                    value={newTime}
                    onIonChange={(e) => setNewTime(e.detail.value)}
                  ></IonDatetime>
                </IonRow>
              </IonGrid>
              <IonItem
                button
                lines="none"
                onClick={() => addToSchedule(routeArray[0])}
              >
                {routeArray[0]}
              </IonItem>
              <IonItem
                button
                lines="none"
                onClick={() => addToSchedule(routeArray[1])}
              >
                {routeArray[1]}
              </IonItem>
              <IonItem
                button
                lines="none"
                onClick={() => addToSchedule(routeArray[2])}
              >
                {routeArray[2]}
              </IonItem>
              <IonItem
                button
                lines="none"
                onClick={() => addToSchedule(routeArray[3])}
              >
                {routeArray[3]}
              </IonItem>
              <IonItem
                button
                lines="none"
                onClick={() => addToSchedule(routeArray[4])}
              >
                {routeArray[4]}
              </IonItem>
              <IonItem
                button
                lines="none"
                onClick={() => addToSchedule(routeArray[5])}
              >
                {routeArray[5]}
              </IonItem>
            </IonContent>
          </IonModal>
          <IonIcon slot="icon-only" icon={add}></IonIcon>
          <IonTitle>Today's Schedule</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent hidden={isHidden}>{scheduleArrayDisplay}</IonContent>
    </IonPage>
  );
};

export default TodayScheduleHome;
