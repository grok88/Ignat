import React from 'react';
import styles from './Select.module.css';


type SelectPropsType = {
    items: Array<string>;
    value: string;
    onChange: (value: string) => void;
}
export const Select = React.memo((props: SelectPropsType) => {
    const {items, onChange, value} = props;
    return (
        <div className={styles.select}>
            <select onChange={(e) => onChange(e.currentTarget.value)} defaultValue={value}>
                {items.map((item, i) => <option key={i} value={item}
                                                // selected={value === item ? true : false}
                >{item}</option>)}
            </select>
        </div>
    );
});