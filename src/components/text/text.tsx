import React from "react";

import style from "./index.module.css";

type IntrinsicTextElements = Extract<
    keyof JSX.IntrinsicElements,
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
>;

export interface TextProps {
    as?: IntrinsicTextElements;
    children: React.ReactNode;
    appearance?: "base" | "gradient";
}

const Text: React.ComponentType<TextProps> = ({
    as = "p",
    children,
    appearance = "base",
}) => {
    return React.createElement(
        as,
        { className: [style[appearance], style[as]].filter(Boolean).join(" ") },
        children
    );
};

export default Text;
