import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import { User } from "types/User";

export const userProfileAtom = atomWithStorage("user", {} as User);

export const useUserProfile = () => {
  const [user, _setUser] = useAtom(userProfileAtom);

  const setUser = (user: User) => {
    _setUser(() => user);
  };

  return [user, setUser] as const;
};
