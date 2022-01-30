import { useUserProfile } from "utils/state";
import React, { useRef } from "react";
import { routes } from "utils/routes";
import { useAuthentication } from "utils/firebase";

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonPage,
  IonIcon,
  IonButton,
  IonFooter,
} from "@ionic/react";

const ProfileHome: React.FC = () => {
  const accordionGroupRef = useRef(null);
  const [user] = useUserProfile();
  const { signOut } = useAuthentication()
  console.log("user", user);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{ textAlign: "center" }}>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem href={`/${routes.profile.settings}`}>
          <IonLabel>Profile Settings</IonLabel>
          {/* <IonIcon icon="chevron-forward"></IonIcon> */}
        </IonItem>
        <IonItem href={`/${routes.profile.routes}`}>
          <IonLabel>My Routes</IonLabel>
          {/* <IonIcon icon="chevron-forward"></IonIcon> */}
        </IonItem>
        <IonItem href={`/${routes.profile.faq}`}>
          <IonLabel>FAQ</IonLabel>
          {/* <IonIcon icon="chevron-forward"></IonIcon> */}
        </IonItem>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonButton expand="block" onClick={() => signOut()}>Log Out</IonButton>
      </IonFooter>
    </IonPage>
  );
};

export { ProfileHome };
