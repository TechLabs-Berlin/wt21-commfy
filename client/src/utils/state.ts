import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import { User } from "types/User";
import { Route } from "types/Route";

export const userProfileAtom = atomWithStorage("user", {} as User);
export const loggedInAtom = atomWithStorage("logged-in", false);
export const routeAtom = atomWithStorage(`Route:${Math.floor(Math.random() * 10 + 1)}`, {} as Route);





export const useUserProfile = () => {
  const [user, _setUser] = useAtom(userProfileAtom);


  const setUser = (user: User) => {
    _setUser(() => user);
  };

  return [user, setUser] as const;
};

export const useRoute = () => {
  const [route, setRoute] = useAtom(routeAtom);

  return [route, setRoute] as const;
};


