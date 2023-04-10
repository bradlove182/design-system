import React from "react";
import {
    Text,
    Grid,
    Input,
    TextArea,
    Checkbox,
    Switch,
    Radio,
    Range,
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
            <Grid columns={2} gap={2}>
                <Radio name="options">
                    <Radio.Item id="option-1" label="Option 1" checked />
                    <Radio.Item id="option-2" label="Option 2" />
                </Radio>
                <Radio name="options-2">
                    <Radio.Item id="option-3" label="Option 3" disabled />
                    <Radio.Item
                        id="option-4"
                        label="Option 4"
                        checked
                        disabled
                    />
                </Radio>
            </Grid>
            <Radio name="options" direction="row">
                <Radio.Item id="option-5" label="Option 5" />
                <Radio.Item id="option-6" label="Option 6" />
            </Radio>
            <Grid columns={2} gap={2}>
                <Range label="Range" id="Range" />
                <Range label="Range" id="Range" disabled />
            </Grid>
        </Grid>
    );
};

export default SectionFormComponents;
