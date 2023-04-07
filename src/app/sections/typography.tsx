import React from "react";

import { Grid, Text } from "../../components";
import type { IntrinsicTextElements } from "../../components/text/text";

import style from "../index.module.css";

const SectionTypography: React.ComponentType = () => {
    return (
        <Grid as="section" gap={6}>
            <Grid as="section" className={style.section} gap={3}>
                <Text as={"h2"}>{"Typography"}</Text>
                {(
                    [
                        "h1",
                        "h2",
                        "h3",
                        "h4",
                        "h5",
                        "h6",
                    ] as IntrinsicTextElements[]
                ).map((value) => (
                    <Grid key={value}>
                        <Text>{value.toLocaleUpperCase()}</Text>
                        <Text as={value}>
                            {
                                "Almost before we knew it, we had left the ground."
                            }
                        </Text>
                    </Grid>
                ))}
            </Grid>
            <Grid as="section" className={style.section} gap={3}>
                {([1, 2, 3, 4, 5, 6, 7] as const).map((value) => (
                    <Grid key={value}>
                        <Text>{`Text Size ${value}`}</Text>
                        <Text size={value}>
                            {
                                "Almost before we knew it, we had left the ground."
                            }
                        </Text>
                    </Grid>
                ))}
                <Grid>
                    <Text>{"Text Gradient"}</Text>
                    <Text size={3} variant="gradient">
                        {"Almost before we knew it, we had left the ground."}
                    </Text>
                </Grid>
                <Grid>
                    <Text>{"Text Strong"}</Text>
                    <Text as="strong" size={3}>
                        {"Almost before we knew it, we had left the ground."}
                    </Text>
                </Grid>
                <Grid>
                    <Text>{"Text Italic"}</Text>
                    <Text as="em" size={3}>
                        {"Almost before we knew it, we had left the ground."}
                    </Text>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SectionTypography;
