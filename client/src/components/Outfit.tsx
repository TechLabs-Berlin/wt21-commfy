import { FunctionComponent } from "react";
import { IonCard, IonCardContent } from "@ionic/react";
import "./Outfit.css"



export const Outfit: FunctionComponent = () => {
    return (
        <IonCardContent class="container">

            <IonCard class="bubble">
                <IonCardContent>
                    Scarf
                </IonCardContent>
            </IonCard>



            <IonCard class="bubble">
                <IonCardContent>
                    Hat
                </IonCardContent>
            </IonCard>



            <IonCard class="bubble">
                <IonCardContent>
                    T-Shirt
                </IonCardContent>
            </IonCard>



            <IonCard class="bubble">
                <IonCardContent>
                    Rain Coat
                </IonCardContent>
            </IonCard>



            <IonCard class="bubble">
                <IonCardContent>
                    Gloves
                </IonCardContent>
            </IonCard>



            <IonCard class="bubble">
                <IonCardContent>
                    Socks
                </IonCardContent>
            </IonCard>



            <IonCard class="bubble">
                <IonCardContent>
                    Low Shoes
                </IonCardContent>
            </IonCard>
        </IonCardContent>
    )
}