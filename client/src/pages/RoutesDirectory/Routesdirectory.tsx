import { useUserProfile } from "utils/state";
import React, { useRef, useState } from "react";
import { bicycle, add, chevronBack } from "ionicons/icons";

import {
  IonContent,
  IonItem,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonButton,
  IonModal,
  IonInput,
  IonLabel,
  IonSegmentButton,
  IonSegment,
  IonGrid,
  IonRow,
  IonDatetime,
} from "@ionic/react";
import { useRedirect } from "utils/redirect";
import { useRoute } from "utils/state";

import { routes } from "utils/routes";

import RouteCardCreator from "components/RouteCardCreator";

import "./Routesdirectory.css";

export const routeArray = [
  <RouteCardCreator
    key={1}
    startingPoint="Home"
    destination="Work"
    hardness="heavy"
    duration="35"
  />,
  <RouteCardCreator
    key={2}
    startingPoint="Work"
    destination="Home"
    hardness="heavy"
    duration="35"
  />,
  <RouteCardCreator
    key={3}
    startingPoint="Home"
    destination="Grocery"
    hardness="normal"
    duration="10"
  />,
  <RouteCardCreator
    key={4}
    startingPoint="Home"
    destination="Granny"
    hardness="normal"
    duration="15"
  />,
  <RouteCardCreator
    key={5}
    startingPoint="Granny"
    destination="Home"
    hardness="normal"
    duration="15"
  />,
  <RouteCardCreator
    key={6}
    startingPoint="Home"
    destination="Gym"
    hardness="heavy"
    duration="35"
  />,
];

// Routesdirectory component is the archetype functionality of creating new biking routes.
// To reduce complexity, the MVP only features predefined routes in a route array, so at this stage the adding routes functionality in the modal does not render results.

const Routesdirectory: React.FC = () => {
  const { redirect } = useRedirect();
  const [showModal, setShowModal] = useState(false);
  const [user] = useUserProfile();
  console.log("user", user);

  const [newRoute] = useRoute();
  console.log("new route", newRoute);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton
            onClick={() => redirect(routes.profile.home)}
            slot="start"
            fill="clear"
          >
            <IonIcon slot="icon-only" icon={chevronBack}>
              {" "}
            </IonIcon>
          </IonButton>
          <IonTitle>My Routes</IonTitle>
          <IonButton onClick={() => setShowModal(true)} slot="end" fill="clear">
            <IonIcon slot="icon-only" icon={add}>
              {" "}
            </IonIcon>
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonModal
          trigger="trigger-button"
          isOpen={showModal}
          breakpoints={[0.1, 0.5, 1]}
          initialBreakpoint={0.5}
        >
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
            <span>Add Route</span>
            <IonButton fill="clear" className="modal-add-button">
              add
            </IonButton>
          </IonHeader>
          <IonContent>
            <IonItem>
              <IonLabel> From </IonLabel>
              <IonInput
                value={newRoute.startingPoint}
                placeholder="Enter Startingpoint"
                onIonChange={(e) =>
                  (newRoute.startingPoint = `${e.detail.value!}`)
                }
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel> From </IonLabel>
              <IonInput
                value={newRoute.destination}
                placeholder="Enter Destination"
                onIonChange={(e) =>
                  (newRoute.destination = `${e.detail.value!}`)
                }
              ></IonInput>
            </IonItem>
            <br></br>
            <IonLabel> Hardness:</IonLabel>
            <IonSegment id="hardness">
              <IonSegmentButton value={"heavy"}>
                <IonIcon icon={bicycle} className="heavyIcon" />
              </IonSegmentButton>
              <IonSegmentButton value={"normal"}>
                <IonIcon icon={bicycle} className="normalIcon" />
              </IonSegmentButton>
              <IonSegmentButton value={"easy"}>
                <IonIcon icon={bicycle} className="easyIcon" />
              </IonSegmentButton>
            </IonSegment>
            <br></br>
            <IonLabel> Duration:</IonLabel>
            <IonGrid>
              <div style={{ textAlign: "center" }}>Hours Minutes</div>
              <IonRow className="ion-justify-content-center">
                <IonDatetime value="00:00" presentation="time"></IonDatetime>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonModal>
        {routeArray}
      </IonContent>
    </IonPage>
  );
};

export { Routesdirectory };
