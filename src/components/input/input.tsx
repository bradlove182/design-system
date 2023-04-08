"use client";

import React, { useState, useCallback } from "react";
import { Label } from "../label";
import { Icon } from "../icon";
import style from "./index.module.css";

export interface InputProps {
    id: string;
    type?: "text" | "password" | "email";
    label?: React.ReactNode;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    disabled?: boolean;
}

const Input: React.ComponentType<InputProps> = ({
    id,
    value,
    label,
    type = "text",
    onChange,
    placeholder,
    disabled = false,
}) => {
    const [showPassword, setShowPassword] = useState<Boolean>(false);

    const handleShowPasswordOnClick = useCallback(
        () => setShowPassword((previous) => !previous),
        []
    );

    return (
        <div className={style["input-wrapper"]}>
            {label ? <Label id={id}>{label}</Label> : undefined}
            <div className={style.input}>
                {type === "email" ? <Icon.At /> : undefined}
                <input
                    id={id}
                    type={type === "password" && showPassword ? "text" : type}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    minLength={1}
                />
                {type === "password" ? (
                    <button
                        onClick={handleShowPasswordOnClick}
                        disabled={disabled}
                    >
                        <Icon.Eye />
                    </button>
                ) : undefined}
            </div>
        </div>
    );
};
export default Input;
