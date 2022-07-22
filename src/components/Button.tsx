import React from 'react';
import s from "./Button.module.css";

type ButtonPropsType = {
    title: string
    callBack?: () => void
    disabled: boolean
}
export const Button = (props: ButtonPropsType) => {

    return (
        <button className={props.disabled ? s.disableButt : s.butt} onClick={props.callBack} disabled={props.disabled}>{props.title}</button>
    );
}