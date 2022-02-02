import { IonGrid, IonRow, IonCol } from "@ionic/react";
import { FunctionComponent } from "react";
import { ClothesItemCreator } from "utils/clothesItemCreator/clothesItemCreator";
import "./Outfit.css"




export const Outfit: FunctionComponent = () => {


    return (
        <IonGrid class="container">
            <IonRow class="topRow">
                <IonCol size="auto">
                    <ClothesItemCreator item="headwear" />
                </IonCol>
                <IonCol size="auto">
                    <ClothesItemCreator item="neck" />
                </IonCol>
            </IonRow>
            <IonRow class="row2">
                <IonCol size="auto">
                    <ClothesItemCreator item="upper_body_second_layer" />
                </IonCol>
                <IonCol size="auto">
                    <ClothesItemCreator item="upper_body_outer_layer" />
                </IonCol>
                <IonCol size="auto">
                    <ClothesItemCreator item="upper_body_third_layer" />
                </IonCol>
            </IonRow>
            <IonRow class="row3">
                <IonCol size="auto">
                    <ClothesItemCreator item="raintrousers" />
                </IonCol>
            </IonRow>
            <IonRow class="row4">
                <IonCol size="auto">
                    <ClothesItemCreator item="socks" />
                </IonCol>
                <IonCol size="auto">
                    <ClothesItemCreator item="shoes" />
                </IonCol>
            </IonRow>
            <IonRow class="row5">
                <IonCol size="auto">
                    <ClothesItemCreator item="headwear" />
                </IonCol>               
            </IonRow>

        </IonGrid>

    )
}
