import React from "react";

import style from "./index.module.css";

export interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.ComponentType<ContainerProps> = ({ children }) => {
    return <div className={style.container}>{children}</div>;
};

Container.displayName = "Container";

export default Container;
