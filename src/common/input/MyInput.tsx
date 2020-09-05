import React from 'react'
import styles from './MyInput.module.css'

type MyInputPropsType = {
    value: string;
    onChange: (value: string) => void;
    onKeyPress: (value: number) => void;
    error?: boolean;
}
export const MyInput = React.memo((props: MyInputPropsType) => {
    const {value, onChange, onKeyPress, error} = props;
    return (
        <div className={styles.group}>
            <input
                type="text"
                value={value}
                className={error ? styles.error : ''}
                onChange={e => onChange(e.currentTarget.value)}
                onKeyPress={e => onKeyPress(e.charCode)}
            />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.label}>Name</label>
        </div>
    );
})