import { Flex, Grid, Button, Card, Icon, InlineCode, Text } from "@lib";

export const metadata = {
    title: "Button | Design System",
};

const ButtonPage = () => (
    <Grid as="section">
        <Flex alignItems="center" justifyContent="space-between">
            <Text as="h1">{"Button"}</Text>
            <InlineCode>
                {'import { Button } from "@bradlove/design-system"'}
            </InlineCode>
        </Flex>
        <Grid columns={1} gap={3}>
            <Card>
                <Card.Header>
                    {"Gradient"}
                    <InlineCode>{"variant = gradient"}</InlineCode>
                </Card.Header>
                <Card.Body>
                    <Flex>
                        <Button variant="gradient">{"Button"}</Button>
                        <Button variant="gradient">
                            <Icon.Arrow direction="left" />
                            {"Button"}
                        </Button>
                        <Button variant="gradient">
                            {"Button"}
                            <Icon.Arrow />
                        </Button>
                    </Flex>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    {"Brand"}
                    <InlineCode>{"variant = brand"}</InlineCode>
                </Card.Header>
                <Card.Body>
                    <Flex>
                        <Button variant="brand">{"Button"}</Button>
                        <Button variant="brand">
                            <Icon.Arrow direction="left" />
                            {"Button"}
                        </Button>
                        <Button variant="brand">
                            {"Button"}
                            <Icon.Arrow />
                        </Button>
                    </Flex>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    {"Outline"}
                    <InlineCode>{"variant = outline"}</InlineCode>
                </Card.Header>
                <Card.Body>
                    <Flex>
                        <Button variant="outline">{"Button"}</Button>
                        <Button variant="outline">
                            <Icon.Arrow direction="left" />
                            {"Button"}
                        </Button>
                        <Button variant="outline">
                            {"Button"}
                            <Icon.Arrow />
                        </Button>
                    </Flex>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    {"Transparent"}
                    <InlineCode>{"variant = transparent"}</InlineCode>
                </Card.Header>
                <Card.Body>
                    <Flex>
                        <Button variant="transparent">{"Button"}</Button>
                        <Button variant="transparent">
                            <Icon.Arrow direction="left" />
                            {"Button"}
                        </Button>
                        <Button variant="transparent">
                            {"Button"}
                            <Icon.Arrow />
                        </Button>
                    </Flex>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    {"Icon"}
                    <InlineCode>{"icon = true"}</InlineCode>
                </Card.Header>
                <Card.Body>
                    <Flex>
                        <Button icon>
                            <Icon.GitHub />
                        </Button>
                        <Button icon>
                            <Icon.Tick />
                        </Button>
                        <Button icon>
                            <Icon.Arrow />
                        </Button>
                    </Flex>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    {"Disabled"}
                    <InlineCode>{"disabled = true"}</InlineCode>
                </Card.Header>
                <Card.Body>
                    <Flex>
                        <Button variant="brand" disabled>
                            {"Button"}
                        </Button>
                        <Button variant="transparent" disabled>
                            {"Button"}
                        </Button>
                        <Button icon disabled>
                            <Icon.GitHub />
                        </Button>
                    </Flex>
                </Card.Body>
            </Card>
        </Grid>
    </Grid>
);

export default ButtonPage;
