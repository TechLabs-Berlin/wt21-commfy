import { IonCardContent } from "@ionic/react"
import { useOutfits } from "utils/api"











export const ClothesItemCreator = (props) => {

    const clothesConfig = {
        headwear: {
            1: "none",
            2: "headband",
            3: "hat",
            4: "cap"
        },
        sunglasses: {
            0: "none",
            1: "sunglasses"
        },
        neck: {
            1: "none",
            2: "buff",
            3: "warm scarf"
        },
        singlet: {
            0: "none",
            1: "singlet"
        },
        shirt: {
            0: "none",
            1: "shirt"
        },
        upper_body_second_layer: {
            1: "none",
            2: "longsleeve",
            3: "pullover/cardigan"
        },
        upper_body_third_layer: {
            1: "none",
            2: "fleece",
            3: "insulation"
        },
        upper_body_outer_layer: {
            1: "none",
            2: "windstopper",
            3: "soft shell",
            4: "rainjacket",
            5: "warm coat"
        },
        hands: {
            1: "none",
            2: "light gloves",
            3: "warm gloves"
        },
        legs: {
            1: "shorts",
            2: "trousers"
        },
        raintrousers: {
            0: "none",
            1: "raintrousers"
        },
        socks: {
            1: "socks",
            2: "warm wool socks"
        },
        shoes: {
            1: "low shoes",
            2: "boots",
            3: "rainproof shoes"
        }
    }

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



    return (
        <IonCardContent>
            {clothesConfig[`${props.item}`][clothingItemNow(`${props.item}`)] || "loading..."}
        </IonCardContent>
    )
}