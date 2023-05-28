import React from "react";

import style from "./colour-swatch.module.css";
import { Flex, Text, InlineCode, Grid } from "@lib";

export interface ColourSwatchProps {
    colour: string;
    hsla?: boolean;
}

export const ColourSwatch: React.ComponentType<ColourSwatchProps> = ({
    colour,
    hsla = false,
}) => {
    return (
        <Flex>
            <div
                className={style["swatch"]}
                style={{
                    backgroundColor: hsla
                        ? `hsla(var(--${colour}))`
                        : `var(--${colour})`,
                }}
            />
            <Text as="strong">{colour}</Text>
        </Flex>
    );
};
