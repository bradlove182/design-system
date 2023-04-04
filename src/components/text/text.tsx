import React from "react";
import { className } from "../../utils/class";
import style from "./index.module.css";

type IntrinsicTextElements = Extract<
    keyof JSX.IntrinsicElements,
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
>;

export interface TextProps {
    as?: IntrinsicTextElements;
    children: React.ReactNode;
    appearance?: "default" | "gradient";
}

const Text: React.ComponentType<TextProps> = ({
    as = "p",
    children,
    appearance = "default",
}) => {
    return React.createElement(
        as,
        { className: className([style[appearance], style[as]]) },
        children
    );
};

Text.displayName = "Text";

export default Text;
