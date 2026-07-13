import { createContext, useState, useEffect, useContext } from "react";
import api from "./axios"; // Adjust path to point to your axios configuration file above

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
    setLoading(false);
  }, [token]);

  const loginUser = (accessToken, userData) => {
    localStorage.setItem("token", accessToken);
    localStorage.setItem("user", JSON.stringify(userData));
    setToken(accessToken);
    setUser(userData);
  };

  const logoutUser = async () => {
    console.log("running1");

    try {
      // Wrap the call with a 2-second timeout so it cannot hang indefinitely
      await api.post("/logout", {}, { timeout: 2000 });
      console.log("completed");
    } catch (error) {
      console.error(
        "Backend logout network request timed out or failed:",
        error.message,
      );
    } finally {
      console.log("Running frontend cleanup now");
      // This will now ALWAYS execute, freeing your UI state
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setToken(null);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, token, loading, loginUser, logoutUser, setUser }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
