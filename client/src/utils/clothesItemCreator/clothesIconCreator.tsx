import { IonImg } from "@ionic/react"

export const ClothesIconCreator = (props) => {

    const url = `assets/icon/custom/clothesIcons/icon${props.item}.png`

    if (props.item !== "loading...") {
        return (
            <IonImg src={url} ></IonImg>
        )
    } else {
        return <div>"no image found"</div>
    }

}