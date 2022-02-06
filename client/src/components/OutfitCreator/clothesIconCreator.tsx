import { IonImg } from "@ionic/react";
import "./clothesCreator.css";

export const ClothesIconCreator = (props) => {
    const url = `assets/icon/custom/clothesIcons/icon${props.item}.png`

    if (props.item !== "loading...") {
        return (
            <IonImg src={url} class="icon"></IonImg>
        )
    } else {
        return <div>"no image found"</div>
    };
};