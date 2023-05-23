import React, { useRef, useCallback } from "react";
import { Text, Grid, Card, Modal, Button } from "@lib";

const SectionModals: React.ComponentType = () => {
    const modalRef = useRef<HTMLInputElement>(null);
    const handleOpenModal = useCallback(() => {
        if (modalRef.current) {
            modalRef.current.checked = !modalRef.current.checked;
        }
    }, []);
    return (
        <Grid as="section" alignItems="start" columns={1} gap={3}>
            <Text as={"h2"}>{"Modals"}</Text>
            <Grid columns={1} gap={5}>
                <Button onClick={handleOpenModal}>{"Show Modal"}</Button>
                <Modal id="modal-1" ref={modalRef}>
                    <Text as="h3">
                        {"Congratulations random Internet user!"}
                    </Text>
                    <Text>
                        {
                            "You've been selected for a chance to get one year of subscription to use Wikipedia for free!"
                        }
                    </Text>
                    <Button onClick={handleOpenModal}>{"Yay!"}</Button>
                </Modal>
            </Grid>
        </Grid>
    );
};

export default SectionModals;
