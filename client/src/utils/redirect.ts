import { useHistory } from "react-router"


export const useRedirect = () => {
    const history = useHistory();
    const redirect = (path: string) => {
        history.push(path);
    }
    return { redirect };
}