import { Link } from "wouter";
import { useState } from "react";

export default function Login() {
    const [formValues, setFormValues] = useState({ email: "", password: "" });
    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(
            "Email:",
            formValues.email,
            "Password:",
            formValues.password
        );
        // Aquí puedes agregar la lógica para enviar los datos a un servidor, etc.
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="grid place-items-center mx-2 my-20 sm:my-auto">
                <div
                    className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg"
                >
                    <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                        Inicio de sesion
                    </h2>

                    <form className="mt-10">
                        <label
                            htmlFor="email"
                            className="block text-xs font-semibold text-gray-600 uppercase"
                        >
                            Correo electronico
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Correo electronico"
                            autoComplete="email"
                            className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            onChange={handleChange}
                            required
                        />

                        <label
                            htmlFor="password"
                            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                        >
                            Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            autoComplete="current-password"
                            onChange={handleChange}
                            className="block w-full py-3 px-1 mt-2 mb-4
                            
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required
                        />

                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
                        >
                            Iniciar sesion
                        </button>

                        <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                            <Link href="/register">
                                <p className="flex-2 cursor-pointer ">
                                    Registrarse
                                </p>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
