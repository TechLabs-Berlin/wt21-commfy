import { AuthProvider, useFirebaseApp } from "reactfire";
import { FunctionComponent } from "react";
import { getAuth } from "firebase/auth";

export const AuthWrapper: FunctionComponent = (props) => {
  const { children } = props;

  const firebaseApp = useFirebaseApp();
  const auth = getAuth(firebaseApp);

  return <AuthProvider sdk={auth}>{children}</AuthProvider>;
};
