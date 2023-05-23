"use client";

import React from "react";

import { Button, Flex, Icon, InlineCode, Text } from "@lib";

import style from "./index.module.css";
import { usePathname } from "next/navigation";

const capitalize = (string: string) =>
    `${string.slice(0, 1).toLocaleUpperCase()}${string.slice(1)}`;

const buildHeaderTitle = (path: string) => {
    const splitPath = path.split("/");
    const lastKey = splitPath.pop();
    return {
        title: capitalize(lastKey!.split("-").join(" ")),
        import: capitalize(lastKey!),
    };
};

export const Header: React.ComponentType = () => {
    const pathname = usePathname();

    return (
        <header className={style.header}>
            <Flex alignItems="center" justifyContent="space-between" fullWidth>
                <Flex alignItems="center">
                    <Text as="h1" size={6}>
                        {buildHeaderTitle(pathname).title}
                    </Text>
                </Flex>
                <Flex alignItems="center">
                    <InlineCode>
                        {`import { ${
                            buildHeaderTitle(pathname).import
                        } } from @bradlove/design-system`}
                    </InlineCode>
                </Flex>
            </Flex>
        </header>
    );
};
