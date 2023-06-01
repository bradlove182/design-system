import React from "react";
import { buildClassNames } from "@utils";
import style from "./index.module.css";

export interface PillProps {
    variant?: "brand" | "default" | "info" | "success" | "error" | "warning";
    children: React.ReactNode;
}

const Pill: React.ComponentType<PillProps> = ({
    variant = "default",
    children,
}) => {
    return (
        <span className={buildClassNames([style.pill, style[variant]])}>
            {children}
        </span>
    );
};

export default Pill;
