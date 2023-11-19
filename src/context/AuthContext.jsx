import { createContext, useEffect, useState } from "react";
import { login } from "../api";
import { setCookie, removeCookie, getCookie } from "../utils/cookies";
// Creamos el contexto
const AuthContext = createContext();

// Creamos el proveedor del contexto
const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [tokenCookie, setTokenCookie] = useState(null);
    useEffect(() => {
        setTokenCookie(getCookie("Token"));
        if (tokenCookie) {
            console.log("Si hay cookie");
        } else {
            console.log("No hay cookie");
        }
    }, [tokenCookie]);
    const loginContext = async (data) => {
        // Lógica de autenticación (puede ser una llamada a una API, etc.)
        const res = await login(data);
        setCookie("Token", res.body.token, { secure: true });
        setIsAuthenticated(true);
        return res;
    };

    const logoutContext = () => {
        removeCookie("Token");
        setIsAuthenticated(false);
    };

    const auth = (data) => {
        setIsAuthenticated(data);
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                tokenCookie,
                auth,
                loginContext,
                logoutContext,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
