import React from "react";
import { Text, Grid, Icon } from "../../components";

const SectionIcons: React.ComponentType = () => {
    return (
        <Grid as="section" alignItems="start" columns={1} gap={3}>
            <Text as={"h2"}>{"Icons"}</Text>
            <Grid columns={1} gap={5}>
                <Grid
                    flow="column"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Icon.GitHub variant="brand" />
                    <Icon.GitHub variant="error" />
                    <Icon.GitHub variant="success" />
                    <Icon.GitHub variant="warning" />
                    <Icon.GitHub variant="default" />
                    <Icon.GitHub variant="subdued" />
                    <Icon.GitHub variant="amplified" />
                </Grid>
                <Grid columns={1} gap={3}>
                    <Grid columns={5} alignItems="center">
                        <Icon.GitHub size={5} />
                        <Icon.GitHub size={4} />
                        <Icon.GitHub size={3} />
                        <Icon.GitHub size={2} />
                        <Icon.GitHub size={1} />
                    </Grid>
                    <Grid columns={5} alignItems="center">
                        <Icon.Arrow size={5} />
                        <Icon.Arrow size={4} />
                        <Icon.Arrow size={3} />
                        <Icon.Arrow size={2} />
                        <Icon.Arrow size={1} />
                    </Grid>
                    <Grid columns={5} alignItems="center">
                        <Icon.Cross size={5} />
                        <Icon.Cross size={4} />
                        <Icon.Cross size={3} />
                        <Icon.Cross size={2} />
                        <Icon.Cross size={1} />
                    </Grid>
                    <Grid columns={5} alignItems="center">
                        <Icon.Dot size={5} />
                        <Icon.Dot size={4} />
                        <Icon.Dot size={3} />
                        <Icon.Dot size={2} />
                        <Icon.Dot size={1} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SectionIcons;
