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
    IonDatetime


} from "@ionic/react";
import { useRedirect } from "utils/redirect";
import { useRoute } from "utils/state";


import { routes } from "utils/routes";

import RouteCardCreator from "utils/routeCardCreator/routeCardCreator"




export const routeArray = [
    <RouteCardCreator startingPoint="Home" destination="Work" hardness="heavy" duration="35" />,
    <RouteCardCreator startingPoint="Work" destination="Home" hardness="heavy" duration="35" />,
    <RouteCardCreator startingPoint="Home" destination="Grocery" hardness="normal" duration="10" />,
    <RouteCardCreator startingPoint="Home" destination="Granny" hardness="normal" duration="15" />,
    <RouteCardCreator startingPoint="Granny" destination="Home" hardness="normal" duration="15" />,
    <RouteCardCreator startingPoint="Home" destination="Gym" hardness="heavy" duration="35" />,
]



const Routesdirectory: React.FC = () => {
    const { redirect } = useRedirect();
    const [showModal, setShowModal] = useState(false);
    const [user] = useUserProfile();
    console.log("user", user);

    const [newRoute] = useRoute()
    console.log("new route", newRoute)





    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton onClick={() => redirect(routes.profile.home)} slot="start" fill="clear">
                        <IonIcon slot="icon-only" icon={chevronBack}> </IonIcon>
                    </IonButton>
                    <IonTitle style={{ textAlign: "center" }}>My Routes</IonTitle>
                    <IonButton onClick={() => setShowModal(true)} slot="end" fill="clear">
                        <IonIcon slot="icon-only" icon={add}> </IonIcon>
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonModal
                    trigger="trigger-button"
                    isOpen={showModal}
                    breakpoints={[0.1, 0.5, 1]}
                    initialBreakpoint={0.5}>
                    <IonHeader style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <IonButton onClick={() => setShowModal(false)} fill="clear">
                            cancel
                        </IonButton>
                        Add Route
                        <IonButton fill="clear">
                            add
                        </IonButton>
                    </IonHeader>
                    <IonContent>
                        <IonItem>
                            <IonLabel> From </IonLabel>
                            <IonInput value={newRoute.startingPoint} placeholder="Enter Startingpoint" onIonChange={e => newRoute.startingPoint = `${e.detail.value!}`}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel> From </IonLabel>
                            <IonInput value={newRoute.destination} placeholder="Enter Destination" onIonChange={e => newRoute.destination = `${e.detail.value!}`}></IonInput>
                        </IonItem>

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
                        <IonLabel> Duration:</IonLabel>
                        <IonGrid>
                            <div style={{ textAlign: "center" }}>
                                Hours Minutes
                            </div>
                            <IonRow className="ion-justify-content-center">
                                <IonDatetime value="00:00" presentation="time" ></IonDatetime>
                            </IonRow>
                        </IonGrid>
                    </IonContent>
                </IonModal>

                {routeArray}

            </IonContent >
        </IonPage >
    );
};

export { Routesdirectory };
