import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ value, onChange, placeholder }) => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    return (
        <div className="relative mb-4">
            <input
                value={value}
                onChange={onChange}
                type={isShowPassword ? "text" : "password"}
                placeholder={placeholder || "Please enter your password"}
                className="w-full px-4 py-2 bg-zinc-900 border border-zinc-600 rounded text-white focus:outline-0 pr-10"
            />
            <div
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-white"
                onClick={toggleShowPassword}
            >
                {isShowPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
            </div>
        </div>
    );
};

export default PasswordInput;
