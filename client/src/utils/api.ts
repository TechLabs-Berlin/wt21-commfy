import { QueryClient, useQuery } from "react-query";
import { config } from "utils/config";
import { hardnessAtom, useUserProfile } from "utils/state";
import { useAtom } from "jotai";
import { useTime } from "./time";


export const apiClient = new QueryClient();

export enum APIEndpoints {
  outfits_all = "outfits",
  recommendations = "recommendation"
};
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const useOutfits = () => {

  const dateTime = useTime();
  const [User] = useUserProfile();
  const [hardness] = useAtom(hardnessAtom);


  const raw = JSON.stringify({

    "0": {
      "location": "Berlin", //hardcoded location, because of unoptimized API input requirements.
      "time": `${dateTime}`,
      "heaviness_of_trip": `${hardness}`,
      "heat_preference": `${User === null ? 0 : User.personalWeatherTrend}`,
      "sex": `${User === null ? "d" : User.gender}`
    },

    /*Below is the sample input of multiple schedules, currently not implemented in the client*/

    // "1": {
    //   "location": "Melbourne",
    //   "time": "2022-02-02T21:58:59.931Z",
    //   "heaviness_of_trip": "easy",
    //   "heat_preference": 2,
    //   "sex": "d"
    // },
    // "2": {
    //   "location": "Melbourne",
    //   "time": "2022-02-02T23:58:59.968Z",
    //   "heaviness_of_trip": "easy",
    //   "heat_preference": 2,
    //   "sex": "d"
    // },
    // "3": {
    //   "location": "Melbourne",
    //   "time": "2022-02-02T22:58:59.973Z",
    //   "heaviness_of_trip": "hard",
    //   "heat_preference": 2,
    //   "sex": "d"
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
