import React from "react";

import style from "./index.module.css";

export interface ContainerProps {
    children: React.ReactNode;
    width?: string;
}

const Container: React.ComponentType<ContainerProps> = ({
    children,
    width,
}) => {
    return (
        <div
            className={style.container}
            style={{
                maxWidth: width ?? "inherit",
            }}
        >
            {children}
        </div>
    );
};

Container.displayName = "Container";

export default Container;
