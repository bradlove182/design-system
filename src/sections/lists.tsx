import React from "react";
import { Text, Grid, List } from "@lib";

const SectionLists: React.ComponentType = () => {
    return (
        <Grid as="section" alignItems="start" columns={1} gap={3}>
            <Text as={"h2"}>{"Lists"}</Text>
            <Grid columns={2} gap={5}>
                <List variant="unordered">
                    <List.Item>{"First"}</List.Item>
                    <List.Item>{"Second"}</List.Item>
                    <List.Item>{"Third"}</List.Item>
                </List>
                <List variant="ordered">
                    <List.Item>{"First"}</List.Item>
                    <List.Item>{"Second"}</List.Item>
                    <List.Item>{"Third"}</List.Item>
                </List>
            </Grid>
        </Grid>
    );
};

export default SectionLists;
