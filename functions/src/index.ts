import * as functions from "firebase-functions";

import { getWeatherInfo as _getWeatherInfo } from "./getWeatherInfo";
import { createUserProfile as _createUserProfile } from "./createUserProfile";

export const createUserProfile = functions.https.onRequest(_createUserProfile);
export const getWeatherInfo = functions.https.onRequest(_getWeatherInfo);
