import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/react";
import { Weather } from "components/WeatherAPI/Weather";
import { Outfit } from "components/Outfit";
import { useOutfits } from "utils/api";
import { useRedirect } from "utils/redirect"
import { routes } from "utils/routes";
import "./Tab2.css";

const Home: React.FC = () => {
  const { data, loading } = useOutfits();
  useOutfits()
  console.log(data, loading);
  const { redirect } = useRedirect()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{ textAlign: "center" }}>Commfy</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardContent>
            <Weather />
          </IonCardContent>
        </IonCard>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Outfit />
      </IonContent>
      <IonFooter>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton slot="" size="large" onClick={() => redirect(routes.today.home)}>
                Set Schedule
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
