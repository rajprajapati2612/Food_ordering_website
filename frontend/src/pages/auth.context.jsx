import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMe = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/user/get-me",
        {
          withCredentials: true,
        }
      );

      console.log("Get Me:", response.data.user);

      setUser(response.data.user);
    } catch (error) {
      console.log("Get Me error:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMe();
  }, []);

  useEffect(() => {
    console.log("Updated user:", user);
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};