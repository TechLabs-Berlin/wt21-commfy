import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Weather } from "components/WeatherAPI/Weather";
import { Outfit } from "components/Outfit";
import { useOutfits } from "utils/api";
import "./Tab2.css";

const Tab2: React.FC = () => {
  const { data, loading } = useOutfits();
  console.log(data, loading);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <Weather />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Outfit />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
