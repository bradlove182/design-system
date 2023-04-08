import React from "react";
import type { IconProps } from ".";
import style from "./index.module.css";

const IconEye: React.ComponentType<IconProps> = ({
    variant = "default",
    size = 3,
}) => {
    return (
        <svg
            className={style.icon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={
                {
                    "--icon-size": `var(--icon-size-${size})`,
                    "--icon-color": `var(--text-${variant}, inherit)`,
                } as React.CSSProperties
            }
        >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
        </svg>
    );
};

IconEye.displayName = "Icon Eye";

export default IconEye;
