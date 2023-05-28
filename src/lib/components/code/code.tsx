import React from "react";
import style from "./index.module.css";

export interface CodeProps {
    children: React.ReactNode;
}

const Code: React.ComponentType<CodeProps> = ({ children }) => {
    return <code className={style.code}>{children}</code>;
};

Code.displayName = "Code";

export default Code;
