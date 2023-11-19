import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocation } from "wouter";

export function Logout() {
    const [, setLocation] = useLocation();
    const { isAuthenticated, logoutContext } = useContext(AuthContext);

    useEffect(() => {
        if (!isAuthenticated) {
            setLocation("/login");
        }
    }, [setLocation, isAuthenticated]);

    const handleClick = () => {
        logoutContext();
    };
    return (
        <button
            onClick={handleClick}
            className=" p-4 bg-slate-300 rounded-2xl hover:bg-slate-400 hover:text-white"
        >
            Cerrar Sesion
        </button>
    );
}
