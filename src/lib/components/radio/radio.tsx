import React from "react";
import RadioItem from "./radio-item";
import style from "./index.module.css";
import { RadioContext } from "./context";

export interface RadioProps {
    children: React.ReactNode;
    name: string;
    direction?: "column" | "row";
}

export interface RadioComponent<T> extends React.FunctionComponent<T> {
    Item: typeof RadioItem;
}

const Radio: RadioComponent<RadioProps> = ({
    children,
    name,
    direction = "column",
}) => {
    const [, setRadioContext] = RadioContext;
    setRadioContext(name);
    return (
        <div
            role="radiogroup"
            className={style["radio-group"]}
            style={
                {
                    "--radio-direction": direction,
                } as React.CSSProperties
            }
        >
            {children}
        </div>
    );
};

Radio.displayName = "Radio";
Radio.Item = RadioItem;

export default Radio;
