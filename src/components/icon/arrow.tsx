import React from "react";
import type { IconProps } from ".";
import style from "./index.module.css";
import { buildClassNames } from "../../utils/class";

export interface IconArrowProps extends IconProps {
    direction?: "up" | "down" | "left" | "right";
}

const IconArrow: React.ComponentType<IconArrowProps> = ({
    variant = "default",
    size = 3,
    direction = "right",
}) => {
    return (
        <svg
            className={buildClassNames([
                style.icon,
                style[`direction-${direction}`],
            ])}
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
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
    );
};

IconArrow.displayName = "Icon Arrow";

export default IconArrow;
