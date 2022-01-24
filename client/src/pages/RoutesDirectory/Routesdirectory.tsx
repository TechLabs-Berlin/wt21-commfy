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
    IonCard,
    IonCardContent,
    IonIcon,
    IonButton,
    IonModal
} from "@ionic/react";
import { useRedirect } from "utils/redirect";
import { routes } from "utils/routes";

const Routesdirectory: React.FC = () => {
    const { redirect } = useRedirect();
    const [showModal, setShowModal] = useState(false);
    const [user] = useUserProfile();
    console.log("user", user);

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
                    <IonContent>
                        MODAL CONTENT HERE
                    </IonContent>
                </IonModal>

                <IonCard>
                    <IonItem>
                        <IonIcon icon={bicycle} slot="start" />
                        1st ROUTE CONTENT
                        <IonButton fill="outline" slot="end">
                            Edit
                        </IonButton>
                    </IonItem>
                    <IonCardContent>

                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonItem>
                        <IonIcon icon={bicycle} slot="start" />
                        2nd ROUTE CONTENT
                        <IonButton fill="outline" slot="end">
                            Edit
                        </IonButton>
                    </IonItem>
                    <IonCardContent>

                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonItem>
                        <IonIcon icon={bicycle} slot="start" />
                        3rd ROUTE CONTENT
                        <IonButton fill="outline" slot="end">
                            Edit
                        </IonButton>
                    </IonItem>
                    <IonCardContent>

                    </IonCardContent>
                </IonCard>

            </IonContent>
        </IonPage>
    );
};

export { Routesdirectory };
