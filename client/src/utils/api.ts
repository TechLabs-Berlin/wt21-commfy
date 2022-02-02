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
    // "0": {
    //   "location": "Berlin",
    //   "time": "2022-02-02T15:22:23.803Z",
    //   "heaviness_of_trip": `${hardness}`,
    //   "heat_preference": `${User === null ? 0 : User.personalWeatherTrend}`,
    //   "sex": `${User === null ? "d" : User.gender}`
    // },

    "0": {
      "location": "Berlin",
      "time": "2022-02-02T21:58:59.924Z",
      "heaviness_of_trip": `${hardness}`,
      "heat_preference": `${User === null ? 0 : User.personalWeatherTrend}`,
      "sex": `${User === null ? "d" : User.gender}`
    },
    "1": {
      "location": "Melbourne",
      "time": "2022-02-02T21:58:59.931Z",
      "heaviness_of_trip": "easy",
      "heat_preference": 2,
      "sex": "d"
    },
    "2": {
      "location": "Melbourne",
      "time": "2022-02-02T23:58:59.968Z",
      "heaviness_of_trip": "easy",
      "heat_preference": 2,
      "sex": "d"
    },
    "3": {
      "location": "Melbourne",
      "time": "2022-02-02T22:58:59.973Z",
      "heaviness_of_trip": "hard",
      "heat_preference": 2,
      "sex": "d"
    }
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
