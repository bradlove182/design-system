"use client";

import React, { useMemo, useState, useCallback } from "react";
import style from "./index.module.css";
import { Label } from "../label";
import { adjustSlider } from "./utils";

export interface RangeProps {
    id: string;
    label?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    value?: number;
    disabled?: boolean;
    min?: number;
    max?: number;
    step?: number;
}

const Range: React.ComponentType<RangeProps> = ({
    id,
    label,
    onChange,
    value = 50,
    disabled = false,
    min = 0,
    max = 100,
    step,
}) => {
    const [range, setRange] = useState<number>(value);

    const handleOnChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setRange(parseFloat(event.target.value));
            if (onChange) {
                onChange(event);
            }
        },
        [onChange]
    );

    const fill = useMemo(
        () => adjustSlider(range, min, max, disabled),
        [range, min, max, disabled]
    );

    return (
        <div className={style.range}>
            {label ? <Label id={id}>{label}</Label> : undefined}
            <input
                onChange={handleOnChange}
                id={id}
                type="range"
                disabled={disabled}
                defaultValue={value}
                min={min}
                max={max}
                step={step}
                style={
                    {
                        "--track-background": `${fill}`,
                    } as React.CSSProperties
                }
            />
        </div>
    );
};

Range.displayName = "Range";
export default Range;
