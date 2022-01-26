

import { bicycle } from "ionicons/icons";


import {
    IonItem,
    IonCard,
    IonCardContent,
    IonIcon,
    IonButton,
} from "@ionic/react";


const RouteCardCreator = (props) => {
    return (
        <div>
            <IonCard>
                <IonItem>

                    <IonIcon icon={bicycle} slot="start" />
                    <IonButton fill="outline" slot="end">
                        Edit
                    </IonButton>
                </IonItem>
                <IonCardContent>
                    From: {props.from} To: {props.to}
                </IonCardContent>
            </IonCard>
        </div>

    )

}



export default RouteCardCreator