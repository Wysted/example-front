import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

// Crear el contexto
const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Sincronizar estado con cookies
    useEffect(() => {
        const userData = Cookies.get("user");
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    // Actualizar cookies cuando el usuario cambia
    useEffect(() => {
        Cookies.set("user", JSON.stringify(user));
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
