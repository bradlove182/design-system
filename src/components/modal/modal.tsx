import React from "react";

export interface ModalProps {
    children: React.ReactNode;
}

const Modal: React.ComponentType<ModalProps> = ({}) => {
    return (
        <div>
            <input type="checkbox" hidden />
            <div></div>
        </div>
    );
};

Modal.displayName = "Modal";
export default Modal;
