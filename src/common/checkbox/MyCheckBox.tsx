import React from 'react'
import styles from './MyCheckBox.module.css'

type MyCheckBoxPropsType = {
    check: boolean;
    onChange: (isCheck: boolean) => void;
    customLabel:string;
}
export const MyCheckBox = (props: MyCheckBoxPropsType) => {
    const {check, onChange,customLabel} = props;
    return (
        <div className={styles.cntr}>
            <label  className={styles.labelCbx}>{customLabel}
                <input type="checkbox" checked={check} className={styles.invisible}
                       onChange={e => onChange(e.currentTarget.checked)} />
                    <div className={styles.checkbox}>
                        <svg width="20px" height="20px" viewBox="0 0 20 20">
                            <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                            <polyline points="4 11 8 15 16 6"></polyline>
                        </svg>
                    </div>

            </label>
         </div>
    );
}
