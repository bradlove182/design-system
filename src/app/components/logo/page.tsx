import { Flex, Grid, Logo, Text, InlineCode } from "@lib";

export const metadata = {
    title: "Logo | Design System",
};

const LogoPage = () => (
    <Grid as="section">
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
    </Grid>
);

export default LogoPage;
