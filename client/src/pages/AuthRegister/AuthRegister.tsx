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
import { useHistory } from "react-router-dom";

const AuthRegister: React.FC = () => {
  const { signUp } = useAuthentication();

  const history = useHistory();
  const redirect = () => {
    history.push("/settings");
  };

  const onSubmit: FormikConfig<any>["onSubmit"] = async (
    values,
    { setSubmitting }
  ) => {
    const newUser = await signUp(values.email, values.password);
    console.log("newUser", newUser);
    setSubmitting(false);
    redirect();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
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
                      By signing up you agree to our <a href="#">Policy</a>
                    </p>
                    <IonButton type="submit" expand="block">
                      Register
                    </IonButton>
                    <p style={{ fontSize: "medium" }}>
                      Already have an account?{" "}
                      <a href={`/${routes.auth.login}`}>Log In!</a>
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

export default AuthRegister;
