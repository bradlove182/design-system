import { Flex, Grid, Text, Icon, InlineCode, Card } from "@lib";
import type { IconProps } from "src/lib/components/icon";

export const metadata = {
    title: "Icon | Design System",
};

const iconSizes: IconProps["size"][] = [1, 2, 3, 4, 5, 6, 7, 8];
const calculateSize = (size: number) => 4 * size + 8;

const IconPage = () => (
    <Grid gap={4} as="section">
        <Card>
            <Card.Header>
                {"Github"}
                <InlineCode>{`<Icon.Github />`}</InlineCode>
            </Card.Header>
            <Card.Body>
                <Grid columns={4} gap={3}>
                    {iconSizes.reverse().map((value) => (
                        <Grid gap={3}>
                            <Text>{`${calculateSize(value!)}px`}</Text>
                            <Icon.GitHub size={value} />
                            <InlineCode>{`size = ${value}`}</InlineCode>
                        </Grid>
                    ))}
                </Grid>
            </Card.Body>
        </Card>
        <Card>
            <Card.Header>
                {"Arrow"}
                <InlineCode>{`<Icon.Arrow />`}</InlineCode>
            </Card.Header>
            <Card.Body>
                <Grid columns={4} gap={3}>
                    {iconSizes.map((value) => (
                        <Grid gap={3}>
                            <Text>{`${calculateSize(value!)}px`}</Text>
                            <Icon.Arrow size={value} />
                            <InlineCode>{`size = ${value}`}</InlineCode>
                        </Grid>
                    ))}
                </Grid>
            </Card.Body>
        </Card>
        <Card>
            <Card.Header>
                {"Cross"}
                <InlineCode>{`<Icon.Cross />`}</InlineCode>
            </Card.Header>
            <Card.Body>
                <Grid columns={4} gap={3}>
                    {iconSizes.map((value) => (
                        <Grid gap={3}>
                            <Text>{`${calculateSize(value!)}px`}</Text>
                            <Icon.Cross size={value} />
                            <InlineCode>{`size = ${value}`}</InlineCode>
                        </Grid>
                    ))}
                </Grid>
            </Card.Body>
        </Card>
        <Card>
            <Card.Header>
                {"Circle"}
                <InlineCode>{`<Icon.Circle />`}</InlineCode>
            </Card.Header>
            <Card.Body>
                <Grid columns={4} gap={3}>
                    {iconSizes.map((value) => (
                        <Grid gap={3}>
                            <Text>{`${calculateSize(value!)}px`}</Text>
                            <Icon.Circle size={value} />
                            <InlineCode>{`size = ${value}`}</InlineCode>
                        </Grid>
                    ))}
                </Grid>
            </Card.Body>
        </Card>
        <Card>
            <Card.Header>
                {"Eye"}
                <InlineCode>{`<Icon.Eye />`}</InlineCode>
            </Card.Header>
            <Card.Body>
                <Grid columns={4} gap={3}>
                    {iconSizes.map((value) => (
                        <Grid gap={3}>
                            <Text>{`${calculateSize(value!)}px`}</Text>
                            <Icon.Eye size={value} />
                            <InlineCode>{`size = ${value}`}</InlineCode>
                        </Grid>
                    ))}
                </Grid>
            </Card.Body>
        </Card>
        <Card>
            <Card.Header>
                {"At"}
                <InlineCode>{`<Icon.At />`}</InlineCode>
            </Card.Header>
            <Card.Body>
                <Grid columns={4} gap={3}>
                    {iconSizes.map((value) => (
                        <Grid gap={3}>
                            <Text>{`${calculateSize(value!)}px`}</Text>
                            <Icon.At size={value} />
                            <InlineCode>{`size = ${value}`}</InlineCode>
                        </Grid>
                    ))}
                </Grid>
            </Card.Body>
        </Card>
        <Card>
            <Card.Header>
                {"Tick"}
                <InlineCode>{`<Icon.Tick />`}</InlineCode>
            </Card.Header>
            <Card.Body>
                <Grid columns={4} gap={3}>
                    {iconSizes.map((value) => (
                        <Grid gap={3}>
                            <Text>{`${calculateSize(value!)}px`}</Text>
                            <Icon.Tick size={value} />
                            <InlineCode>{`size = ${value}`}</InlineCode>
                        </Grid>
                    ))}
                </Grid>
            </Card.Body>
        </Card>
    </Grid>
);

export default IconPage;
