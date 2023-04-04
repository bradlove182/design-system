import { useState } from "react";

import { Button, Text, Container, Flex } from "../components";

function App() {
    return (
        <Container>
            <Flex gap={5} direction="column" alignItems="start">
                <Text as={"h1"}>{"Design System / Component Library"}</Text>
                <section>
                    <Text as={"h2"}>{"Typography"}</Text>
                    <Text>{"H1"}</Text>
                    <Text as={"h1"}>
                        {"Almost before we knew it, we had left the ground."}
                    </Text>
                    <Text>{"H2"}</Text>
                    <Text as={"h2"}>
                        {"Almost before we knew it, we had left the ground."}
                    </Text>
                    <Text>{"H3"}</Text>
                    <Text as={"h3"}>
                        {"Almost before we knew it, we had left the ground."}
                    </Text>
                    <Text>{"H4"}</Text>
                    <Text as={"h4"}>
                        {"Almost before we knew it, we had left the ground."}
                    </Text>
                    <Text>{"H5"}</Text>
                    <Text as={"h5"}>
                        {"Almost before we knew it, we had left the ground."}
                    </Text>
                    <Text>{"H6"}</Text>
                    <Text as={"h6"}>
                        {"Almost before we knew it, we had left the ground."}
                    </Text>
                </section>
                <section>
                    <Text>{"Text Size 7"}</Text>
                    <Text size={7}>
                        {"Almost before we knew it, we had left the ground."}
                    </Text>
                    <Text>{"Text Size 6"}</Text>
                    <Text size={6}>
                        {"Almost before we knew it, we had left the ground."}
                    </Text>
                    <Text>{"Text Size 5"}</Text>
                    <Text size={5}>
                        {"Almost before we knew it, we had left the ground."}
                    </Text>
                    <Text>{"Text Size 4"}</Text>
                    <Text size={4}>
                        {"Almost before we knew it, we had left the ground."}
                    </Text>
                    <Text>{"Text Size 3"}</Text>
                    <Text size={3}>
                        {"Almost before we knew it, we had left the ground."}
                    </Text>
                    <Text>{"Text Size 2"}</Text>
                    <Text size={2}>
                        {"Almost before we knew it, we had left the ground."}
                    </Text>
                    <Text>{"Text Size 1"}</Text>
                    <Text size={1}>
                        {"Almost before we knew it, we had left the ground."}
                    </Text>
                    <Text>{"Text Gradient"}</Text>
                    <Text size={3} variant="gradient">
                        {"Almost before we knew it, we had left the ground."}
                    </Text>
                </section>
                <Flex gap={3}>
                    <Button>{"Primary"}</Button>
                    <Button variant="secondary">{"Secondary"}</Button>
                    <Button variant="transparent">{"Transparent"}</Button>
                    <Button variant="outline">{"Outline"}</Button>
                    <Button variant="gradient">{"Gradient"}</Button>
                </Flex>
            </Flex>
        </Container>
    );
}

export default App;
