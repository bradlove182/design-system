import {
    Flex,
    Grid,
    Input,
    Card,
    InlineCode,
    Text,
    Textarea,
    Checkbox,
    Switch,
    Radio,
    Range,
} from "@lib";

export const metadata = {
    title: "Form | Design System",
};

const FormPage = () => (
    <Grid as="section">
        <Flex alignItems="center" justifyContent="space-between">
            <Text as="h1">{"Form"}</Text>
        </Flex>
        <Grid columns={1} gap={3}>
            <Card>
                <Card.Header>
                    {"Input"}
                    <InlineCode>
                        {'import { Input } from "@bradlove/design-system"'}
                    </InlineCode>
                </Card.Header>
                <Card.Body>
                    <Grid gap={3}>
                        <Grid columns={2} gap={3}>
                            <Input
                                id="input-1"
                                label="Label"
                                placeholder="Placeholder"
                            />
                            <Input
                                id="input-2"
                                label="Disabled"
                                placeholder="Placeholder"
                                disabled
                                value="With Value"
                            />
                        </Grid>
                        <Grid columns={2} gap={3}>
                            <Input
                                id="email-1"
                                type="email"
                                placeholder="example@email.com"
                            />
                            <Input
                                id="email-2"
                                type="email"
                                placeholder="example@email.com"
                                disabled
                                value="value@email.com"
                            />
                        </Grid>
                        <Grid columns={2} gap={3}>
                            <Input
                                id="password-1"
                                type="password"
                                placeholder="Password"
                            />
                            <Input
                                id="password-2"
                                type="password"
                                placeholder="Password"
                                disabled
                                value="thisisasecretpassword"
                            />
                        </Grid>
                    </Grid>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    {"Textarea"}
                    <InlineCode>
                        {'import { Textarea } from "@bradlove/design-system"'}
                    </InlineCode>
                </Card.Header>
                <Card.Body>
                    <Grid columns={2} gap={3}>
                        <Textarea
                            id="TextArea-1"
                            label="Label"
                            placeholder="Placeholder Text"
                        />
                        <Textarea
                            id="TextArea-2"
                            label="Disabled"
                            placeholder="Placeholder"
                            disabled
                            value="With Value"
                        />
                    </Grid>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    {"Checkbox"}
                    <InlineCode>
                        {'import { Checkbox } from "@bradlove/design-system"'}
                    </InlineCode>
                </Card.Header>
                <Card.Body>
                    <Grid columns={2} gap={3}>
                        <Grid gap={2}>
                            <Checkbox id="Checkbox-1" label="Checkbox" />
                            <Checkbox
                                id="Checkbox-2"
                                label="Checkbox"
                                checked
                            />
                        </Grid>
                        <Grid gap={2}>
                            <Checkbox
                                id="Checkbox-3"
                                label="Disabled"
                                disabled
                            />
                            <Checkbox
                                id="Checkbox-4"
                                label="Disabled"
                                disabled
                                checked
                            />
                        </Grid>
                    </Grid>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    {"Switch"}
                    <InlineCode>
                        {'import { Switch } from "@bradlove/design-system"'}
                    </InlineCode>
                </Card.Header>
                <Card.Body>
                    <Grid columns={2} gap={3}>
                        <Grid gap={2}>
                            <Switch id="Switch-1" label="Switch" />
                            <Switch id="Switch-2" label="Switch" checked />
                        </Grid>
                        <Grid gap={2}>
                            <Switch id="Switch-3" label="Disabled" disabled />
                            <Switch
                                id="Switch-4"
                                label="Disabled"
                                disabled
                                checked
                            />
                        </Grid>
                    </Grid>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    {"Radio"}
                    <InlineCode>
                        {'import { Radio } from "@bradlove/design-system"'}
                    </InlineCode>
                </Card.Header>
                <Card.Body>
                    <Grid columns={2} gap={3}>
                        <Radio name="options">
                            <Radio.Item
                                id="option-1"
                                label="Option 1"
                                checked
                            />
                            <Radio.Item id="option-2" label="Option 2" />
                        </Radio>
                        <Radio name="options-2">
                            <Radio.Item
                                id="option-3"
                                label="Option 3"
                                disabled
                            />
                            <Radio.Item
                                id="option-4"
                                label="Option 4"
                                checked
                                disabled
                            />
                        </Radio>
                    </Grid>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    {"Range"}
                    <InlineCode>
                        {'import { Range } from "@bradlove/design-system"'}
                    </InlineCode>
                </Card.Header>
                <Card.Body>
                    <Grid columns={2} gap={3}>
                        <Range label="Range" id="Range" />
                        <Range label="Range" id="Range-2" disabled />
                    </Grid>
                </Card.Body>
            </Card>
        </Grid>
    </Grid>
);

export default FormPage;
