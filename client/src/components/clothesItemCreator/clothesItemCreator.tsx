import { IonCard, IonCardContent, IonSpinner } from "@ionic/react"
import { useOutfits } from "utils/api"
import { ClothesIconCreator } from "./clothesIconCreator"
import "./clothesCreator.css"











export const ClothesItemCreator = (props) => {

    const clothesConfig = {

        headwear: {
            1: "none",
            2: "headband",
            3: "hat",
            4: "cap"
        },
        sunglasses: {
            0: "sunglases",
            1: "sunglases"
        },
        neck: {
            1: "none",
            2: "tube",
            3: "scarf"
        },
        singlet: {
            0: "none",
            1: "singlet"
        },

        upper_body_second_layer: {
            1: "none",
            2: "longsleeve",
            3: "pullover"
        },
        upper_body_third_layer: {
            1: "none",
            2: "fleece",
            3: "insulation"
        },
        upper_body_outer_layer: {
            1: "none",
            2: "windstopper",
            3: "softshell",
            4: "rainjacket",
            5: "warmcoat"
        },
        hands: {
            1: "none",
            2: "lightgloves",
            3: "warmgloves"
        },

        raintrousers: {
            0: "none",
            1: "raintrousers"
        },
        socks: {
            1: "socks",
            2: "warmsocks",
            3: "warmsocks"
        },
        shoes: {
            1: "lowshoes",
            2: "boots",
            3: "rainproofshoes"
        }
    }
    const backPackConfig = clothesConfig

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