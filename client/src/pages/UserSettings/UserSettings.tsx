import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonItem,
  IonInput,
  IonButton,
} from "@ionic/react";
import { Formik, FormikConfig } from "formik";
import { FunctionComponent } from "react";
import { useUserProfile } from "utils/state";
import "./UserSettings.css";

export const Usersettings: FunctionComponent = () => {
  const onSubmit: FormikConfig<any>["onSubmit"] = async (
    values,
    { setSubmitting }
  ) => {
    const newUser = (values.email, values.password);
    console.log("newUser", newUser);
    setSubmitting(false);
  };

  const [user] = useUserProfile();
  console.log("user", user);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="top-bar">Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <div>
          <h1>Change Settings</h1>
        </div>
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

                <IonRow style={{ marginTop: "20px" }}>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">
                        Change Email Address
                      </IonLabel>
                      <IonInput
                        type="email"
                        name="email"
                        value={values.email}
                        onIonInput={handleChange}
                      ></IonInput>
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow style={{ marginTop: "20px" }}>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">Change Username</IonLabel>
                      <IonInput
                        type="text"
                        name="username"
                        onIonInput={handleChange}
                      ></IonInput>
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow style={{ marginTop: "20px" }}>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">Change Password</IonLabel>
                      <IonInput
                        type="password"
                        name="password"
                        value={values.password}
                        onIonInput={handleChange}
                      ></IonInput>
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow style={{ marginTop: "20px" }}>
                  <IonCol>
                    <IonLabel position="floating">Sex</IonLabel>
                    <br />
                    <div className="radio">
                      <label>
                        <input type="radio" value="option1" name="sex" />
                        Woman
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" value="option2" name="sex" />
                        Third
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" value="option3" name="sex" />
                        Man
                      </label>
                    </div>
                  </IonCol>
                </IonRow>
                <IonRow style={{ marginTop: "20px" }}>
                  <IonCol>
                    <IonLabel position="floating">
                      While I bike I tend to:
                    </IonLabel>
                    <div className="range">
                      <input type="range" min="1" max="5" className="slider" />
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
                    <IonButton type="submit" expand="block">
                      Save Changes
                    </IonButton>
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
