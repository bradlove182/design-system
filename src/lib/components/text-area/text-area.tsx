import React from "react";
import { Label } from "../label";
import style from "./index.module.css";

export interface TextAreaProps {
    id: string;
    label?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    placeholder?: string;
    disabled?: boolean;
}

const TextArea: React.ComponentType<TextAreaProps> = ({
    id,
    value,
    label,
    onChange,
    placeholder,
    disabled = false,
}) => {
    return (
        <div className={style["text-area"]}>
            {label ? <Label id={id}>{label}</Label> : undefined}
            <textarea
                id={id}
                defaultValue={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                rows={10}
            />
        </div>
    );
};

export default TextArea;
