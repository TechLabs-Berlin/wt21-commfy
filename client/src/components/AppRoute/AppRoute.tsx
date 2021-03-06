import { FunctionComponent } from "react";
import { Route as RouterRoute, Redirect, RouteProps } from "react-router-dom";
import { useUserProfile } from "utils/state";
import { routes } from "utils/routes";

const PrivateRoute: FunctionComponent<RouteProps> = (props) => {
  const { children, ...otherProps } = props;
  const [user] = useUserProfile();
  const loggedIn = user !== null;

  return (
    <RouterRoute {...otherProps}>
      {loggedIn === true ? children : <Redirect to={`/${routes.auth.login}`} />}
    </RouterRoute>
  );
};

const PublicRoute: FunctionComponent<RouteProps & { restricted?: boolean }> = (
  props
) => {
  const { children, restricted = false, ...otherProps } = props;
  const loggedIn = false;

  return (
    <RouterRoute {...otherProps}>
      {loggedIn && restricted ? <Redirect to={`/${routes.home}`} /> : children}
    </RouterRoute>
  );
};

export const AppRoute = { Private: PrivateRoute, Public: PublicRoute };
