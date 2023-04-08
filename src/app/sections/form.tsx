import React from "react";
import { Text, Grid, Input } from "../../components";

const SectionFormComponents: React.ComponentType = () => {
    return (
        <Grid as="section" alignItems="start" columns={1} gap={3}>
            <Text as={"h2"}>{"Inline Code"}</Text>
            <Grid columns={2} gap={3}>
                <Input
                    label="Label"
                    id="email"
                    onChange={() => {}}
                    placeholder="brad@bradlove.co.za"
                    type="email"
                />
                <Input
                    label="Label"
                    id="email"
                    onChange={() => {}}
                    placeholder="brad@bradlove.co.za"
                    type="email"
                    disabled
                />
                <Input
                    id="password"
                    onChange={() => {}}
                    placeholder="Password"
                    type="password"
                />
                <Input
                    id="password"
                    onChange={() => {}}
                    placeholder="Password"
                    type="password"
                    disabled
                />
            </Grid>
        </Grid>
    );
};

export default SectionFormComponents;
