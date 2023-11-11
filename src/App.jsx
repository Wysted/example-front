import { Route } from "wouter";
import LoginPage from "./pages/(auth)/login";
import RegisterPage from "./pages/(auth)/register";

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
        </>
    );
}

export default App;
