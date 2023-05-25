import { Grid, Card, InlineCode, Flex, Text, Dropdown, Button } from "@lib";

export const metadata = {
    title: "Dropdown | Design System",
};

const DropdownPage = () => (
    <Grid as="section">
        <Flex alignItems="center" justifyContent="space-between">
            <Text as="h1">{"Dropdown"}</Text>
            <InlineCode>
                {'import { Dropdown } from "@bradlove/design-system"'}
            </InlineCode>
        </Flex>
        <Grid gap={3}>
            <Card>
                <Card.Body>
                    <Grid columns={2} gap={3}>
                        <Dropdown>
                            <Dropdown.Target>
                                <Button>{"Show Dropdown"}</Button>
                            </Dropdown.Target>
                            <Dropdown.Menu>
                                <div>{"Menu Item 1"}</div>
                                <div>{"Menu Item 2"}</div>
                                <div>{"Menu Item 3"}</div>
                                <div>{"Menu Item 4"}</div>
                                <div>{"Menu Item 5"}</div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Grid>
                </Card.Body>
            </Card>
        </Grid>
    </Grid>
);

export default DropdownPage;
