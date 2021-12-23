import { FC } from "react";
import { useSigninCheck } from "reactfire";

interface Props {
  fallback: JSX.Element;
}

export const AuthCheckWrapper: FC<Props> = (props) => {
  const { children, fallback } = props;

  const { data: signInCheckResult } = useSigninCheck();

  if (!children) {
    throw new Error("Children must be provided");
  }

  if (signInCheckResult.signedIn === true) {
    return children as JSX.Element;
  } else {
    return fallback;
  }
};
