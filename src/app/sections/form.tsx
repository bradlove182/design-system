import React from "react";
import { Text, Grid, Input, TextArea } from "../../components";

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
                    value="John Doe"
                />
                <Input
                    id="email"
                    placeholder="example@email.com"
                    type="email"
                />
                <Input
                    id="email-disabled"
                    placeholder="Email Address"
                    type="email"
                    disabled
                    value="email@address.com"
                />
                <Input id="password" placeholder="Password" type="password" />
                <Input
                    id="password-disabled"
                    placeholder="Password"
                    type="password"
                    value="supersecretpassword"
                    disabled
                />
                <TextArea
                    label="Text Area"
                    id="text-area"
                    placeholder="Type some text here."
                />
                <TextArea
                    id="text-area-disabled"
                    placeholder="Text Area"
                    value=""
                    disabled
                    label="Text Area"
                />
            </Grid>
        </Grid>
    );
};

export default SectionFormComponents;
