import { Request, Response } from "firebase-functions";
import axios from "axios";

import { cors } from "./utils";
import { WeatherInfoRequestPayload, WeatherInfoResponsePayload } from "./types";
import { config } from "./config";

export const getWeatherInfo = (req: Request, res: Response) => {
  return cors(req, res, async () => {
    // Check for GET request
    if (req.method !== "GET") {
      res.status(400).send({ message: "Please use a GET request instead." });
    }

    const payload = req.body as WeatherInfoRequestPayload;
    const params = {
      lat: String(payload.lat),
      lon: String(payload.lon),
      appid: config.env.open_weather_map.appid,
      units: "metric",
    };

    try {
      console.log(
        `STARTED: Fetching weather info for: ${params.lat}, ${params.lon}`
      );

      const url = new URL("http://api.openweathermap.org/data/2.5/weather");
      url.search = new URLSearchParams(params).toString();

      const response = await axios.get<WeatherInfoResponsePayload>(
        url.toString()
      );
      const data = await response.data;
      const result = { temperature: data.main.temp };

      console.log(
        `DONE: Fetching weather info for: ${params.lat}, ${params.lon}.`
      );
      res.status(200).send(result);
    } catch (err) {
      console.log(
        `ERROR: Fetching weather info for: ${params.lat}, ${params.lon}.`
      );
      console.log(err);
      res.status(400).send({ message: "Failed to fetch weather info." });
    }
  });
};
