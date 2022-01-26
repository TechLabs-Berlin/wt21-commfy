export interface User {
  email: string;
  gender: string;
  nickname: string;
  personalWeatherTrend: number;
}

export interface UserRegistrationPayload extends User {
  password: string;
}

export interface Route {
  startingPoint: string;
  destination: string;
  hardness: number;
  duration: number;
}
