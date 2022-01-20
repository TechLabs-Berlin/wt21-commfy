import { config as functionsConfig } from "firebase-functions";

export interface Environment {
  open_weather_map: OpenWeatherMapConfig;
}

export interface OpenWeatherMapConfig {
  appid: string;
}

const env = functionsConfig();

export const config = {
  env: env as Environment,
};
