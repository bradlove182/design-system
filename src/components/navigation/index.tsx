import { Button, Flex, Grid, Icon, Logo, Pill, Text } from "@lib";
import React from "react";
import { NavLink } from "./nav-link";

import style from "./index.module.css";

export const Navigation: React.ComponentType = () => {
    return (
        <div className={style.nav}>
            <div className={style.logo}>
                <Flex>
                    <Logo />
                    {"Design System"}
                </Flex>
            </div>
            <nav className={style.content}>
                <div aria-hidden className={style["gradient-top"]} />
                <Grid gap={4}>
                    <Grid gap={1}>
                        <Text size={1} as="span">
                            {"Getting Started"}
                        </Text>
                        <NavLink href="/getting-started/introduction">
                            {"Introduction"}
                        </NavLink>
                        <NavLink href="/getting-started/installation">
                            {"Installation"}
                        </NavLink>
                        <NavLink href="/getting-started/foundations">
                            {"Foundations"}
                        </NavLink>
                    </Grid>
                    <Grid gap={1}>
                        <Text size={1} as="span">
                            {"Theme"}
                        </Text>
                        <NavLink href="/theme/colours">{"Colours"}</NavLink>
                    </Grid>
                    <Grid gap={1}>
                        <Text size={1} as="span">
                            {"Components"}
                        </Text>
                        <NavLink href="/components/logo">{"Logo"}</NavLink>
                        <NavLink href="/components/icon">{"Icon"}</NavLink>
                        <NavLink href="/components/text">{"Text"}</NavLink>
                        <NavLink href="/components/list">{"List"}</NavLink>
                        <NavLink href="/components/button">{"Button"}</NavLink>
                        <NavLink href="/components/form">{"Form"}</NavLink>
                        <NavLink href="/components/card">{"Card"}</NavLink>
                        <NavLink href="/components/pill">{"Pill"}</NavLink>
                        <NavLink href="/components/inline-code">
                            {"Inline Code"}
                        </NavLink>
                        <NavLink href="/components/code">{"Code"}</NavLink>
                        <NavLink href="/components/dropdown">
                            {"Dropdown"}
                        </NavLink>
                        <NavLink href="/components/modal">{"Modal"}</NavLink>
                    </Grid>
                </Grid>
                <div aria-hidden className={style["gradient-bottom"]} />
            </nav>
        </div>
    );
};
