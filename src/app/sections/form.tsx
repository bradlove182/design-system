import React from "react";
import { Text, Grid, Input } from "../../components";

const SectionFormComponents: React.ComponentType = () => {
    return (
        <Grid as="section" alignItems="start" columns={1} gap={3}>
            <Text as={"h2"}>{"Form Components"}</Text>
            <Grid columns={2} gap={4}>
                <Input label="Name" id="text" placeholder="Name" />
                <Input
                    label="Name"
                    id="text-disabled"
                    disabled
                    value="Bradley Love"
                />
                <Input
                    id="email"
                    placeholder="brad@bradlove.co.za"
                    type="email"
                />
                <Input
                    id="email-disabled"
                    placeholder="brad@bradlove.co.za"
                    type="email"
                    disabled
                    value="brad@bradlove.co.za"
                />
                <Input id="password" placeholder="Password" type="password" />
                <Input
                    id="password-disabled"
                    placeholder="Password"
                    type="password"
                    disabled
                />
            </Grid>
        </Grid>
    );
};

export default SectionFormComponents;
