import React from "react";
import style from "./index.module.css";

export interface LabelProps {
    id: string;
    children: React.ReactNode;
}

const Label: React.ComponentType<LabelProps> = ({ id, children }) => {
    return (
        <label className={style.label} htmlFor={id}>
            {children}
        </label>
    );
};

export default Label;
