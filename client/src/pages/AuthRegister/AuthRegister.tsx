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
  IonSegment,
  IonSegmentButton
} from "@ionic/react";
import React, { useState } from "react";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import { personCircle } from "ionicons/icons";
import { Formik, FormikConfig } from "formik";
import { useAuthentication } from "utils/firebase";
import { useRedirect } from "utils/redirect";
import { routes } from "utils/routes";
import { UserRegistrationPayload } from "types/User";

const AuthRegister: React.FC = () => {
  const { signUp } = useAuthentication();
  const { redirect } = useRedirect();
  const [gender, setGender] = useState("");

  const onSubmit: FormikConfig<UserRegistrationPayload>["onSubmit"] = async (
    values,
    { setSubmitting }
  ) => {
    console.log("values", values);
    const newUser = await signUp(values);
    console.log("newUser", newUser);
    setSubmitting(false);
    redirect(routes.profile.settings);
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
            initialValues={{
              email: "",
              password: "",
              nickname: "",
              gender: "",
              personalWeatherTrend: 3,
            }}
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
                      <IonLabel position="floating">Nickname</IonLabel>
                      <IonInput
                        type="text"
                        name="nickname"
                        value={values.nickname}
                        onIonInput={handleChange}
                      ></IonInput>
                    </IonItem>
                  </IonCol>
                </IonRow>


                <IonLabel position="floating">Gender</IonLabel>

                <IonSegment onIonChange={handleChange} id="gender">

                  <IonSegmentButton value={"male"}>
                    <IonLabel>Male</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value={"other"}>
                    <IonLabel>Other</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value={"female"}>
                    <IonLabel>Female</IonLabel>
                  </IonSegmentButton>

                </IonSegment>

                <IonRow style={{ marginTop: "20px" }}>
                  <IonCol>
                    <IonLabel position="floating">
                      While I bike I tend to:
                    </IonLabel>
                    <div className="range">
                      <input
                        type="range"
                        min="1"
                        max="5"
                        className="slider"
                        value={values.personalWeatherTrend}
                        onChange={handleChange}
                        name="personalWeatherTrend"
                      />
                      <div className="sliderticks">
                        <span>sweat</span>
                        <span>feel fine</span>
                        <span>freeze</span>
                      </div>
                    </div>
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
    </IonPage >
  );
};

export default AuthRegister;
