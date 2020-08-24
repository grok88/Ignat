import React from 'react';
import styles from './Radio.module.css';

export type RadioItemType = {
    id: string;
    value: string;
    label: string
}
type RadioPropsType = {
    name: string;
    items: Array<RadioItemType>;
    value: string;
    onChange: (value: string) => void;
}

export const Radio = (props: RadioPropsType) => {
    const {items, name, value,onChange} = props;
    return (
        <div>
            {
                items.map(item => <div key={item.id} className={styles.form_radio}>
                    <input id={item.id}
                           checked={value === item.value}
                           type="radio"
                           name={name}
                           value={item.value}
                           onChange={(e) => onChange(e.currentTarget.value)}/>
                    <label htmlFor={item.id}>{item.label}</label>
                </div>)
            }
        </div>
    );
}