import React, {useState} from 'react';
import s from "./Forms.module.css";
import {Button} from "./Button";
import {SetDesk} from "./SetDesk";

export const SettingsForm = () => {

    const minValue = 0;
    const startValue = 0;
    const maxValue = 5;

    let [num, setNum] = useState(minValue);

    /*const setNewNumber = () => {
        setNum(value);
    }*/

    return (
        <div className={s.counterBlock}>
            <SetDesk startValue={startValue} maxValue={maxValue}/>
            <div className={s.buttonsBlock}>
                <Button title="set" disabled={num===0}/>
            </div>
        </div>
    );
}
