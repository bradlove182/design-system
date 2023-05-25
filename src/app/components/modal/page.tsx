import { Grid, Card, InlineCode, Flex, Text, Modal, Button } from "@lib";
import { ModalExample } from "./example";

export const metadata = {
    title: "Modal | Design System",
};

const ModalPage = () => (
    <Grid as="section">
        <Flex alignItems="center" justifyContent="space-between">
            <Text as="h1">{"Modal"}</Text>
            <InlineCode>
                {'import { Modal } from "@bradlove/design-system"'}
            </InlineCode>
        </Flex>
        <Grid gap={3}>
            <Card>
                <Card.Body>
                    <ModalExample />
                </Card.Body>
            </Card>
        </Grid>
    </Grid>
);

export default ModalPage;
