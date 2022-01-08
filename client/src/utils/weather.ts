import { useQuery } from "react-query";
import { config } from "utils/config";
import { Geolocation, Position } from "@capacitor/geolocation";
import { useEffect, useState } from "react";

export type Coordinates = Position["coords"];

export const useCurrentPosition = () => {
  const [currentPosition, setCurrentPosition] = useState<Coordinates>();

  useEffect(() => {
    getCurrentPosition();
  }, []);

  const getCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    setCurrentPosition(coordinates.coords);
  };

  return currentPosition;
};

export const useWeather = (coords: Coordinates) => {
  const {
    isLoading: loading,
    error,
    data,
  } = useQuery("weather", async () => {
    const query = `${coords.latitude},${coords.longitude}`;

    const url = new URL(config.weatherapi.baseUrl);
    const params = { key: config.weatherapi.apiKey, q: query };
    url.search = new URLSearchParams(params).toString();

    const res = await fetch(url.toString());

    return res.json();
  });

  return { loading, error, data };
};
