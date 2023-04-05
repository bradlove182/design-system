import { SectionTypography } from "./sections";
import { Button, Text, Container, Flex } from "../components";

import style from "./index.module.css";

function App() {
    return (
        <div className={style.app}>
            <Container>
                <Flex gap={5} direction="column" alignItems="start">
                    <Flex justifyContent="space-between" alignItems="center">
                        <Text as={"h1"}>{"Design System / Components"}</Text>
                        <span>{"v1.0"}</span>
                    </Flex>
                    <SectionTypography />
                    <Flex gap={3}>
                        <Button>{"Primary"}</Button>
                        <Button variant="secondary">{"Secondary"}</Button>
                        <Button variant="transparent">{"Transparent"}</Button>
                        <Button variant="outline">{"Outline"}</Button>
                        <Button variant="gradient">{"Gradient"}</Button>
                    </Flex>
                </Flex>
            </Container>
        </div>
    );
}

export default App;
