import { doc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import {
  useFirestore,
  useFirestoreDocData,
  useFirebaseApp,
  useAuth,
} from "reactfire";

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

  return { signIn, signOut: auth.signOut };
};
