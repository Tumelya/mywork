import React, {ChangeEvent} from 'react';
import s from "./InputSetNum.module.css";

type InputSetNumType = {
    value: number
}
export const InputSetNum = (props: InputSetNumType) => {

    let step = 1;

    const onNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
    }

    return (
        <div className={s.inputSet}>
            <input className={s.input}
                   type="number" step={step} min={props.value}
                   onChange={onNumberChange}
                   required>
            </input>
        </div>
    );
}