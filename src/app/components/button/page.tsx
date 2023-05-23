import { Flex, Grid, Button, Card, Icon, InlineCode } from "@lib";

export const metadata = {
    title: "Button | Design System",
};

const ButtonPage = () => (
    <Grid as="section" alignItems="start" columns={1} gap={3}>
        <Grid columns={2} gap={3}>
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
                            {"Gradient"}
                        </Button>
                        <Button variant="gradient">
                            {"Gradient"}
                            <Icon.Arrow />
                        </Button>
                    </Flex>
                </Card.Body>
            </Card>
        </Grid>
        <Grid columns={1} gap={4}>
            <Flex gap={3}>
                <Button variant="gradient">{"Gradient"}</Button>
                <Button>{"Button"}</Button>
                <Button disabled>{"Button"}</Button>
            </Flex>
            <Flex gap={3}>
                <Button variant="gradient">
                    <Icon.Arrow direction="left" />
                    {"Gradient"}
                </Button>
                <Button>
                    <Icon.Arrow direction="left" />
                    {"Button"}
                </Button>
                <Button disabled>
                    <Icon.Arrow direction="left" />
                    {"Button"}
                </Button>
            </Flex>
            <Flex gap={3}>
                <Button variant="gradient">
                    {"Gradient"}
                    <Icon.Arrow />
                </Button>
                <Button>
                    {"Button"}
                    <Icon.Arrow />
                </Button>
                <Button disabled>
                    {"Button"}
                    <Icon.Arrow />
                </Button>
            </Flex>
            <Flex gap={3}>
                <Button variant="transparent">{"Button"}</Button>
                <Button variant="transparent" disabled>
                    {"Button"}
                </Button>
            </Flex>
            <Flex gap={3}>
                <Button variant="outline">{"Button"}</Button>
                <Button variant="outline" disabled>
                    {"Button"}
                </Button>
            </Flex>
            <Flex gap={3}>
                <Button icon>
                    <Icon.GitHub />
                </Button>
                <Button icon disabled>
                    <Icon.GitHub />
                </Button>
            </Flex>
            <Flex gap={3}>
                <Button icon size="small">
                    <Icon.GitHub />
                </Button>
                <Button icon disabled size="small">
                    <Icon.GitHub />
                </Button>
            </Flex>
        </Grid>
    </Grid>
);

export default ButtonPage;
