import { List, Grid, Card, InlineCode, Flex, Text } from "@lib";

export const metadata = {
    title: "List | Design System",
};

const ListPage = () => (
    <Grid as="section">
        <Flex alignItems="center" justifyContent="space-between">
            <Text as="h1">{"List"}</Text>
            <InlineCode>
                {'import { List } from "@bradlove/design-system"'}
            </InlineCode>
        </Flex>
        <Grid gap={3}>
            <Card>
                <Card.Header>
                    {"Unordered"}
                    <InlineCode>{"variant = unordered"}</InlineCode>
                </Card.Header>
                <Card.Body>
                    <List variant="unordered">
                        <List.Item>{"First"}</List.Item>
                        <List.Item>{"Second"}</List.Item>
                        <List.Item>{"Third"}</List.Item>
                    </List>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    {"Ordered"}
                    <InlineCode>{"variant = ordered"}</InlineCode>
                </Card.Header>
                <Card.Body>
                    <List variant="ordered">
                        <List.Item>{"First"}</List.Item>
                        <List.Item>{"Second"}</List.Item>
                        <List.Item>{"Third"}</List.Item>
                    </List>
                </Card.Body>
            </Card>
        </Grid>
    </Grid>
);

export default ListPage;
