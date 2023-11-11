import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { register } from "../api";
export default function Register() {
    const [res, setRes] = useState(null);
    const [, setLocation] = useLocation(); // 2. Usar el hook useLocation
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        name: "",
    });
    useEffect(() => {
        // 2. Usa useEffect
        if (res === 201) {
            setLocation("/");
        }
    }, [res, setLocation]);
    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await register(formValues);
        console.log(data);
        setRes(data);
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
                        Registro
                    </h2>

                    <form className="mt-10">
                        <label
                            htmlFor="name"
                            className="block text-xs font-semibold text-gray-600 uppercase"
                        >
                            Nombre
                        </label>
                        <input
                            id="name"
                            onChange={handleChange}
                            type="name"
                            name="name"
                            placeholder="Nombre"
                            autoComplete="name"
                            className="block w-full py-2 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required
                        />

                        <label
                            htmlFor="password"
                            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                        >
                            Correo electronico
                        </label>
                        <input
                            onChange={handleChange}
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Correo electronico"
                            autoComplete="email"
                            className="block w-full py-2 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required
                        />
                        <label
                            htmlFor="password"
                            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                        >
                            Password
                        </label>
                        <input
                            onChange={handleChange}
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            autoComplete="current-password"
                            className="block w-full py-2 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required
                        />

                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
                        >
                            Registrar
                        </button>

                        <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                            <Link href="/">
                                <p
                                    href="#"
                                    className="flex-2 flex-2 cursor-pointer "
                                >
                                    Iniciar sesion
                                </p>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
