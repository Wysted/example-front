import { useState } from "react";

const ModalUpdate = ({ closeModal }) => {
    const [formValues, setFormValues] = useState({ email: "", name: "" });

    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
    };
    return (
        <div
            className="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="flex items-center justify-center w-full flex-col">
                                <h3
                                    className="text-base font-semibold leading-6 text-gray-900"
                                    id="modal-title"
                                >
                                    Actualizar usuario
                                </h3>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                    <div className="mt-2">
                                        <form
                                            className="mt-10"
                                            onSubmit={handleSubmit}
                                        >
                                            <label
                                                htmlFor="name"
                                                className="block p-1 mt-2 text-xs font-semibold text-gray-600 uppercase"
                                            >
                                                Nombre
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                placeholder="Correo electronico"
                                                autoComplete="email"
                                                onChange={handleChange}
                                                className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                                                required
                                            />

                                            <label
                                                htmlFor="email"
                                                className="block text-xs font-semibold text-gray-600 uppercase"
                                            >
                                                Correo electronico
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                name="name"
                                                placeholder="Contraseña"
                                                autoComplete="name"
                                                className="block w-full py-3 px-1 mt-2 mb-4
                            
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                                                onChange={handleChange}
                                                required
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 justify-center">
                            <button
                                type="submit"
                                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                            >
                                Actualizar
                            </button>
                            <button
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                onClick={closeModal} // Aquí utilizas la prop para cerrar el modal
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalUpdate;
