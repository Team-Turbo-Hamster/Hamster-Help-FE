import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { authenticate, loadUser } from "../utils/authRequests";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("user-token");
    if (token) {
      loadUser(token).then((data) => {
        setUser(data);
        setLoadingInitial(false);
      });
    } else {
      setLoadingInitial(false);
    }
  }, []);

  console.log(user);

  const signIn = async (details) => {
    setLoading(true);
    try {
      const user = await authenticate(details);

      if (user) {
        localStorage.setItem("user-token", user.token);
        setUser(user);
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoadingInitial(false);
    }
  };

  const signOut = () => {
    setUser("");
    localStorage.removeItem("user-token");
  };
  const memoedValue = useMemo(
    () => ({
      user,
      error,
      loading,
      signIn,
      signOut,
    }),
    [user, loading, error]
  );
  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};
export default function useAuth() {
  return useContext(AuthContext);
}
