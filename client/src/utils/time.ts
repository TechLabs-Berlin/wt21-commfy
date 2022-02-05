import { timeAtom } from "./state";

export const useTime = () => {
    const current = new Date();
    const cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate() + "T";
    const cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds() + "." + current.getMilliseconds() + "Z";
    const dateTime = cDate + cTime;

    return (
        dateTime
    )
};

