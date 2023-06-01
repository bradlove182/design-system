import React from "react";

import style from "./index.module.css";
import { buildClassNames } from "@utils";

export interface CardProps {
    elevation?: 0 | 1 | 2 | 3;
    children: React.ReactNode;
}

export interface CardComponent<T> extends React.FunctionComponent<T> {
    Header: typeof CardHeader;
    Body: typeof CardBody;
}

const CardHeader: React.ComponentType<{ children: React.ReactNode }> = ({
    children,
}) => <div className={style.header}>{children}</div>;

const CardBody: React.ComponentType<{ children: React.ReactNode }> = ({
    children,
}) => <div className={style.body}>{children}</div>;

const Card: CardComponent<CardProps> = ({ elevation = 0, children }) => {
    return (
        <div
            className={buildClassNames([
                style.card,
                style[`elevation-${elevation}`],
            ])}
        >
            {children}
        </div>
    );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.displayName = "Card";

export default Card;
