import {
    SectionTypography,
    SectionColors,
    SectionIcons,
    SectionLists,
    SectionButtons,
    SectionCards,
    SectionInlineCode,
    SectionPills,
    SectionFormComponents,
} from "./sections";
import { Text, Container, Flex, Pill, Grid } from "../components";

import style from "./index.module.css";

function App() {
    return (
        <div className={style.app}>
            <Container>
                <Grid gap={9} alignItems="start">
                    <Grid gap={0} alignItems="start">
                        <Flex>
                            <Pill>{"v1.0"}</Pill>
                            <Pill variant="warning">{"Work In Progress"}</Pill>
                        </Flex>
                        <Text as={"h1"}>{"Design System / Components"}</Text>
                    </Grid>
                    <SectionColors />
                    <SectionTypography />
                    <SectionIcons />
                    <SectionLists />
                    <SectionButtons />
                    <SectionFormComponents />
                    <SectionCards />
                    <SectionPills />
                    <SectionInlineCode />
                </Grid>
            </Container>
        </div>
    );
}

export default App;
