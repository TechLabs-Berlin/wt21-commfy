export const config = {
  api: {
    baseUrl: process.env.REACT_APP_API_BASEURL,
  },
  weatherapi: {
    baseUrl: process.env.REACT_APP_WEATHERAPI_BASEURL,
    apiKey: process.env.REACT_APP_WEATHERAPI_APIKEY,
  },
  firebase: {
    config: {
      apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
      appId: process.env.REACT_APP_FIREBASE_APPID,
      measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
    },
  },
  functions: {
    baseUrl: process.env.REACT_APP_FUNCTIONS_BASEURL,
  },
};
