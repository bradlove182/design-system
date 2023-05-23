import React from "react";
import { buildClassNames } from "../../../utils/class";

type IntrinsicBlockElements = Extract<
    keyof JSX.IntrinsicElements,
    "div" | "section"
>;

import style from "./index.module.css";

export interface FlexProps {
    children: React.ReactNode;
    fullWidth?: boolean;
    gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
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

const Flex: React.ComponentType<FlexProps> = ({
    children,
    alignItems = "center",
    gap = 3,
    direction = "row",
    justifyContent = "start",
    wrap = "nowrap",
    as = "div",
    fullWidth = false,
}) => {
    return React.createElement(
        as,
        {
            className: buildClassNames([
                style.flex,
                style[`gap-${gap}`],
                style[`items-${alignItems}`],
                style[`direction-${direction}`],
                style[`justify-${justifyContent}`],
                style[wrap],
                fullWidth ? style["full-width"] : "",
            ]),
        },
        children
    );
};

Flex.displayName = "Flex";

export default Flex;
