import { Text, Card, Grid, Flex } from "@lib";
import { ColourSwatch } from "./colour-swatch";

const ColoursPage = () => (
    <>
        <Text as="h1">{"Colours"}</Text>
        <Grid gap={3}>
            <Card>
                <Card.Header>{"Foundations"}</Card.Header>
                <Card.Body>
                    <Grid gap={6} columns={1}>
                        <ColourSwatch colour="brand" />
                        <Grid gap={3} columns={3}>
                            <ColourSwatch colour="background" />
                            <ColourSwatch colour="foreground" />
                            <ColourSwatch colour="border-color" />
                        </Grid>
                        <Grid gap={3} columns={3}>
                            <ColourSwatch colour="text" />
                            <ColourSwatch colour="text-subdued" />
                            <ColourSwatch colour="text-amplified" />
                        </Grid>
                    </Grid>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>{"Palette"}</Card.Header>
                <Card.Body>
                    <Grid gap={6} columns={3}>
                        {[
                            "gray",
                            "pink",
                            "red",
                            "orange",
                            "yellow",
                            "green",
                            "teal",
                            "blue",
                            "indigo",
                            "purple",
                        ].map((color) => (
                            <Flex gap={2} key={color} wrap="wrap">
                                {Array(21)
                                    .fill(null)
                                    .map((value, index) =>
                                        index * 5 === 0 ||
                                        index * 5 === 100 ? undefined : (
                                            <ColourSwatch
                                                key={index}
                                                colour={`${color}-${index * 5}`}
                                                hsla
                                            />
                                        )
                                    )}
                            </Flex>
                        ))}
                    </Grid>
                </Card.Body>
            </Card>
        </Grid>
    </>
);

export default ColoursPage;
