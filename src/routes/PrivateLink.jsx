import { useContext } from "react";
import { FirebaseAuthContext } from "../context/AuthContext";

const ShowOnLogin = ({ children }) => {
  const { user, isLoggedIn } = useContext(FirebaseAuthContext);

  if (isLoggedIn && user) {
    return children;
  }
  return null;
};

export const ShowOnLogout = ({ children }) => {
  const { user, isLoggedIn } = useContext(FirebaseAuthContext);
  if (!isLoggedIn && !user) {
    return children;
  }
  return null;
};

export default ShowOnLogin;
