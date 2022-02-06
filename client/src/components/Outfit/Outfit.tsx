import { IonGrid, IonRow, IonCol } from "@ionic/react";
import { FunctionComponent } from "react";
import { ClothesItemCreator } from "components/OutfitCreator/clothesItemCreator";
import "./Outfit.css";
import { BackPackItem } from "components/OutfitCreator/backPackItemCreator";




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
                    {
                    /*<BackPackItem category={1} item="headwear" />  currently not implementable due to API result. ClothesItemCreator one line below used for visual demonstration purposes */
                    }
                    <ClothesItemCreator item="headwear" />
                </IonCol>
                {/*}
                <IonCol size="auto">
                    <BackPackItem category={2} item="upper_body_second_layer" />
                </IonCol>
                <IonCol size="auto">
                    <BackPackItem category={3} item="hands" />
                </IonCol>
                */}
            </IonRow>
        </IonGrid>
    );
};
