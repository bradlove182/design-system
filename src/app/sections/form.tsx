import React from "react";
import {
    Text,
    Grid,
    Input,
    TextArea,
    Checkbox,
    Switch,
} from "../../components";
import style from "../index.module.css";

const SectionFormComponents: React.ComponentType = () => {
    return (
        <Grid
            as="section"
            alignItems="start"
            columns={1}
            gap={4}
            className={style.section}
        >
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
            <Grid columns={2} gap={2}>
                <Checkbox id="checkbox" label="Checkbox" />
                <Checkbox id="checkbox-disabled" label="Checkbox" disabled />
                <Checkbox id="checkbox-checked" label="Checkbox" checked />
                <Checkbox
                    id="checkbox-checked-disabled"
                    label="Checkbox"
                    disabled
                    checked
                />
            </Grid>
            <Grid columns={2} gap={2}>
                <Switch id="switch" label="Switch" />
                <Switch id="switch-disabled" label="Switch" disabled />
                <Switch id="switch-checked" label="Switch" checked />
                <Switch
                    id="switch-checked-disabled"
                    label="Switch"
                    checked
                    disabled
                />
            </Grid>
        </Grid>
    );
};

export default SectionFormComponents;
