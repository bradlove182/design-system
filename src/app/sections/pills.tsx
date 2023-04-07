import React from "react";
import { Text, Grid, Pill } from "../../components";

const SectionPills: React.ComponentType = () => {
    return (
        <Grid as="section" alignItems="start" columns={1} gap={3}>
            <Text as={"h2"}>{"Pills"}</Text>
            <Pill variant="info">{"Info Pill"}</Pill>
            <Pill variant="success">{"Success Pill"}</Pill>
            <Pill variant="error">{"Error Pill"}</Pill>
            <Pill variant="warning">{"Warning Pill"}</Pill>
        </Grid>
    );
};

export default SectionPills;
