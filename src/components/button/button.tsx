import React from "react";
import { buildClassNames } from "../../utils/class";

import style from "./index.module.css";

export interface ButtonBaseProps {
    children: React.ReactNode;
    size?: "default" | "small";
    icon?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

export interface ButtonOnlyIconProps extends ButtonBaseProps {
    icon: true;
    size?: "default" | "small";
    variant?: never;
}

export interface ButtonNormalProps extends ButtonBaseProps {
    icon?: never;
    size?: never;
    variant?: "primary" | "secondary" | "transparent" | "outline" | "gradient";
}

export type ButtonProps = ButtonOnlyIconProps | ButtonNormalProps;

const Button: React.ComponentType<ButtonProps> = ({
    children,
    variant = "primary",
    size = "default",
    icon = false,
    disabled = false,
    onClick,
}) => {
    return (
        <button
            className={buildClassNames([
                style.button,
                style[variant],
                icon ? style.icon : "",
                icon ? style[`size-${size}`] : "",
            ])}
            disabled={disabled}
            type="button"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

Button.displayName = "Button";

export default Button;
