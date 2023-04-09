import React from "react";
import ListItem from "./list-item";
import { buildClassNames } from "../../utils/class";

import style from "./index.module.css";

export interface UnorderedListProps
    extends React.HTMLAttributes<HTMLUListElement> {
    variant?: "unordered";
}

export interface OrderedListProps
    extends React.HTMLAttributes<HTMLOListElement> {
    variant?: "ordered";
}

export type ListProps = UnorderedListProps | OrderedListProps;

interface ListComponent<T> extends React.FunctionComponent<T> {
    Item: typeof ListItem;
}

const List: ListComponent<ListProps> = ({
    variant = "unordered",
    children,
}) => {
    return React.createElement(
        variant === "unordered" ? "ul" : "ol",
        {
            className: buildClassNames([style.list, style[variant]]),
        },
        children
    );
};

List.displayName = "List";
List.Item = ListItem;

export default List;
