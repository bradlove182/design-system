import React, { CSSProperties } from "react";
import { buildClassNames } from "../../utils/class";
import style from "./index.module.css";

type IntrinsicTextElements = Extract<
    keyof JSX.IntrinsicElements,
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "strong" | "em"
>;

export interface TextProps {
    as?: IntrinsicTextElements;
    children: React.ReactNode;
    variant?: "default" | "gradient";
    size?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
}

const Text: React.ComponentType<TextProps> = ({
    as = "p",
    children,
    variant = "default",
    size,
}) => {
    return React.createElement(
        as,
        {
            className: buildClassNames([
                style[variant],
                style[as],
                size ? style[`size-${size}`] : "",
            ]),
        },
        children
    );
};

Text.displayName = "Text";

export default Text;
