import { List, Grid, Card, InlineCode, Flex, Text, Pill } from "@lib";

export const metadata = {
    title: "Pill | Design System",
};

const PillPage = () => (
    <Grid as="section">
        <Flex alignItems="center" justifyContent="space-between">
            <Text as="h1">{"Pill"}</Text>
            <InlineCode>
                {'import { Pill } from "@bradlove/design-system"'}
            </InlineCode>
        </Flex>
        <Grid gap={3}>
            <Card>
                <Card.Body>
                    <Flex gap={3}>
                        <Pill>{"Default"}</Pill>
                        <Pill variant="brand">{"Brand"}</Pill>
                        <Pill variant="info">{"Info"}</Pill>
                        <Pill variant="success">{"Success"}</Pill>
                        <Pill variant="warning">{"Warning"}</Pill>
                        <Pill variant="error">{"Error"}</Pill>
                    </Flex>
                </Card.Body>
            </Card>
        </Grid>
    </Grid>
);

export default PillPage;
