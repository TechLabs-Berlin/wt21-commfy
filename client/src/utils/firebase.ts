import { doc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useFirestore, useFirestoreDocData, useAuth } from "reactfire";

export enum FirebaseCollections {
  users = "users",
}


export const useUser = (userId: string) => {
  const userRef = doc(useFirestore(), FirebaseCollections.users, userId);
  const { status, data, error } = useFirestoreDocData(userRef);

  return { loading: status === "loading", error, data };
};

export const useAuthentication = () => {

  const auth = useAuth();


  const signIn = async (email: string, password: string) => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user.user;
  };

  const signUp = async (email: string, password: string, nickname: string, gender: string, personalWeatherTrend: number) => {
    
    const axios = require("axios")
    const data = JSON.stringify({
      "email": email,
      "password": password,
      "nickname": nickname,
      "gender": gender,
      "personalWeatherTrend": personalWeatherTrend
    });

    const config = {
      method: 'post',
      url: 'http://localhost:5000/commfy-dev/us-central1/createUserProfile',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  return { signIn, signOut: auth.signOut, signUp };

}
