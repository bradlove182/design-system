import React from "react";
import { Text, Grid, InlineCode } from "../../components";

const SectionInlineCode: React.ComponentType = () => {
    return (
        <Grid as="section" alignItems="start" columns={1} gap={3}>
            <Text as={"h2"}>{"Inline Code"}</Text>
            <InlineCode>{"const foo = () => 'bar';"}</InlineCode>
        </Grid>
    );
};

export default SectionInlineCode;
