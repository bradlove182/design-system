import React from "react";
import { Text, Grid, Icon } from "../../components";
import style from "../index.module.css";

const SectionIcons: React.ComponentType = () => {
    return (
        <Grid as="section" gap={6} className={style.section}>
            <Text as={"h2"}>{"Icons"}</Text>
            <Grid columns={1} gap={9}>
                <Grid flow="column" alignItems="center">
                    <Icon.At variant="info" />
                    <Icon.At variant="error" />
                    <Icon.At variant="success" />
                    <Icon.At variant="warning" />
                    <Icon.At variant="default" />
                    <Icon.At variant="subdued" />
                    <Icon.At variant="amplified" />
                </Grid>
                <Grid columns={1} gap={3}>
                    <Grid
                        columns={5}
                        alignItems="center"
                        justifyContent="start"
                    >
                        <Icon.GitHub size={8} />
                        <Icon.GitHub size={6} />
                        <Icon.GitHub size={4} />
                        <Icon.GitHub size={2} />
                        <Icon.GitHub size={1} />
                    </Grid>
                    <Grid columns={5} alignItems="center">
                        <Icon.Arrow size={8} />
                        <Icon.Arrow size={6} />
                        <Icon.Arrow size={4} />
                        <Icon.Arrow size={2} />
                        <Icon.Arrow size={1} />
                    </Grid>
                    <Grid columns={5} alignItems="center">
                        <Icon.Cross size={8} />
                        <Icon.Cross size={6} />
                        <Icon.Cross size={4} />
                        <Icon.Cross size={2} />
                        <Icon.Cross size={1} />
                    </Grid>
                    <Grid columns={5} alignItems="center">
                        <Icon.Circle size={8} />
                        <Icon.Circle size={6} />
                        <Icon.Circle size={4} />
                        <Icon.Circle size={2} />
                        <Icon.Circle size={1} />
                    </Grid>
                    <Grid columns={5} alignItems="center">
                        <Icon.Eye size={8} />
                        <Icon.Eye size={6} />
                        <Icon.Eye size={4} />
                        <Icon.Eye size={2} />
                        <Icon.Eye size={1} />
                    </Grid>
                    <Grid columns={5} alignItems="center">
                        <Icon.At size={8} />
                        <Icon.At size={6} />
                        <Icon.At size={4} />
                        <Icon.At size={2} />
                        <Icon.At size={1} />
                    </Grid>
                    <Grid columns={5} alignItems="center">
                        <Icon.Tick size={8} />
                        <Icon.Tick size={6} />
                        <Icon.Tick size={4} />
                        <Icon.Tick size={2} />
                        <Icon.Tick size={1} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SectionIcons;
