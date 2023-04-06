import React from "react";
import { Text, Grid, Button, Icon, Flex } from "../../components";

const SectionButtons: React.ComponentType = () => {
    return (
        <Grid as="section" alignItems="start" columns={1} gap={3}>
            <Text as={"h2"}>{"Buttons"}</Text>
            <Grid columns={1} gap={4}>
                <Flex gap={3}>
                    <Button variant="gradient">{"Gradient"}</Button>
                    <Button>{"Button"}</Button>
                    <Button disabled>{"Button"}</Button>
                </Flex>
                <Flex gap={3}>
                    <Button variant="gradient">
                        <Icon.GitHub />
                        {"Gradient"}
                    </Button>
                    <Button>
                        <Icon.GitHub />
                        {"Button"}
                    </Button>
                    <Button disabled>
                        <Icon.GitHub />
                        {"Button"}
                    </Button>
                </Flex>
                <Flex gap={3}>
                    <Button variant="gradient">
                        {"Gradient"}
                        <Icon.GitHub />
                    </Button>
                    <Button>
                        {"Button"}
                        <Icon.GitHub />
                    </Button>
                    <Button disabled>
                        {"Button"}
                        <Icon.GitHub />
                    </Button>
                </Flex>
                <Flex gap={3}>
                    <Button variant="secondary">{"Button"}</Button>
                    <Button variant="secondary" disabled>
                        {"Button"}
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
};

export default SectionButtons;
