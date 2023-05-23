import { List, Grid, Card, Text, InlineCode } from "@lib";

export const metadata = {
    title: "List | Design System",
};

const ListPage = () => (
    <Grid as="section" alignItems="start" columns={1} gap={3}>
        <Grid columns={2} gap={5}>
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
