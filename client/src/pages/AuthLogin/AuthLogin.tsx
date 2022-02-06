import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
} from "@ionic/react";
import React from "react";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import { personCircle } from "ionicons/icons";
import { Formik, FormikConfig } from "formik";
import { useAuthentication } from "utils/firebase";
import { routes } from "utils/routes";
import { useRedirect } from "utils/redirect";

import "./AuthLogin.css";

const AuthLogin: React.FC = () => {
  const { signIn } = useAuthentication();
  const { redirect } = useRedirect();

  // const username = "matheus@gmail.com";
  // const pass = "12345678";

  const onSubmit: FormikConfig<any>["onSubmit"] = async (
    values,
    { setSubmitting }
  ) => {
    const user = await signIn(values.email, values.password);
    console.log("user", user);
    setSubmitting(false);
    redirect(routes.home);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={onSubmit}
          >
            {({
              values,
              // errors,
              // touched,
              // isSubmitting,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                {/* <IonRow>
                  <IonCol>
                    <IonAlert
                      isOpen={}
                      onDidDismiss={}
                      header={"Error!"}
                      message={message}
                      buttons={["Dismiss"]}
                    />
                  </IonCol>
                </IonRow> */}
                <h1>Let's log you in.</h1>
                <p>
                  Welcome back. <br></br>You have been missed!
                </p>
                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">Email</IonLabel>
                      <IonInput
                        type="email"
                        name="email"
                        value={values.email}
                        onIonInput={handleChange}
                      ></IonInput>
                    </IonItem>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">Password</IonLabel>
                      <IonInput
                        type="password"
                        name="password"
                        value={values.password}
                        onIonInput={handleChange}
                      ></IonInput>
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <p className="login-info-above">
                      By clicking LOGIN you agree to our <a href="#">Policy</a>
                    </p>
                    <IonButton type="submit" expand="block">
                      Login
                    </IonButton>
                    <p className="login-info-below">
                      Don't have an account?{" "}
                      <a href={`/${routes.auth.register}`}>Sign up!</a>
                    </p>
                  </IonCol>
                </IonRow>
              </form>
            )}
          </Formik>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AuthLogin;
