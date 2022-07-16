import React from 'react';
import s from "./Desk.module.css";

type DeskType = {
    num: number
    maxValue: number
}
export const Desk = (props: DeskType) => {

    return (
            <div className={props.num === props.maxValue ? s.lastNum : s.numbers}><p>{props.num}</p></div>
    );
}