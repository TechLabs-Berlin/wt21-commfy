import { doc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,} from "firebase/auth";

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

  const signUp = async(email: string, password: string)=>{
    const newUser = await createUserWithEmailAndPassword(auth, email, password)
    return newUser.user
  };

  return { signIn, signOut: auth.signOut, signUp };
};
