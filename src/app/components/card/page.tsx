import { List, Grid, Card, InlineCode, Flex, Text } from "@lib";

export const metadata = {
    title: "Card | Design System",
};

const CardPage = () => (
    <Grid as="section">
        <Flex alignItems="center" justifyContent="space-between">
            <Text as="h1">{"Card"}</Text>
            <InlineCode>
                {'import { Card } from "@bradlove/design-system"'}
            </InlineCode>
        </Flex>
        <Grid gap={3}>
            <Card>
                <Card.Body>{"Base Card"}</Card.Body>
            </Card>
            <Card>
                <Card.Header>{"Card Header"}</Card.Header>
                <Card.Body>{"Card with Header"}</Card.Body>
            </Card>
            <Card elevation={1}>
                <Card.Body>
                    <InlineCode>{"elevation = 1"}</InlineCode>
                </Card.Body>
            </Card>
            <Card elevation={2}>
                <Card.Body>
                    <InlineCode>{"elevation = 2"}</InlineCode>
                </Card.Body>
            </Card>
            <Card elevation={3}>
                <Card.Body>
                    <InlineCode>{"elevation = 3"}</InlineCode>
                </Card.Body>
            </Card>
        </Grid>
    </Grid>
);

export default CardPage;
