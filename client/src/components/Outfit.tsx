import { FunctionComponent } from "react";
import { IonCard, IonGrid, IonRow, IonCol } from "@ionic/react";

import "./Outfit.css"


import { ClothesItemCreator } from "utils/clothesItemCreator/clothesItemCreator";




export const Outfit: FunctionComponent = () => {


    return (
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonCard class="bubble">
                        <ClothesItemCreator item="headwear" />

                    </IonCard>
                    <IonCard class="bubble">
                        <ClothesItemCreator item="neck" />
                    </IonCard>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol>
                    <IonCard class="bubble">
                        <ClothesItemCreator item="singlet" />
                    </IonCard>
                    <IonCard class="bubble">
                        <ClothesItemCreator item="shirt" />
                    </IonCard>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol>
                    <IonCard class="bubble">
                        <ClothesItemCreator item="upper_body_second_layer" />

                    </IonCard>
                    <IonCard class="bubble">
                        <ClothesItemCreator item="upper_body_outer_layer" />
                    </IonCard>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol>
                    <IonCard class="bubble">
                        <ClothesItemCreator item="upper_body_third_layer" />
                    </IonCard>
                    <IonCard class="bubble">
                        <ClothesItemCreator item="hands" />
                    </IonCard>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol>
                    <IonCard class="bubble">
                        <ClothesItemCreator item="legs" />
                    </IonCard>
                    <IonCard class="bubble">
                        <ClothesItemCreator item="raintrousers" />
                    </IonCard>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol>
                    <IonCard class="bubble">
                        <ClothesItemCreator item="socks" />
                    </IonCard>
                    <IonCard class="bubble">
                        <ClothesItemCreator item="shoes" />
                    </IonCard>
                </IonCol>
            </IonRow>
        </IonGrid >
    )
}
