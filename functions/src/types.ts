export enum FirestoreCollection {
  users = "users",
}

// User profiles

export interface UserProfileRequestPayload {
  email: string;
  password: string;
  gender: string;
  personalWeatherTrend: number;
  nickname: string;
}

// Weather info

export interface WeatherInfoRequestPayload {
  lat: number;
  lon: number;
}

export interface WeatherInfoResponsePayload {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}
