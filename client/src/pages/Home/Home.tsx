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
  IonCol,
} from "@ionic/react";
import { Weather } from "components/WeatherAPI/Weather";
import { Outfit } from "components/Outfit";
import { useOutfits } from "utils/api";
import { useRedirect } from "utils/redirect";
import { routes } from "utils/routes";

const Home: React.FC = () => {
  const { data, loading } = useOutfits();
  useOutfits();
  console.log(data, loading);
  const { redirect } = useRedirect();

  return (
    <IonPage>
      <IonHeader class="header-bg">
        <IonToolbar class="toolbar-bg">
          <IonTitle class="title">Commfy</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardContent>
            <Weather />
          </IonCardContent>
        </IonCard>
        <Outfit />
      </IonContent>
      <IonFooter>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton
                slot=""
                size="large"
                onClick={() => redirect(routes.today.home)}
              >
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
