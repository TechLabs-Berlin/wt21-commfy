import React, { useRef, useState } from "react";

import { IonContent, IonPage, IonHeader, IonToolbar, IonButton, IonTitle, IonIcon, IonRow, IonCol, IonGrid, IonModal, IonDatetime } from "@ionic/react";
import { add } from 'ionicons/icons'


const TodayScheduleHome: React.FC = () => {
  const [showModal, setShowModal] = useState(false);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton onClick={() => setShowModal(true)} slot="end">
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
                <IonButton fill="clear">add
                </IonButton>
              </IonHeader>
              <IonGrid>
                <IonRow className="ion-justify-content-center">
                  <IonDatetime presentation="time"></IonDatetime>
                </IonRow>
              </IonGrid>
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
            <IonCol>Set today's schedule to get specific recommendations</IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage >
  );
};

export default TodayScheduleHome;
