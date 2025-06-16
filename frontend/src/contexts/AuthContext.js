import axios from "axios";
import httpStatus from "http-status";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const client = axios.create({
    baseURL: `${API_BASE_URL}/api/v1/users`
});

export const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleRegister = async (name, username, password) => {
        try {
            let request = await client.post("/register", {
                name,
                username,
                password
            });

            if (request.status === httpStatus.CREATED) {
                return request.data.message;
            }
        } catch (err) {
            throw err;
        }
    };

    const handleLogin = async (username, password) => {
        try {
            let request = await client.post("/login", {
                username,
                password
            });

            if (request.status === httpStatus.OK) {
                localStorage.setItem("token", request.data.token);
                setIsLoggedIn(true);
                setUserData(request.data);
                router("/home");
            }
        } catch (err) {
            throw err;
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setUserData(null);
        router("/");
    };

    const data = {
        userData,
        setUserData,
        isLoggedIn,
        setIsLoggedIn,
        handleRegister,
        handleLogin,
        logout
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};
