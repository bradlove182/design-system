import React from "react";
import { Flex, Text, Grid, Tooltip } from "../../components";
import style from "../index.module.css";

const ColorSwatch: React.ComponentType<{ color: string; hsla?: boolean }> = ({
    color,
    hsla = false,
}) => (
    <div
        className={style["color-swatch"]}
        style={{
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
                <Tooltip tip="--brand" position="right">
                    <ColorSwatch color="brand" />
                </Tooltip>
            </Flex>
            <Flex alignItems="start" direction="column" gap={0}>
                <Text>{"Background:"}</Text>
                <Tooltip tip="--background" position="right">
                    <ColorSwatch color="background" />
                </Tooltip>
            </Flex>
            <Flex alignItems="start" direction="column" gap={0}>
                <Text>{"Foreground:"}</Text>
                <Tooltip tip="--foreground" position="right">
                    <ColorSwatch color="foreground" />
                </Tooltip>
            </Flex>
            <Flex alignItems="start" direction="column" gap={0}>
                <Text>{"Typeface:"}</Text>
                <Flex>
                    <Tooltip tip="--text" position="right">
                        <ColorSwatch color="text" />
                    </Tooltip>
                    <Tooltip tip="--text-subdued" position="right">
                        <ColorSwatch color="text-subdued" />
                    </Tooltip>
                    <Tooltip tip="--text-amplified" position="right">
                        <ColorSwatch color="text-amplified" />
                    </Tooltip>
                </Flex>
            </Flex>
            <Flex alignItems="start" direction="column" gap={0}>
                <Text>{"Palette:"}</Text>
                <Grid columns={4} gap={5} className={style["palette-grid"]}>
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
                        <Grid
                            columns={5}
                            key={color}
                            className={style["color-swatch-grid"]}
                        >
                            {Array(21)
                                .fill(null)
                                .map((value, index) =>
                                    index * 5 === 0 ||
                                    index * 5 === 100 ? undefined : (
                                        <Tooltip
                                            tip={`--${color}-${index * 5}`}
                                            position="right"
                                        >
                                            <ColorSwatch
                                                key={`${color}-${index}`}
                                                color={`${color}-${index * 5}`}
                                                hsla
                                            />
                                        </Tooltip>
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
