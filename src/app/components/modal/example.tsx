"use client";

import React, { useRef, useCallback } from "react";
import { Text, Grid, Card, Modal, Button } from "@lib";

export const ModalExample: React.ComponentType = () => {
    const modalRef = useRef<HTMLInputElement>(null);
    const handleOpenModal = useCallback(() => {
        if (modalRef.current) {
            modalRef.current.checked = !modalRef.current.checked;
        }
    }, []);
    return (
        <>
            <Button onClick={handleOpenModal}>{"Show Modal"}</Button>
            <Modal id="modal-1" ref={modalRef}>
                <Grid gap={3}>
                    <Text as="h3">
                        {"Congratulations random Internet user!"}
                    </Text>
                    <Text>
                        {
                            "You've been selected for a chance to get one year of subscription to use Wikipedia for free!"
                        }
                    </Text>
                    <Button onClick={handleOpenModal} variant="gradient">
                        {"Yay!"}
                    </Button>
                </Grid>
            </Modal>
        </>
    );
};
