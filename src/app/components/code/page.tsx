import { Grid, Card, Code, Flex, Text, InlineCode } from "@lib";

export const metadata = {
    title: "Code | Design System",
};

const CodePage = () => (
    <Grid as="section">
        <Flex alignItems="center" justifyContent="space-between">
            <Text as="h1">{"Code"}</Text>
            <InlineCode>
                {'import { Code } from "@bradlove/design-system"'}
            </InlineCode>
        </Flex>
        <Grid gap={3}>
            <Card>
                <Card.Body>
                    <Code>{"const foo = () => 'bar';"}</Code>
                </Card.Body>
            </Card>
        </Grid>
    </Grid>
);

export default CodePage;
