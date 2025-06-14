import axios from "axios";
import httpStatus from "http-status";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

const client = axios.create({
    baseURL: "http://localhost:8000/api/v1/users"
})

export const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useNavigate();

    // Check if user is logged in when component mounts
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
            // Optionally, you can verify the token with your backend here
        }
    }, []);

    const handleRegister = async (name, username, password) => {
        try {
            let request = await client.post("/register", {
                name: name,
                username: username,
                password: password
            })

            if (request.status === httpStatus.CREATED) {
                return request.data.message;
            }
        } catch (err) {
            throw err;
        }
    }

    const handleLogin = async (username, password) => {
        try {
            let request = await client.post("/login", {
                username: username,
                password: password
            });

            console.log(username, password)
            console.log(request.data)

            if (request.status === httpStatus.OK) {
                localStorage.setItem("token", request.data.token);
                setIsLoggedIn(true); // Set logged in state to true
                setUserData(request.data); // Store user data if needed
                router("/home")
            }
        } catch (err) {
            throw err;
        }
    }

    const logout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setUserData(null);
        router("/"); // Redirect to home page after logout
    }

    const data = {
        userData, 
        setUserData, 
        isLoggedIn, 
        setIsLoggedIn,
        handleRegister, 
        handleLogin,
        logout
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}