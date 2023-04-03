import React from "react";

export interface ButtonProps {
    children: React.ReactNode;
}

const Button: React.ComponentType<ButtonProps> = ({ children }) => {
    return (
        <button className="text-white bg-gray-100 p-4" type="button">
            {children}
        </button>
    );
};

Button.displayName = "Button";

export default Button;
