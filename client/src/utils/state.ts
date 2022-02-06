import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import { User } from "types/User";
import { Route } from "types/Route";

export const userProfileAtom = atomWithStorage("user", {} as User);

export const routeAtom = atomWithStorage("route", {} as Route); // archetype for creating new routes
export const selectAtom = atom(NaN); //used for visual display of schedule on /home
export const timeAtom = atom("00:00"); //used to display starting time on RouteCards
export const hardnessAtom = atom("normal"); //used to retrieve hardness of route for API input


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
  };

  return [newRoute, setNewRoute] as const;
};


