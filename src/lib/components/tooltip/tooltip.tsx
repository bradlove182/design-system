import React from "react";
import { buildClassNames } from "../../../utils/class";

import style from "./index.module.css";

export interface TooltipProps {
    tip: string;
    position?: "top" | "bottom" | "left" | "right";
    children: React.ReactNode;
}

const Tooltip: React.ComponentType<TooltipProps> = ({
    tip,
    position = "bottom",
    children,
}) => {
    return (
        <div
            className={buildClassNames([style.tooltip, style[position]])}
            data-tooltip={tip}
        >
            {children}
        </div>
    );
};

Tooltip.displayName = " Tooltip";

export default Tooltip;
