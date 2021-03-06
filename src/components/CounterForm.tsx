import React, {useState} from 'react';
import s from "./Forms.module.css";
import {Button} from "./Button";
import {Desk} from "./Desk";

type CounterFormPropsType = {

}
export const CounterForm: React.FC<CounterFormPropsType> = () => {

    const minValue = 0;
    const maxValue = 5;

    let [num, setNum] = useState(minValue);

    const onClickIncrement = () => {
        if (num < maxValue) {
            setNum(num + 1);
        }
    }
    const onClickReset = () => {
        setNum(minValue);
    }

    return (
        <div className={s.counterBlock}>
            <Desk num={num} maxValue={maxValue}/>
            <div className={s.buttonsBlock}>
                <Button title="inc" callBack={onClickIncrement} disabled={num===maxValue}/>
                <Button title="reset" callBack={onClickReset} disabled={num===minValue}/>
            </div>
        </div>
    );
}
