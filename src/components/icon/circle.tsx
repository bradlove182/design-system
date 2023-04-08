import React from "react";
import type { IconProps } from ".";
import style from "./index.module.css";

const IconCircle: React.ComponentType<IconProps> = ({
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
            <circle cx="12" cy="12" r="10"></circle>
        </svg>
    );
};

IconCircle.displayName = "Icon Circle";

export default IconCircle;
