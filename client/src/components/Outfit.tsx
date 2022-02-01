import { FunctionComponent } from "react";
import { IonGrid, IonRow, IonCol } from "@ionic/react";

import "./Outfit.css"


import { ClothesItemCreator } from "utils/clothesItemCreator/clothesItemCreator";




export const Outfit: FunctionComponent = () => {


    return (
        <IonGrid>
            <IonRow className="ion-align-items-start">
                <IonCol>
                    <ClothesItemCreator item="headwear" />
                    <ClothesItemCreator item="neck" />
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol >
                    <ClothesItemCreator item="singlet" />
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol>
                    <ClothesItemCreator item="upper_body_second_layer" />
                    <ClothesItemCreator item="upper_body_outer_layer" />
                    <ClothesItemCreator item="upper_body_third_layer" />
                </IonCol>
            </IonRow>


            <IonRow>
                <IonCol>
                    <ClothesItemCreator item="raintrousers" />
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol >
                    <ClothesItemCreator item="socks" />
                    <ClothesItemCreator item="shoes" />
                </IonCol>
            </IonRow>
        </IonGrid >
    )
}
