import React from "react";
import style from "./index.module.css";

export interface ModalProps {
    id: string;
    children: React.ReactNode;
}

const Modal = React.forwardRef<HTMLInputElement, ModalProps>(
    ({ children, id }, ref) => {
        return (
            <div className={style.modal}>
                <label htmlFor={id} className={style["modal-close"]} />
                <input
                    className={style.input}
                    type="checkbox"
                    hidden
                    ref={ref}
                    id={id}
                />
                <div className={style["modal-box"]}>{children}</div>
            </div>
        );
    }
);

Modal.displayName = "Modal";
export default Modal;
