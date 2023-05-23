import React from "react";

import style from "./index.module.css";
import { buildClassNames } from "../../../utils/class";

export interface ContainerProps {
    children: React.ReactNode;
    size?: 1 | 2 | 3 | 4;
}

const Container: React.ComponentType<ContainerProps> = ({
    children,
    size = 4,
}) => {
    return (
        <div
            className={buildClassNames([
                style.container,
                style[`container-size-${size}`],
            ])}
        >
            {children}
        </div>
    );
};

Container.displayName = "Container";

export default Container;
