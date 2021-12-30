import { Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, triangle } from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import { FirebaseAppProvider } from "reactfire";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { FirestoreWrapper } from "./components/FirestoreWrapper";
import { AuthWrapper } from "./components/AuthWrapper";
import AuthLogin from "./pages/AuthLogin/AuthLogin";
import { QueryClientProvider } from "react-query";
import { apiClient } from "./utils/api";
import { config } from "./utils/config";
import { routes } from "./utils/routes";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <FirebaseAppProvider firebaseConfig={config.firebase.config}>
        <AuthWrapper>
          <FirestoreWrapper>
            <QueryClientProvider client={apiClient}>
              <IonReactRouter>
                <IonTabs>
                  {/* Routes Mapping */}
                  <IonRouterOutlet>
                    <Route exact path={`/${routes.tab.firebase}`}>
                      <Tab1 />
                    </Route>
                    <Route exact path={`/${routes.tab.api}`}>
                      <Tab2 />
                    </Route>
                    {/* Auth */}
                    <Route exact path={`/${routes.auth.login}`}>
                      <AuthLogin />
                    </Route>
                  </IonRouterOutlet>
                  {/* Tabs */}
                  <IonTabBar slot="bottom">
                    <IonTabButton
                      tab={routes.tab.firebase}
                      href={`/${routes.tab.firebase}`}
                    >
                      <IonIcon icon={triangle} />
                      <IonLabel>Firebase</IonLabel>
                    </IonTabButton>

                    <IonTabButton
                      tab={routes.tab.api}
                      href={`/${routes.tab.api}`}
                    >
                      <IonIcon icon={ellipse} />
                      <IonLabel>API</IonLabel>
                    </IonTabButton>
                  </IonTabBar>
                </IonTabs>
              </IonReactRouter>
            </QueryClientProvider>
          </FirestoreWrapper>
        </AuthWrapper>
      </FirebaseAppProvider>
    </IonApp>
  );
};

export default App;
