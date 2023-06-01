import React from "react";

type IntrinsicBlockElements = Extract<
    keyof JSX.IntrinsicElements,
    "div" | "section"
>;

import style from "./index.module.css";
import { buildClassNames } from "@utils";

export interface GridProps {
    children: React.ReactNode;
    gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    columns?: 1 | 2 | 3 | 4 | 5;
    alignItems?: "baseline" | "center" | "end" | "start" | "stretch";
    justifyContent?: "center" | "end" | "space-between" | "start";
    flow?: "row" | "column" | "dense" | "row dense" | "column dense";
    as?: IntrinsicBlockElements;
    className?: string;
}

const Grid: React.ComponentType<GridProps> = ({
    children,
    gap = 0,
    columns = 1,
    as = "div",
    flow = "row",
    alignItems = "stretch",
    justifyContent = "",
    className = "",
}) => {
    return React.createElement(
        as,
        {
            className: buildClassNames([style.grid, className]),
            style: {
                "--grid-gap": `var(--spacing-${gap})`,
                "--grid-columns": columns,
                "--align-items": alignItems,
                "--justify-content": justifyContent,
                "--grid-auto-flow": flow,
            },
        },
        children
    );
};

Grid.displayName = "Grid";

export default Grid;
