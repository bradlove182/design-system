import React from "react";
import { buildClassNames } from "../../utils/class";
import style from "./index.module.css";

export interface PillProps {
    variant?: "info" | "success" | "error" | "warning";
    children: React.ReactNode;
}

const Pill: React.ComponentType<PillProps> = ({
    variant = "info",
    children,
}) => {
    return (
        <span className={buildClassNames([style.pill, style[variant]])}>
            {children}
        </span>
    );
};

export default Pill;
