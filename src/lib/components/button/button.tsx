import React from "react";
import { buildClassNames } from "../../../utils/class";

import style from "./index.module.css";

export type IntrinsicButtonElements = Extract<
    keyof JSX.IntrinsicElements,
    "button" | "span"
>;

export interface ButtonBaseProps {
    children: React.ReactNode;
    size?: "default" | "small";
    icon?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    as?: IntrinsicButtonElements;
}

export interface ButtonOnlyIconProps extends ButtonBaseProps {
    icon: true;
    size?: "default" | "small";
    variant?: never;
}

export interface ButtonNormalProps extends ButtonBaseProps {
    icon?: never;
    size?: never;
    variant?: "brand" | "transparent" | "outline" | "gradient";
}

export type ButtonProps = ButtonOnlyIconProps | ButtonNormalProps;

const Button: React.ComponentType<ButtonProps> = ({
    children,
    variant = "brand",
    size = "default",
    icon = false,
    disabled = false,
    onClick,
    as = "button",
}) => {
    return (
        <>
            {React.createElement(
                as,
                {
                    className: buildClassNames([
                        style.button,
                        style[variant],
                        icon ? style.icon : "",
                        icon ? style[`size-${size}`] : "",
                    ]),
                    disabled: disabled,
                    type: "button",
                    role: "button",
                    onClick: onClick,
                },
                children
            )}
        </>
    );
};

Button.displayName = "Button";

export default Button;
