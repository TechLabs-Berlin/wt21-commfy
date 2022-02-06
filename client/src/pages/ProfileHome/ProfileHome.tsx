import { useUserProfile } from "utils/state";
import React from "react";
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
  IonButton,
  IonFooter,
} from "@ionic/react";
import "./ProfileHome.css";

const ProfileHome: React.FC = () => {
  const [user] = useUserProfile();
  const { signOut } = useAuthentication();
  console.log("user", user);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem href={`/${routes.profile.settings}`}>
          <IonLabel>Profile Settings</IonLabel>
        </IonItem>
        <IonItem href={`/${routes.profile.routes}`}>
          <IonLabel>My Routes</IonLabel>
        </IonItem>
        <IonItem href={`/${routes.profile.faq}`}>
          <IonLabel>FAQ</IonLabel>
        </IonItem>
      </IonContent>
      <IonFooter className="ion-no-border">
        <IonButton
          className="signout-button"
          expand="block"
          onClick={() => signOut()}
        >
          Log Out
        </IonButton>
      </IonFooter>
    </IonPage>
  );
};

export { ProfileHome };
