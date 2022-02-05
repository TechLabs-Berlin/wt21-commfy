import { IonCard, IonCardContent, IonSpinner } from "@ionic/react"
import { useOutfits } from "utils/api"
import { ClothesIconCreator } from "./clothesIconCreator"
import { clothesConfig } from "./outfitConfig"
import "./clothesCreator.css"



export const ClothesItemCreator = (props) => {

    const { data, loading, error } = useOutfits()


    const clothingItemNow = (item) => {
        if (loading === true) {
            return ["loading item..."]
        } else if (loading === false && data !== undefined) {
            return data.clothes.now[0][`${item}`]
        } else {
            return ["something went wrong...."]
        }
    }



    const clothesRes = clothesConfig[`${props.item}`][clothingItemNow(`${props.item}`)] || "loading..."

    const render = () => {
        if (clothesRes === "none") {
            return (
                <IonCardContent>
                    <ClothesIconCreator item={"empty"}></ClothesIconCreator>
                </IonCardContent>
            )
        } else if (clothesRes === "loading...") {
            return (
                <IonCardContent class="cardcontent">
                    <IonSpinner name="dots"></IonSpinner>
                </IonCardContent>
            )
        }
        return (
            <IonCardContent class="cardcontent">
                <ClothesIconCreator item={clothesRes}></ClothesIconCreator>
            </IonCardContent>
        )
    }


    return (
        <IonCard className="card">
            {render()}
        </IonCard>
    )


}