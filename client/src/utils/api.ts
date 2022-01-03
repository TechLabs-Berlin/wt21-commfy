import { QueryClient, useQuery } from "react-query";
import { config } from "utils/config";

export const apiClient = new QueryClient();

export enum APIEndpoints {
  outfits_all = "outfits/all",
}

export const useOutfits = () => {
  const {
    isLoading: loading,
    error,
    data,
  } = useQuery(APIEndpoints.outfits_all, async () => {
    const res = await fetch(
      `${config.api.baseUrl}/${APIEndpoints.outfits_all}`
    );

    return res.json();
  });

  return { loading, error, data };
};

export const useWeather = () => {
//Waiting on how the WeatherAPI parsed data
}
