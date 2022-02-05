import { doc, getDoc, setDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useFirestore, useFirestoreDocData, useAuth } from "reactfire";

import { useUserProfile } from "./state";
import { User, UserRegistrationPayload } from "types/User";

export enum FirebaseCollections {
  users = "users",
}

export const useUser = (userId: string) => {
  const userRef = doc(useFirestore(), FirebaseCollections.users, userId);
  const { status, data, error } = useFirestoreDocData(userRef);

  return { loading: status === "loading", error, data };
};

// TODO: Make it work with actual schedules

interface Schedule {
  time: number;
  routes: any[];
}

export const useSchedule = (id: string) => {
  const firestore = useFirestore();
  const userData = useUser(id);

  console.log("userData", userData);

  const setSchedule = async (newSchedule: Schedule) => {
    const userRef = doc(firestore, FirebaseCollections.users, id);
    setDoc(userRef, { ...userData.data, schedule: newSchedule });
  };

  return { setSchedule };
};

export const useAuthentication = () => {
  const auth = useAuth();
  const firestore = useFirestore();
  const [_, setUserData] = useUserProfile();

  // Log in
  const signIn = async (email: string, password: string) => {
    const authUser = await signInWithEmailAndPassword(auth, email, password);
    const authUid = authUser.user.uid;
    const userRef = doc(firestore, FirebaseCollections.users, authUid);
    const userSnap = await getDoc(userRef);
    const userData = userSnap.data() as User;
    setUserData({ ...userData });

    return userData;
  };

  // Log out
  const signOut = async () => {
    await auth.signOut();
    setUserData(null);
  };

  // Registration
  const signUp = async (user: UserRegistrationPayload) => {
    const config = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      "http://localhost:5001/commfy-dev/us-central1/createUserProfile",
      config
    );

    if (response.ok) {
      const userData = await signIn(user.email, user.password);
      return userData;
    }
  };

  const update = async (newUserData: UserRegistrationPayload) => {
    const userRef = doc(
      firestore,
      FirebaseCollections.users,
      auth.currentUser.uid
    );
    setUserData(newUserData);
    setDoc(userRef, newUserData);
  };

  return { signIn, signOut, signUp, update };
};
