import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import { User } from "types/User";
import { Route } from "types/Route";

export const userProfileAtom = atomWithStorage("user", {} as User);
export const loggedInAtom = atomWithStorage("logged-in", false);
export const routeAtom = atomWithStorage("route", {} as Route);
export const timeAtom = atom("00:00")





export const useUserProfile = () => {
  const [user, _setUser] = useAtom(userProfileAtom);


  const setUser = (user: User) => {
    _setUser(() => user);
  };

  return [user, setUser] as const;
};

export const useRoute = () => {
  const [newRoute, _setNewRoute] = useAtom(routeAtom);

  const setNewRoute = (route: Route) => {
    _setNewRoute(() => route)
  }

  return [newRoute, setNewRoute] as const;
};


