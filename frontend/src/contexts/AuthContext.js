import axios from "axios";
import httpStatus from "http-status";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

const client = axios.create({
  baseURL: "http://localhost:8000/api/v1/users"
});

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const navigate = useNavigate();

  const handleRegister = async (name, username, password) => {
    try {
      const response = await client.post("/register", {
        name,
        username,
        password
      });

      if (response.status === httpStatus.CREATED) {
        return response.data.message; // success message
      }
    } catch (err) {
      throw err;
    }
  };

  const handleLogin = async (username, password) => {
    try {
      const response = await client.post("/login", {
        username,
        password
      });

      if (response.status === httpStatus.OK) {
        const { token, user } = response.data;

        localStorage.setItem("token", token);
        setUserData(user);
        setIsLoggedIn(true);

        // ✅ Redirect to homepage (not dashboard)
        navigate("/");
      }
    } catch (err) {
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUserData(null);
    setIsLoggedIn(false);
    navigate("/login");
  };

  const getHistoryOfUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await client.get("/get_all_activity", {
        params: { token }
      });
      return response.data;
    } catch (err) {
      throw err;
    }
  };

  const addToUserHistory = async (meetingCode) => {
    try {
      const token = localStorage.getItem("token");
      const response = await client.post("/add_to_activity", {
        token,
        meeting_code: meetingCode
      });
      return response;
    } catch (err) {
      throw err;
    }
  };

  const data = {
    userData,
    isLoggedIn,
    setUserData,
    handleRegister,
    handleLogin,
    logout,
    getHistoryOfUser,
    addToUserHistory
  };

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
};
