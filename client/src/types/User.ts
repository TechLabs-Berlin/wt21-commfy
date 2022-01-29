export interface User {
  email: string;
  gender: string;
  nickname: string;
  personalWeatherTrend: number;
}

export interface UserRegistrationPayload extends User {
  password: string;
}

