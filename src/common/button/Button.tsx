import React from 'react'
import styles from './Button.module.css'

type ButtonPropsType = {
    title: string;
    onClickHandler: () => void;
    type:'default' | 'red';
}
export const Button = (props: ButtonPropsType) => {
    const {title, onClickHandler, type} = props;
    
    return (
            <button className={type === 'default' ? styles.default :  styles.red} onClick={onClickHandler}>{title}</button>
    );
}