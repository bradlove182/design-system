import React from "react";
import { Label } from "../label";
import style from "./index.module.css";

export interface SwitchProps {
    id: string;
    label?: string;
    checked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
}

const Switch: React.ComponentType<SwitchProps> = ({
    id,
    label,
    checked,
    onChange,
    disabled = false,
}) => {
    return (
        <div className={style.switch}>
            <input
                type="checkbox"
                id={id}
                onChange={onChange}
                defaultChecked={checked}
                disabled={disabled}
            />
            {label ? <Label id={id}>{label}</Label> : undefined}
        </div>
    );
};

export default Switch;
