import React from "react";
import { Card, Text, Grid, Button, Icon } from "@lib";
import Link from "next/link";

export const ComingSoon: React.ComponentType = () => {
    return (
        <Card>
            <Card.Body>
                <Grid gap={6}>
                    <Grid>
                        <Text as="h2">{"Coming soon"}</Text>
                        <Text>
                            {"You can preview the components in the meantime."}
                        </Text>
                    </Grid>
                    <Link href="/components/">
                        <Button as="span" variant="gradient">
                            <Icon.Arrow direction="left" />
                            {"Components"}
                        </Button>
                    </Link>
                </Grid>
            </Card.Body>
        </Card>
    );
};
