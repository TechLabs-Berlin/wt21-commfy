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
  IonImg,
} from "@ionic/react";
import { Weather } from "components/WeatherAPI/Weather";
import { Outfit } from "components/Outfit";
import { useOutfits } from "utils/api";
import { useRedirect } from "utils/redirect";
import { routes } from "utils/routes";
import { useAtom } from "jotai";
import { selectAtom } from "utils/state";
import { routeArray } from "pages/RoutesDirectory/Routesdirectory";



const Home: React.FC = () => {
  const { data, loading } = useOutfits();
  const [selected] = useAtom(selectAtom)
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
        <IonGrid>
          <IonRow>
            <IonCol size="5">
              <IonImg src="assets/icon/custom/peeps/Robin.png"></IonImg>
              <IonImg src="assets/icon/custom/backpack.png"></IonImg>
            </IonCol>
            <IonCol>
              <Outfit />
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonCard>{routeArray[selected]}</IonCard>
      </IonContent>
      <IonFooter>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center">

              <IonButton
                slot=""
                size="large"
                onClick={() => redirect(routes.today.home)}
                className={routeArray[selected] ? "ion-hide" : ""}

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
