import { IonCard, IonCardContent, IonSpinner } from "@ionic/react"
import { useOutfits } from "utils/api"
import { backpackConfig } from "./outfitConfig"
import { ClothesIconCreator } from "./clothesIconCreator"

/*Due to the volatility of the API result for the "backpack" and the therein lying difficulty to implement,
this BackPackItem component is currently unused and instead replaced with the clothesItemCreator in Outfit.tsx
*/


export const BackPackItem = (props) => {

    const { data, loading, error } = useOutfits()

    const backPackItem = (item) => {
        if (loading === true) {
            return ["loading item..."]
        } else if (loading === false && data.clothes.backpack !== undefined) {
            return data.clothes.backpack[1][0][`${item}`]
        } else {
            return ["something went wrong...."]
        }
    }
    const backPackRes = backpackConfig[`${props.category}`][backPackItem(`${props.item}`)] || "loading..."
    
    
    
    const render = () => {
        if (backPackRes === "none") {
            return (
                <IonCardContent>
                    <ClothesIconCreator item={"empty"}></ClothesIconCreator>
                </IonCardContent>
            )
        } else if (backPackRes === "loading...") {
            return (
                <IonCardContent class="cardcontent">
                    <IonSpinner name="dots"></IonSpinner>
                </IonCardContent>
            )
        }
        return (
            <IonCardContent class="cardcontent">
                <ClothesIconCreator item={backPackRes}></ClothesIconCreator>
            </IonCardContent>
        )
    }

    return (
        <IonCard className="card">
            {render()}
        </IonCard>
    )
}