import React from 'react';
import s from "./InputSetNum.module.css";

type InputSetNumType = {
    value: number
}
export const InputSetNum = (props: InputSetNumType) => {

    let step = 1;

    return (
        <div className={s.inputSet}>
            <input className={s.input}
                   type="number"
                   step={step}
                   min={props.value}
                   required>
            </input>
        </div>
    );
}