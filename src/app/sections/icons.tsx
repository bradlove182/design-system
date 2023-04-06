import React from "react";
import { Text, Grid, IconGitHub, IconArrow, IconCross } from "../../components";

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
                    <IconGitHub variant="brand" />
                    <IconGitHub variant="error" />
                    <IconGitHub variant="success" />
                    <IconGitHub variant="warning" />
                    <IconGitHub variant="default" />
                    <IconGitHub variant="subdued" />
                    <IconGitHub variant="amplified" />
                </Grid>
                <Grid columns={1} gap={3}>
                    <Grid columns={5} alignItems="center">
                        <IconGitHub size={5} />
                        <IconGitHub size={4} />
                        <IconGitHub size={3} />
                        <IconGitHub size={2} />
                        <IconGitHub size={1} />
                    </Grid>
                    <Grid columns={5} alignItems="center">
                        <IconArrow size={5} />
                        <IconArrow size={4} />
                        <IconArrow size={3} />
                        <IconArrow size={2} />
                        <IconArrow size={1} />
                    </Grid>
                    <Grid columns={5} alignItems="center">
                        <IconCross size={5} />
                        <IconCross size={4} />
                        <IconCross size={3} />
                        <IconCross size={2} />
                        <IconCross size={1} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SectionIcons;
