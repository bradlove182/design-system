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
    direction?: "column" | "column-reverse" | "row" | "row-reverse";
    alignItems?:
        | "baseline"
        | "center"
        | "end"
        | "flex-end"
        | "flex-start"
        | "start"
        | "stretch";
    justifyContent?:
        | "center"
        | "end"
        | "space-around"
        | "space-between"
        | "space-evenly"
        | "start";
    wrap?: "wrap" | "nowrap";
    as?: IntrinsicBlockElements;
}

const Grid: React.ComponentType<GridProps> = ({ children, as = "div" }) => {
    return React.createElement(
        as,
        { className: buildClassNames([""]) },
        children
    );
};

Grid.displayName = "Grid";

export default Grid;
