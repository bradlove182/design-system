import React from "react";
import { Flex, Text } from "../../components";

const ColorSwatch: React.ComponentType<{ color: string; hsla?: boolean }> = ({
    color,
    hsla = false,
}) => (
    <div
        style={{
            height: "44px",
            width: "44px",
            borderRadius: "50%",
            border: "var(--border-2) solid var(--border-color)",
            backgroundColor: hsla ? `hsla(var(--${color}))` : `var(--${color})`,
        }}
    />
);

const SectionColors: React.ComponentType = () => {
    return (
        <Flex as="section" alignItems="start" direction="column">
            <Text as={"h2"}>{"Colors"}</Text>
            <Flex alignItems="start" direction="column" gap={0}>
                <Text>{"Brand:"}</Text>
                <ColorSwatch color="brand" />
            </Flex>
            <Flex alignItems="start" direction="column" gap={0}>
                <Text>{"Background:"}</Text>
                <ColorSwatch color="background" />
            </Flex>
            <Flex alignItems="start" direction="column" gap={0}>
                <Text>{"Foreground:"}</Text>
                <ColorSwatch color="foreground" />
            </Flex>
            <Flex alignItems="start" direction="column" gap={0}>
                <Text>{"Typeface:"}</Text>
                <Flex>
                    <ColorSwatch color="text" />
                    <ColorSwatch color="text-subdued" />
                    <ColorSwatch color="text-amplified" />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default SectionColors;
