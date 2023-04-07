import React from "react";
import style from "./index.module.css";

export interface InlineCodeProps {
    children: React.ReactNode;
}

const InlineCode: React.ComponentType<InlineCodeProps> = ({ children }) => {
    return <code className={style.code}>{children}</code>;
};

InlineCode.displayName = "Inline Code";

export default InlineCode;
