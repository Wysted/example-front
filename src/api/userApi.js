const URL = "http://localhost:6060/api/v1";

export async function login(dataLogin) {
    try {
        const response = await fetch(URL + "/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: dataLogin.email,
                password: dataLogin.password,
            }),
        });

        if (!response) {
            throw new Error(
                "Network response was not ok " + response.statusText
            );
        }
        const data = await response.json();

        return data;
    } catch (e) {
        console.error("Error al iniciar sesion", e);
    }
}

export async function register(dataRegister) {
    try {
        const response = await fetch(URL + "/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: dataRegister.name,
                email: dataRegister.email,
                password: dataRegister.password,
            }),
        });

        if (!response) {
            throw new Error(
                "Network response was not ok " + response.statusText
            );
        }
        const data = await response.status;

        return data;
    } catch (e) {
        console.error("Error al registrarse", e);
    }
}
