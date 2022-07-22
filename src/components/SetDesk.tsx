import React from 'react';
import s from "./Desk.module.css";
import {InputSetNum} from "./InputSetNum";

type SetDeskType = {
    startValue: number
    maxValue: number
}
export const SetDesk = (props: SetDeskType) => {

    return (
        <div className={s.setDesk}>
            <div className={s.displayValue}>
                <span>max value</span>
                <InputSetNum value={props.maxValue}/>
            </div>
            <div className={s.displayValue}>
                <span>start value</span>
                <InputSetNum value={props.startValue} />
            </div>
        </div>
    );
}