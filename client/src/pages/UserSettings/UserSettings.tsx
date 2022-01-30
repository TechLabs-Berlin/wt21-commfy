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
  IonIcon,
  IonSegment,
  IonSegmentButton
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import { Formik, FormikConfig } from "formik";
import { FunctionComponent } from "react";
import { useRedirect } from "utils/redirect";
import { routes } from "utils/routes";
import { useUserProfile } from "utils/state";
import "./UserSettings.css";
import { useAuthentication } from "utils/firebase";



export const Usersettings: FunctionComponent = () => {
  const { update } = useAuthentication();
  const { redirect } = useRedirect();
  const [user] = useUserProfile();
  console.log("user", user);

  const onSubmit: FormikConfig<any>["onSubmit"] = async (
    values,
    { setSubmitting }
  ) => {
    await update(values);
    setSubmitting(false);
    redirect(routes.profile.home)
  };



  return (
    <IonPage className="page">
      <IonHeader>
        <IonToolbar className="change-color">
          <IonButton
            onClick={() => redirect(routes.profile.home)}
            slot="start"
            fill="clear"
          >
            <IonIcon slot="icon-only" className="back-icon" icon={chevronBack}>
              {" "}
            </IonIcon>
          </IonButton>
          <IonTitle class="top-bar">Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid className="grid-settings">
          <Formik initialValues={user} onSubmit={onSubmit}>
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
                      <IonLabel position="floating">Change Nickname</IonLabel>
                      <IonInput
                        type="text"
                        name="nickname"
                        value={values.nickname}
                        onIonInput={handleChange}
                      ></IonInput>
                    </IonItem>
                  </IonCol>
                </IonRow>

                <IonRow style={{ marginTop: "20px" }}>
                  <IonCol>
                    <IonLabel className="sex-label">Change Your Sex</IonLabel>
                    <IonSegment onIonChange={handleChange} id="gender" value={values.gender}>
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
                  </IonCol>
                </IonRow>

                <IonRow style={{ marginTop: "20%" }}>
                  <IonCol className="sensitivity">
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
                    <IonButton
                      type="submit"
                      expand="block"
                      className="save-changes"
                    >
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
