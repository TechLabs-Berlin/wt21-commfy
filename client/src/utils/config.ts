export const config = {
  api: {
    baseUrl: "http://flogreenie.pythonanywhere.com/api",
  },
  weatherapi: {
    baseUrl: "https://api.weatherapi.com/v1/current.json",
    apiKey: "f93eb660b2424258bf5155016210712",
  },
  firebase: {
    config: {
      apiKey: "AIzaSyDCqO6LABuFGFH73SlY_11d4X9PCi1Xy9k",
      authDomain: "commfy-dev.firebaseapp.com",
      projectId: "commfy-dev",
      storageBucket: "commfy-dev.appspot.com",
      messagingSenderId: "640480368018",
      appId: "1:640480368018:web:afb596db7728c69e421d4b",
      measurementId: "G-EC9HZG4W8M",
    },
  },
  functions: {
    baseUrl: "http://localhost:5000/commfy-dev/us-central1",
  }
};
