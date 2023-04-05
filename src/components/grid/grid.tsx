import React from "react";

type IntrinsicBlockElements = Extract<
    keyof JSX.IntrinsicElements,
    "div" | "section"
>;

import style from "./index.module.css";
import { buildClassNames } from "../../utils/class";

export interface GridProps {
    children: React.ReactNode;
    gap?: 0 | 1 | 2 | 3 | 4 | 5;
    columns?: 1 | 2 | 3 | 4 | 5;
    alignItems?: "baseline" | "center" | "end" | "start" | "stretch";
    justifyContent?: "center" | "end" | "space-between" | "start";
    flow?: "row" | "column" | "dense" | "row-dense" | "column-dense";
    as?: IntrinsicBlockElements;
}

const Grid: React.ComponentType<GridProps> = ({
    children,
    gap = 0,
    columns = 1,
    as = "div",
    flow = "row",
    alignItems = "stretch",
    justifyContent = "center",
}) => {
    return React.createElement(
        as,
        {
            className: buildClassNames([
                style.grid,
                style[`gap-${gap}`],
                style[`flow-${flow}`],
                style[`columns-${columns}`],
                style[`items-${alignItems}`],
                style[`justify-${justifyContent}`],
            ]),
        },
        children
    );
};

Grid.displayName = "Grid";

export default Grid;
