import React from "react";

export interface ButtonProps {
    children: React.ReactNode;
    variant?: "base" | "icon";
    appearance?: "primary" | "transparent" | "outline";
}

const buttonAppearances: Record<
    NonNullable<ButtonProps["appearance"]>,
    string
> = {
    primary: "bg-brand text-white",
    transparent: "bg-transparent hover:text-brand",
    outline: "border",
};

const buttonVariants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    base: "w-max",
    icon: "w-11",
};

const Button: React.ComponentType<ButtonProps> = ({
    children,
    variant = "base",
    appearance = "primary",
}) => {
    return (
        <button
            className={[
                "relative flex h-11 items-center justify-center gap-2 rounded-lg px-4 text-base transition duration-200 hover:shadow-glow",
                buttonAppearances[appearance],
                buttonVariants[variant],
            ]
                .filter(Boolean)
                .join(" ")}
            type="button"
        >
            {children}
        </button>
    );
};

Button.displayName = "Button";

export default Button;
