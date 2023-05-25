import React from "react";

import { Pill, Flex, Icon, Button } from "@lib";

import style from "./index.module.css";

export const Header: React.ComponentType = () => {
    return (
        <header className={style.header}>
            <Flex alignItems="center" justifyContent="end" fullWidth>
                <Pill variant="info">{"v1.0"}</Pill>
                <Pill variant="warning">{"Work In Progress"}</Pill>
                <a href="#">
                    <Button as="span" icon size="small">
                        <Icon.GitHub />
                    </Button>
                </a>
            </Flex>
        </header>
    );
};
