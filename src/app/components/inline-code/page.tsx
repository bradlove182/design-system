import { Grid, Card, InlineCode, Flex, Text, Pill } from "@lib";

export const metadata = {
    title: "Inline Code | Design System",
};

const InlineCodePage = () => (
    <Grid as="section">
        <Flex alignItems="center" justifyContent="space-between">
            <Text as="h1">{"Inline Code"}</Text>
            <InlineCode>
                {'import { InlineCode } from "@bradlove/design-system"'}
            </InlineCode>
        </Flex>
        <Grid gap={3}>
            <Card>
                <Card.Body>
                    <InlineCode>{"const foo = () => 'bar';"}</InlineCode>
                </Card.Body>
            </Card>
        </Grid>
    </Grid>
);

export default InlineCodePage;
