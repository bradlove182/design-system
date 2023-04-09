import React from "react";
import { Label } from "../label";
import style from "./index.module.css";

export interface CheckboxProps {
    id: string;
    label?: string;
    checked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
}

const Checkbox: React.ComponentType<CheckboxProps> = ({
    id,
    label,
    checked,
    onChange,
    disabled,
}) => {
    return (
        <div className={style.checkbox}>
            <input
                id={id}
                type="checkbox"
                onChange={onChange}
                defaultChecked={checked}
                disabled={disabled}
            />
            {label ? <Label id={id}>{label}</Label> : undefined}
        </div>
    );
};

Checkbox.displayName = "Checkbox";
export default Checkbox;
