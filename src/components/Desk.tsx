import React from 'react';
import s from "./Desk.module.css";

type DeskType = {
    num: number
    maxValue: number
}
export const Desk = (props: DeskType) => {

    return (
        <div className={`${s.desk} ${props.num === props.maxValue ? s.lastNum : ''}`}>
            <p>{props.num}</p>
        </div>
    );
}