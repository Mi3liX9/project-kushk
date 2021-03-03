import { createContext, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FirebaseUserType } from "src/types/firebase-user";
import { auth } from "src/utils/firebase/firebase";

const UserContext = createContext<{ user: FirebaseUserType }>({
  user: null,
});

export const AuthProvider: React.FC = ({ children }) => {
  const [user] = useAuthState(auth);
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
