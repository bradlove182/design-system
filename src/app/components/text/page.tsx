import { Flex, Grid, Logo, Text, InlineCode } from "@lib";
import type { IntrinsicTextElements } from "../../../lib/components/text/text";

export const metadata = {
    title: "Text | Design System",
};

const TextPage = () => (
    <Grid as="section" gap={6}>
        <Grid as="section" gap={3}>
            {(
                ["h1", "h2", "h3", "h4", "h5", "h6"] as IntrinsicTextElements[]
            ).map((value) => (
                <Grid key={value}>
                    <Text>{value.toLocaleUpperCase()}</Text>
                    <Text as={value}>
                        {"Almost before we knew it, we had left the ground."}
                    </Text>
                </Grid>
            ))}
        </Grid>
        <Grid as="section" gap={3}>
            {([1, 2, 3, 4, 5, 6, 7] as const).map((value) => (
                <Grid key={value}>
                    <Text>{`Text Size ${value}`}</Text>
                    <Text as="span" size={value}>
                        {"Almost before we knew it, we had left the ground."}
                    </Text>
                </Grid>
            ))}
            <Grid>
                <Text>{"Text Gradient"}</Text>
                <Text as="span" size={3} variant="gradient">
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

export default TextPage;
