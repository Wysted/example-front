import { Route } from "wouter";
import LoginPage from "./pages/(auth)/login";
import RegisterPage from "./pages/(auth)/register";
import ProfilePage from "./pages/profile";
function App() {
    return (
        <>
            <Route
                component={LoginPage}
                path="/"
            />
            <Route
                component={RegisterPage}
                path="/register"
            />
            <Route
                component={ProfilePage}
                path="/profile"
            />
        </>
    );
}

export default App;
