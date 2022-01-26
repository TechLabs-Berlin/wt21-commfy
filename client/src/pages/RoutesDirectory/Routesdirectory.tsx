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
    IonLabel

} from "@ionic/react";
import { useRedirect } from "utils/redirect";
import { useRoute } from "utils/state";

import { routes } from "utils/routes";
import RouteCardCreator from "utils/routeCardCreator"



const Routesdirectory: React.FC = () => {
    const { redirect } = useRedirect();
    const [showModal, setShowModal] = useState(false);
    const [user] = useUserProfile();
    console.log("user", user);

    const [newRoute] = useRoute()
    console.log("new route", newRoute)
    const [displayRoute, setDisplayRoute] = useState([])


    const addNewRoute = () => {
        setDisplayRoute([<RouteCardCreator key={displayRoute.length + 1} from={newRoute.startingPoint} to={newRoute.destination} />, ...displayRoute])

    }

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
                        <IonButton onClick={() => addNewRoute()} fill="clear">
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
                    </IonContent>
                </IonModal>
                {displayRoute}
            </IonContent>
        </IonPage>
    );
};

export { Routesdirectory };
