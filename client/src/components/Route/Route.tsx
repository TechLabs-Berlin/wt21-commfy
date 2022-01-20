import { FunctionComponent } from "react";
import { Route as RouterRoute, Redirect, RouteProps } from "react-router-dom";

import { routes } from "utils/routes";

const loggedIn = false;

const PrivateRoute: FunctionComponent<RouteProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <RouterRoute {...otherProps}>
      {loggedIn ? children : <Redirect to={`/${routes.auth.login}`} />}
    </RouterRoute>
  );
};

const PublicRoute: FunctionComponent<RouteProps & { restricted?: boolean }> = (
  props
) => {
  const { children, restricted = false, ...otherProps } = props;

  return (
    <RouterRoute {...otherProps}>
      {loggedIn && restricted ? <Redirect to={`/${routes.home}`} /> : children}
    </RouterRoute>
  );
};

export const Route = { Private: PrivateRoute, Public: PublicRoute };
