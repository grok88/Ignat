import React, {useState} from 'react';
import styles from './Junior.module.css'
import {EditableSpan} from '../../common/editableSpan/EditableSpan';

export const Junior = () => {
    //less6
    const [value, setValue] = useState<string>('Lesson 6 example');
    const onChangeValue = (newValue: string) => {
        setValue(newValue);
    }

    return (
        <div className={styles.JuniorBlock}>
            <h2>Junior</h2>
            <div className={styles.Junior}>
                <div className={styles.less6}>
                    <EditableSpan value={value} onChange={onChangeValue}/>
                </div>
            </div>
        </div>
    );
}