import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { bicycle, calendar, person } from "ionicons/icons";
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
import "theme/variables.css";
import "theme/globals.css";

import { FirestoreWrapper } from "components/FirestoreWrapper";
import { AuthWrapper } from "components/AuthWrapper";
import AuthLogin from "pages/AuthLogin/AuthLogin";
import { QueryClientProvider } from "react-query";
import { apiClient } from "utils/api";
import { config } from "utils/config";
import { routes } from "utils/routes";
import AuthRegister from "pages/AuthRegister/AuthRegister";
import { Usersettings } from "pages/UserSettings/UserSettings";
import { ProfileHome } from "pages/ProfileHome/ProfileHome";

import { Faq } from "pages/Faq";
import { Route } from "components/Route";
import TodayScheduleHome from "pages/TodayScheduleHome";
import { Routesdirectory } from "pages/RoutesDirectory/Routesdirectory";
import Home from "pages/Home/Home";

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
                    {/* Auth */}
                    <Route.Public exact path={`/${routes.auth.login}`}>
                      <AuthLogin />
                    </Route.Public>
                    <Route.Private exact path={`/${routes.today.home}`}>
                      <TodayScheduleHome />
                    </Route.Private>
                    <Route.Public exact path={`/${routes.auth.register}`}>
                      <AuthRegister />
                    </Route.Public>
                    <Route.Public exact path={`/${routes.home}`}>
                      <Home />
                    </Route.Public>
                    {/* Profile */}
                    <Route.Private exact path={`/${routes.profile.routes}`}>
                      <Routesdirectory />
                    </Route.Private>
                    <Route.Private exact path={`/${routes.profile.faq}`}>
                      <Faq />
                    </Route.Private>
                    <Route.Private exact path={`/${routes.profile.home}`}>
                      <ProfileHome />
                    </Route.Private>
                    <Route.Private exact path={`/${routes.profile.settings}`}>
                      <Usersettings />
                    </Route.Private>
                  </IonRouterOutlet>
                  {/* Tabs */}
                  <IonTabBar slot="bottom">
                    <IonTabButton
                      tab={routes.today.home}
                      href={`/${routes.today.home}`}
                    >
                      <IonIcon icon={calendar} />
                    </IonTabButton>

                    <IonTabButton tab={routes.home} href={`/${routes.home}`}>
                      <IonIcon icon={bicycle} />
                    </IonTabButton>

                    <IonTabButton
                      tab={routes.profile.home}
                      href={`/${routes.profile.home}`}
                    >
                      <IonIcon icon={person} />
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
