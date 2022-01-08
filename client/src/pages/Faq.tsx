import React, { useRef } from "react";
import "./Faq.css";

import {
  IonContent,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
} from "@ionic/react";

const Faq: React.FC = () => {
  const accordionGroupRef = useRef(null);

  return (
    <IonPage>
      <IonContent>
        {/*-- Open Accordion --*/}
        <IonAccordionGroup value="faq">
          <IonAccordion value="question-1">
            <IonItem slot="header">
              <IonLabel>Question 1</IonLabel>
            </IonItem>

            <IonList slot="content">
              <IonItem>
                <IonLabel>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  expedita vero repellendus architecto odit! Dolorem, recusandae
                  soluta dignissimos veniam ducimus iusto incidunt rerum hic eos
                  reprehenderit. Explicabo quam ex quas.
                </IonLabel>
              </IonItem>
            </IonList>
          </IonAccordion>
          <IonAccordion value="question-2">
            <IonItem slot="header">
              <IonLabel>Question 2</IonLabel>
            </IonItem>

            <IonList slot="content">
              <IonItem>
                <IonLabel>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque iste sint sapiente rem maiores consequuntur natus.
                  Porro enim repellendus nulla voluptates veritatis, fuga ipsa,
                  et veniam, aut commodi voluptatum quasi!
                </IonLabel>
              </IonItem>
            </IonList>
          </IonAccordion>
          <IonAccordion value="question-3">
            <IonItem slot="header">
              <IonLabel>Question 3</IonLabel>
            </IonItem>

            <IonList slot="content">
              <IonItem>
                <IonLabel>
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
