import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { authenticate, loadUser } from "../utils/authRequests";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const socket = io(process.env.REACT_APP_SOCKET_URL);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [tokenPayload, setTokenPayload] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);

  const completeLogin = useCallback(({ token }) => {
    console.log("Login");
    localStorage.setItem("user-token", token);
    const payload = jwt_decode(token).payload;
    setTokenPayload(payload);
    setUser(payload.username);
    console.log(tokenPayload);
    setLoading(false);
  }, []);

  const completeError = useCallback(({ error }) => {
    console.log("Error");
    setError(error);
    setLoading(false);
  }, []);

  const completeReauthentication = useCallback(() => {
    console.log("Reauthenticated");
    const token = localStorage.getItem("user-token");
    const payload = jwt_decode(token);
    console.log(payload);
    setTokenPayload(payload);
    setLoading(false);
    setUser("Test");
  }, [setLoading, setUser]);

  useEffect(() => {
    const token = localStorage.getItem("user-token");

    socket.on("authenticated", completeLogin);
    socket.on("error", completeError);
    socket.on("reauthenticated", completeReauthentication);

    if (token) {
      console.log("Emitting reauthenticate");
      socket.emit("reauthenticate", { token });
    } else {
      setLoadingInitial(false);
    }

    return () => {
      socket.off("authenticated", completeLogin);
      socket.off("error", completeError);
      socket.off("reauthenticated", completeReauthentication);
    };
  }, [
    setLoadingInitial,
    completeError,
    completeLogin,
    completeReauthentication,
  ]);

  const signIn = async ({ username, password }) => {
    setLoading(true);
    socket.emit("authenticate", { username, password });
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
