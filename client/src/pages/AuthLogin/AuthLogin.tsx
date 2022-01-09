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

const AuthLogin: React.FC = () => {
  const { signIn } = useAuthentication();

  // const username = "matheus@gmail.com";
  // const pass = "12345678";

  const onSubmit: FormikConfig<any>["onSubmit"] = async (
    values,
    { setSubmitting }
  ) => {
    const user = await signIn(values.email, values.password);
    console.log("user", user);
    setSubmitting(false);
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
                <IonRow>
                  <IonCol>
                    <IonIcon
                      style={{ fontSize: "70px", color: "#0040ff" }}
                      icon={personCircle}
                    />
                  </IonCol>
                </IonRow>
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
                    <p style={{ fontSize: "small" }}>
                      By clicking LOGIN you agree to our <a href="#">Policy</a>
                    </p>
                    <IonButton type="submit" expand="block">
                      Login
                    </IonButton>
                    <p style={{ fontSize: "medium" }}>
                      Don't have an account? <a href={`/${routes.auth.register}`}>Sign up!</a>
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
