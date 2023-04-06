import React from "react";
import { buildClassNames } from "../../utils/class";

import style from "./index.module.css";

export interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "transparent" | "outline" | "gradient";
    size?: "default" | "small";
    icon?: boolean;
}

const Button: React.ComponentType<ButtonProps> = ({
    children,
    variant = "primary",
    size = "default",
    icon = false,
}) => {
    return (
        <button
            className={buildClassNames([
                style.button,
                style[variant],
                icon ? style.icon : "",
            ])}
            type="button"
        >
            {children}
        </button>
    );
};

Button.displayName = "Button";

export default Button;
