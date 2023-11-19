import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "wouter";
import { get_user } from "../api";
import { Logout } from "./Logout";
import { Edit } from "./Icons";
import InputUpdate from "./InputUpdate";
export default function Profile() {
    const [, setLocation] = useLocation();
    const { isAuthenticated, tokenCookie } = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const [update1, setUpdate1] = useState(false);
    const [update2, setUpdate2] = useState(false);
    useEffect(() => {
        const getUser = async () => {
            setUser(await get_user(tokenCookie));
        };
        // 2. Usa useEffect
        if (isAuthenticated) {
            getUser();
        } else {
            setLocation("/");
        }
    }, [setLocation, isAuthenticated, tokenCookie, update1, update2]);

    const handleUpdate1 = () => {
        setUpdate1(!update1);
    };
    const handleUpdate2 = () => {
        setUpdate2(!update2);
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
                        Perfil
                    </h2>
                    {user ? (
                        <>
                            <div className=" h-32">
                                <div className="w-full flex justify-between p-4">
                                    <div className="w-full flex px-1">
                                        <span className="px-1">Nombre: </span>
                                        {update1 ? (
                                            <InputUpdate
                                                id="name"
                                                name="data"
                                                method="name"
                                                type="text"
                                                token={tokenCookie}
                                                setUpdate={setUpdate1}
                                            />
                                        ) : (
                                            <div className=" flex flex-row">
                                                {user.body.name}
                                                <span
                                                    className=" cursor-pointer px-2"
                                                    onClick={handleUpdate1}
                                                >
                                                    <Edit />
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="w-full flex justify-between p-4">
                                    <div className="w-full flex px-1">
                                        <span className="px-1">Email: </span>
                                        {update2 ? (
                                            <InputUpdate
                                                id="email"
                                                name="data"
                                                method="email"
                                                type="email"
                                                token={tokenCookie}
                                                setUpdate={setUpdate2}
                                            />
                                        ) : (
                                            <div className=" flex flex-row">
                                                {user.body.email}
                                                <span
                                                    className=" cursor-pointer px-2"
                                                    onClick={handleUpdate2}
                                                >
                                                    <Edit />
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-around">
                                <Logout />
                            </div>
                        </>
                    ) : (
                        <div>loading....</div>
                    )}
                </div>
            </div>
        </div>
    );
}
