import { Route } from "wouter";
import LoginPage from "./pages/(auth)/login";
import RegisterPage from "./pages/(auth)/register";
import ProfilePage from "./pages/profile";
import { useEffect, useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { getCookie } from "./utils/cookies";

function App() {
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        const token = getCookie("Token");
        if (token) {
            auth(true);
        } else {
            auth(false);
        }
    }, [auth]);
    return (
        <>
            <Route
                component={LoginPage}
                path="/"
            />
            <Route
                path="/profile"
                component={ProfilePage}
            />
            <Route
                component={RegisterPage}
                path="/register"
            />
        </>
    );
}

export default App;
