import { useUserProfile } from "utils/state";
import { useRedirect } from "utils/redirect";
import { routes } from "utils/routes";
import React, { useRef } from "react";
import "./Faq.css";
import { chevronBack } from "ionicons/icons";

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
} from "@ionic/react";

const Faq: React.FC = () => {
  const accordionGroupRef = useRef(null);
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
          <IonAccordion value="question-1">
            <IonItem slot="header">
              <IonLabel className="label-header">Question 1</IonLabel>
            </IonItem>

            <IonList slot="content">
              <IonItem>
                <IonLabel className="label-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  expedita vero repellendus architecto odit! Dolorem, recusandae
                  soluta dignissimos veniam ducimus iusto incidunt rerum hic eos
                  reprehenderit. Explicabo quam ex quas.
                </IonLabel>
              </IonItem>
            </IonList>
          </IonAccordion>
          <IonAccordion value="question-2">
            <IonItem slot="header" className="item-header">
              <IonLabel className="label-header">Question 2</IonLabel>
            </IonItem>

            <IonList slot="content">
              <IonItem>
                <IonLabel className="label-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque iste sint sapiente rem maiores consequuntur natus.
                  Porro enim repellendus nulla voluptates veritatis, fuga ipsa,
                  et veniam, aut commodi voluptatum quasi!
                </IonLabel>
              </IonItem>
            </IonList>
          </IonAccordion>
          <IonAccordion value="question-3">
            <IonItem slot="header" className="item-header">
              <IonLabel className="label-header">Question 3</IonLabel>
            </IonItem>

            <IonList slot="content">
              <IonItem>
                <IonLabel className="label-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  laborum, a expedita veniam neque temporibus quae omnis nihil
                  doloremque quasi odio voluptatum quibusdam rerum excepturi
                  corrupti maiores totam provident inventore.
                </IonLabel>
              </IonItem>
            </IonList>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export { Faq };
