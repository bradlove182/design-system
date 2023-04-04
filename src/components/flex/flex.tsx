import React from "react";
import { buildClassNames } from "../../utils/class";

import style from "./index.module.css";

export interface FlexProps {
    children: React.ReactNode;
    gap?: 1 | 2 | 3 | 4 | 5;
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
}

const Flex: React.ComponentType<FlexProps> = ({
    children,
    alignItems = "center",
    gap = 1,
    direction = "row",
    justifyContent = "start",
    wrap = "nowrap",
}) => {
    return (
        <div
            className={buildClassNames([
                style.flex,
                style[`gap-${gap}`],
                style[`items-${alignItems}`],
                style[`direction-${direction}`],
                style[`justify-${justifyContent}`],
                style[wrap],
            ])}
        >
            {children}
        </div>
    );
};

Flex.displayName = "Flex";

export default Flex;
