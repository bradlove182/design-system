import React from "react";
import style from "./index.module.css";
import { buildClassNames } from "../../../utils/class";

export interface DropdownProps {
    children: React.ReactNode;
    align?: "left" | "right";
}

export interface DropdownComponent<T> extends React.FunctionComponent<T> {
    Target: typeof DropdownTarget;
    Menu: typeof DropdownMenu;
}

const DropdownTarget: React.ComponentType<{ children: React.ReactNode }> = ({
    children,
}) => (
    <div tabIndex={0} className={style.target}>
        {children}
    </div>
);

const DropdownMenu: React.ComponentType<{ children: React.ReactNode }> = ({
    children,
}) => (
    <div tabIndex={0} className={style.menu}>
        {children}
    </div>
);

const Dropdown: DropdownComponent<DropdownProps> = ({
    children,
    align = "left",
}) => {
    return (
        <div
            className={buildClassNames([
                style.dropdown,
                align === "right" ? style["dropdown-right"] : "",
            ])}
        >
            {children}
        </div>
    );
};

Dropdown.Target = DropdownTarget;
Dropdown.Menu = DropdownMenu;
Dropdown.displayName = "Dropdown";
export default Dropdown;
