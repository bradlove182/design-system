import React from "react";
import { Flex, Text, Grid } from "../../components";

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
            <Flex alignItems="start" direction="column" gap={0}>
                <Text>{"Palette:"}</Text>
                <Grid columns={4} gap={4}>
                    {[
                        "gray",
                        "pink",
                        "red",
                        "orange",
                        "yellow",
                        "green",
                        "teal",
                        "blue",
                        "indigo",
                        "purple",
                    ].map((color) => (
                        <Grid columns={5} key={color}>
                            {Array(21)
                                .fill(null)
                                .map((value, index) =>
                                    index * 5 === 0 ||
                                    index * 5 === 100 ? undefined : (
                                        <ColorSwatch
                                            key={`${color}-${index}`}
                                            color={`${color}-${index * 5}`}
                                            hsla
                                        />
                                    )
                                )}
                        </Grid>
                    ))}
                </Grid>
            </Flex>
        </Flex>
    );
};

export default SectionColors;
