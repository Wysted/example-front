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
        const data = response.status;

        return data;
    } catch (e) {
        console.error("Error al registrarse", e);
    }
}

export async function get_user(token) {
    try {
        const res = await fetch(URL + "/users", {
            method: "GET", // o 'POST', 'PUT', 'DELETE', etc., dependiendo de la operación que quieras realizar
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Reemplaza 'TU_TOKEN_AQUI' con tu token real
            },
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    } catch (e) {
        console.error("Error al registrarse", e);
    }
}

export async function update_user(token, data) {
    try {
        const res = await fetch(URL + "/users/update", {
            method: "PATCH", // o 'POST', 'PUT', 'DELETE', etc., dependiendo de la operación que quieras realizar
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Reemplaza 'TU_TOKEN_AQUI' con tu token real
            },
            body: JSON.stringify({
                data: data.data,
                method: data.method,
            }),
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    } catch (e) {
        console.error("Error al registrarse", e);
    }
}
