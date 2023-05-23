import React from "react";
import type { IconProps } from ".";
import style from "./index.module.css";

const IconX: React.ComponentType<IconProps> = ({
    variant = "default",
    size = 3,
}) => {
    return (
        <svg
            className={style.icon}
            style={
                {
                    "--icon-size": `var(--icon-size-${size})`,
                    "--icon-color": `var(--text-${variant}, inherit)`,
                } as React.CSSProperties
            }
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    );
};

IconX.displayName = "Icon X";

export default IconX;
