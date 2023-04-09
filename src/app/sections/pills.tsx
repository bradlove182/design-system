import React from "react";
import { Text, Grid, Pill, Flex } from "../../components";

const SectionPills: React.ComponentType = () => {
    return (
        <Grid as="section" alignItems="start" columns={1} gap={3}>
            <Text as={"h2"}>{"Pills"}</Text>
            <Flex gap={3}>
                <Pill variant="info">{"Info Pill"}</Pill>
                <Pill variant="success">{"Success Pill"}</Pill>
                <Pill variant="error">{"Error Pill"}</Pill>
                <Pill variant="warning">{"Warning Pill"}</Pill>
            </Flex>
        </Grid>
    );
};

export default SectionPills;
