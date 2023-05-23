import React from "react";
import { Text, Grid, Logo } from "@lib";

const SectionLogo: React.ComponentType = () => {
    return (
        <Grid as="section" alignItems="start" columns={1} gap={3}>
            <Text as={"h2"}>{"Logo"}</Text>
            <Grid columns={1} gap={5}>
                <Logo />
            </Grid>
        </Grid>
    );
};

export default SectionLogo;
