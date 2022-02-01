import { QueryClient, useQuery } from "react-query";
import { config } from "utils/config";
import { hardnessAtom, locationAtom, useUserProfile } from "utils/state"
import { useAtom } from "jotai";


export const apiClient = new QueryClient();

export enum APIEndpoints {
  outfits_all = "outfits",
  recommendations = "recommendation"
}
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json")



export const useOutfits = () => {

  const [location] = useAtom(locationAtom);
  const [User] = useUserProfile();
  const [hardness] = useAtom(hardnessAtom);

  const raw = JSON.stringify({
    "0": {
      "location": "Melbourne",
      "time": "2022-01-27T23:52:20.823Z",
      "heaviness_of_trip": `${hardness}`,
      "heat_preference": `${User.personalWeatherTrend}`,
      "sex": `${User.gender}`
    },
    // "1": {
    //   "location": "Melbourne",
    //   "time": "2022-01-27T19:52:20.824Z",
    //   "heaviness_of_trip": "normal",
    //   "heat_preference": 1,
    //   "sex": "m"
    // },
    // "2": {
    //   "location": "Melbourne",
    //   "time": "2022-01-27T22:52:20.829Z",
    //   "heaviness_of_trip": "easy",
    //   "heat_preference": 1,
    //   "sex": "m"
    // },
    // "3": {
    //   "location": "Melbourne",
    //   "time": "2022-01-27T18:52:20.833Z",
    //   "heaviness_of_trip": "hard",
    //   "heat_preference": 1,
    //   "sex": "m"
    // }
  });
  const opts = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };
  const {
    isLoading: loading,
    error,
    data,
  } = useQuery(APIEndpoints.recommendations, async () => {
    const res = await fetch(
      `${config.api.baseUrl}/${APIEndpoints.recommendations}`,
      opts
    );

    return res.json();
  });

  return { loading, error, data };
};
