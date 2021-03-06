import React, {useState, useCallback} from 'react';
import styles from './EditableSpan.module.css';
import {MyInput} from '../input/MyInput'


type EditableSpanPropsType = {
    value: string;
    onChange: (newValue: string) => void;
}
export const EditableSpan = (props: EditableSpanPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false);
    const {value, onChange} = props;

    const activateEditMode = () => {
        setEditMode(true);
    }
    const onKeyPressHandler = useCallback((charcode: number) => {
        if (charcode === 13) {
            if (value) {
                setEditMode(false);
            } else {
                alert('Empty string');
            }
        }
    },[]);

    return (
        editMode
            ? <MyInput value={value} onChange={onChange} onKeyPress={onKeyPressHandler}/>
            : <span onClick={activateEditMode}>{value}</span>
    );
}