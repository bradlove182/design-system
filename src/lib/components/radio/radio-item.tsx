import React from "react";
import { Label } from "../label";
import { RadioContext } from "./context";
import style from "./index.module.css";

export interface RadioItemProps {
    id: string;
    label?: string;
    checked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
}

const RadioItem: React.ComponentType<RadioItemProps> = ({
    id,
    onChange,
    checked,
    disabled,
    label,
}) => {
    const [getRadioContext] = RadioContext;
    return (
        <div className={style["radio-item"]}>
            <input
                type="radio"
                id={id}
                onChange={onChange}
                defaultChecked={checked}
                disabled={disabled}
                role="radio"
                name={getRadioContext()}
            />
            {label ? <Label id={id}>{label}</Label> : undefined}
        </div>
    );
};

RadioItem.displayName = "Radio Item";
export default RadioItem;
