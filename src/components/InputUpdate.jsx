import { Check } from "./Icons";
import { useState } from "react";
import { update_user } from "../api";
export default function InputUpdate({
    type,
    id,
    name,
    method,
    token,
    setUpdate,
}) {
    const [formValues, setFormValues] = useState({ method: method });

    const handleClick = () => {
        update_user(token, formValues);
        setUpdate(false);
    };

    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };
    return (
        <div className="w-full flex">
            <input
                id={id}
                type={type}
                name={name}
                onChange={handleChange}
            />
            <button
                className="h-full"
                onClick={handleClick}
            >
                <Check />
            </button>
        </div>
    );
}
