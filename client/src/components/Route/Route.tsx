import { FunctionComponent, useEffect } from "react";
import { Route as RouterRoute, Redirect, RouteProps } from "react-router-dom";
import { useUserProfile, loggedInAtom } from "utils/state";
import { routes } from "utils/routes";
import { useAtom } from "jotai";









const PrivateRoute: FunctionComponent<RouteProps> = (props) => {

  const { children, ...otherProps } = props;
  const [user] = useUserProfile();
  const [loggedIn, setLoggedIn] = useAtom(loggedInAtom)

  useEffect(() => user.email ? setLoggedIn(true) : console.log("no user found"), [])


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
  const loggedIn = false

  return (
    <RouterRoute {...otherProps}>
      {loggedIn && restricted ? <Redirect to={`/${routes.home}`} /> : children}
    </RouterRoute>
  );
};

export const Route = { Private: PrivateRoute, Public: PublicRoute };
