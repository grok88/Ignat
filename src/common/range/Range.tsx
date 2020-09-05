import React, { ChangeEvent } from 'react';
import styles from './Range.module.css'

type RangePropsType = {
    min:number;
    max:number;
    value:string;
    onChangeRange:(value:string) => void;
}
export const Range = React.memo((props:RangePropsType) => {
    const {max,min,onChangeRange,value} = props;
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        onChangeRange(e.currentTarget.value);
    }
    return (
        <div className={styles.Range}>
            <input type="range" step="1"  min={min} max={max} value={value} onChange={onChangeHandler}/>
        </div>
    );
});