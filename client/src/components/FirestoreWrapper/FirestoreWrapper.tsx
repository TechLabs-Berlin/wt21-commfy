import { FirestoreProvider, useFirebaseApp, useInitFirestore } from "reactfire";
import { getFirestore } from "firebase/firestore";
import { FunctionComponent } from "react";

export const FirestoreWrapper: FunctionComponent = (props) => {
  const { children } = props;

  const firestoreInstance = getFirestore(useFirebaseApp());

  return (
    <FirestoreProvider sdk={firestoreInstance}>{children}</FirestoreProvider>
  );
};
