export interface User {
  email: string;
  gender: string;
  nickname: string;
  personalWeatherTrend: number;
  NO_ID_FIELD: string
}

export interface UserRegistrationPayload extends User {
  password: string;
}

