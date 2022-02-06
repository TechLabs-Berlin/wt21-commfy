import { useUserProfile } from "utils/state";
import { useRedirect } from "utils/redirect";
import { routes } from "utils/routes";
import React from "react";
import "./Faq.css";
import { chevronBack, add } from "ionicons/icons";
import {
  IonContent,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonButton,
  IonTitle,
  IonText,
} from "@ionic/react";

const Faq: React.FC = () => {
  const { redirect } = useRedirect();
  const [user] = useUserProfile();
  console.log("user", user);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton
            onClick={() => redirect(routes.profile.home)}
            slot="start"
            fill="clear"
          >
            <IonIcon slot="icon-only" icon={chevronBack}>
              {" "}
            </IonIcon>
          </IonButton>
          <IonTitle>FAQ</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonAccordionGroup value="faq">
          <IonAccordion value="question-1" toggleIcon={add}>
            <IonItem slot="header">
              <IonLabel className="label-header" id="question">
                Question 1
              </IonLabel>
            </IonItem>

            <IonList slot="content">
              <IonItem>
                <IonText className="text-content" ion-text-wrap>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  expedita vero repellendus architecto odit! Dolorem, recusandae
                  soluta dignissimos veniam ducimus iusto incidunt rerum hic eos
                  reprehenderit. Explicabo quam ex quas.
                </IonText>
              </IonItem>
            </IonList>
          </IonAccordion>
          <IonAccordion value="question-2" toggleIcon={add}>
            <IonItem slot="header" className="item-header">
              <IonLabel className="label-header" id="question">
                Question 2
              </IonLabel>
            </IonItem>

            <IonList slot="content">
              <IonItem>
                <IonText className="text-content" ion-text-wrap>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque iste sint sapiente rem maiores consequuntur natus.
                  Porro enim repellendus nulla voluptates veritatis, fuga ipsa,
                  et veniam, aut commodi voluptatum quasi!
                </IonText>
              </IonItem>
            </IonList>
          </IonAccordion>
          <IonAccordion value="question-3" toggleIcon={add}>
            <IonItem slot="header" className="item-header">
              <IonLabel className="label-header" id="question">
                Question 3
              </IonLabel>
            </IonItem>

            <IonList slot="content">
              <IonItem>
                <IonText className="text-content" ion-text-wrap>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  laborum, a expedita veniam neque temporibus quae omnis nihil
                  doloremque quasi odio voluptatum quibusdam rerum excepturi
                  corrupti maiores totam provident inventore.
                </IonText>
              </IonItem>
            </IonList>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export { Faq };
