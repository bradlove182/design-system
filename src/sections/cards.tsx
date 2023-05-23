import React from "react";
import { Text, Grid, Card, InlineCode } from "@lib";

const SectionCards: React.ComponentType = () => {
    return (
        <Grid as="section" alignItems="start" columns={1} gap={3}>
            <Text as={"h2"}>{"Cards"}</Text>
            <Grid columns={1} gap={5}>
                <Card>
                    <Card.Body>{"Base Card"}</Card.Body>
                </Card>
                <Card>
                    <Card.Header>{"Card Header"}</Card.Header>
                    <Card.Body>{"Card with Header"}</Card.Body>
                </Card>
                <Card elevation={1}>
                    <Card.Body>
                        {"Card "}
                        <InlineCode>{"elevation=1"}</InlineCode>
                    </Card.Body>
                </Card>
                <Card elevation={2}>
                    <Card.Body>
                        {"Card "}
                        <InlineCode>{"elevation=2"}</InlineCode>
                    </Card.Body>
                </Card>
                <Card elevation={3}>
                    <Card.Body>
                        {"Card "}
                        <InlineCode>{"elevation=3"}</InlineCode>
                    </Card.Body>
                </Card>
            </Grid>
        </Grid>
    );
};

export default SectionCards;
