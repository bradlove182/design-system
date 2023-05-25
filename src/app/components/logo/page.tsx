import { Flex, Grid, Logo, Text, InlineCode, Card } from "@lib";

export const metadata = {
    title: "Logo | Design System",
};

const LogoPage = () => (
    <Grid as="section">
        <Flex alignItems="center" justifyContent="space-between">
            <Text as="h1">{"Logo"}</Text>
            <InlineCode>
                {'import { Logo } from "@bradlove/design-system"'}
            </InlineCode>
        </Flex>
        <Card>
            <Card.Body>
                <Flex alignItems="flex-start">
                    <Grid gap={3}>
                        <Text>{"64px"}</Text>
                        <Logo size={4} />
                        <InlineCode>{"size = 4"}</InlineCode>
                    </Grid>
                    <Grid gap={3}>
                        <Text>{"48px"}</Text>
                        <Logo size={3} />
                        <InlineCode>{"size = 3"}</InlineCode>
                    </Grid>
                    <Grid gap={3}>
                        <Text>{"32px"}</Text>
                        <Logo size={2} />
                        <InlineCode>{"size = 2"}</InlineCode>
                    </Grid>
                    <Grid gap={3}>
                        <Text>{"16px"}</Text>
                        <Logo size={1} />
                        <InlineCode>{"size = 1"}</InlineCode>
                    </Grid>
                </Flex>
            </Card.Body>
        </Card>
    </Grid>
);

export default LogoPage;
