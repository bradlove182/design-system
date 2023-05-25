import { Flex, Grid, Card, Text, InlineCode } from "@lib";
import type { IntrinsicTextElements } from "../../../lib/components/text/text";

export const metadata = {
    title: "Text | Design System",
};

const TextPage = () => (
    <Grid as="section">
        <Flex alignItems="center" justifyContent="space-between">
            <Text as="h1">{"Text"}</Text>
            <InlineCode>
                {'import { Text } from "@bradlove/design-system"'}
            </InlineCode>
        </Flex>
        <Grid gap={3}>
            <Card>
                <Card.Header>
                    {"Heading"}
                    <InlineCode>{"as = heading"}</InlineCode>
                </Card.Header>
                <Card.Body>
                    <Grid gap={3}>
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
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    {"Size"}
                    <InlineCode>{"size = number"}</InlineCode>
                </Card.Header>
                <Card.Body>
                    <Grid as="section" gap={3}>
                        {([1, 2, 3, 4, 5, 6, 7] as const).map((value) => (
                            <Grid key={value}>
                                <Text>{`Text Size ${value}`}</Text>
                                <Text as="span" size={value}>
                                    {
                                        "Almost before we knew it, we had left the ground."
                                    }
                                </Text>
                            </Grid>
                        ))}
                    </Grid>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    {"Gradient"}
                    <InlineCode>{"variant = gradient"}</InlineCode>
                </Card.Header>
                <Card.Body>
                    <Text as="span" size={3} variant="gradient">
                        {"Almost before we knew it, we had left the ground."}
                    </Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    {"Strong"}
                    <InlineCode>{"as = strong"}</InlineCode>
                </Card.Header>
                <Card.Body>
                    <Text as="strong" size={3}>
                        {"Almost before we knew it, we had left the ground."}
                    </Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    {"Italic"}
                    <InlineCode>{"as = em"}</InlineCode>
                </Card.Header>
                <Card.Body>
                    <Text as="em" size={3}>
                        {"Almost before we knew it, we had left the ground."}
                    </Text>
                </Card.Body>
            </Card>
        </Grid>
    </Grid>
);

export default TextPage;
