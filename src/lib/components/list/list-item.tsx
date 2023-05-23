import React from "react";
import { Icon } from "../icon";

export interface ListItemProps {
    children: React.ReactNode;
}

const ListItem: React.ComponentType<ListItemProps> = ({ children }) => {
    return (
        <li>
            <Icon.Circle size={1} />
            {children}
        </li>
    );
};

ListItem.displayName = "List Item";
export default ListItem;
