import { NextPage } from "next";
import { useAuth } from "app/hooks/authHook";
import { auth, googleAuthProvider } from "app/utils/firebase/firebase";

const AuthPage: NextPage = () => {
  const { user } = useAuth();

  const signInWithGoogle = async () => {
    auth.signInWithPopup(googleAuthProvider);
  };

  const signOut = () => {
    auth.signOut();
  };
  return (
    <div>
      <h2>{user?.email}</h2>
      {!user ? (
        <button onClick={signInWithGoogle}>sign in</button>
      ) : (
        <button onClick={signOut}>sign out</button>
      )}
    </div>
  );
};

export default AuthPage;
