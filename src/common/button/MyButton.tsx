import React from 'react'
import styles from './Button.module.css'

type ButtonPropsType = {
    title: string;
    onClickHandler: () => void;
    type:'default' | 'red';
}
export const MyButton = React.memo((props: ButtonPropsType) => {
    const {title, onClickHandler, type} = props;
    
    return (
            // <button className={type === 'default' ? styles.default :  styles.red} onClick={onClickHandler}>{title}</button>
            <button className={styles[type]} onClick={onClickHandler}>{title}</button>
    );
})