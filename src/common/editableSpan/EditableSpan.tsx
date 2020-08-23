import React, {useState} from 'react';
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
    const onKeyPressHandler = (charcode: number) => {
        console.log(charcode);
        if (charcode === 13) {
            setEditMode(false);
        }
    }
    return (
        editMode
            ? <MyInput value={value} onChange={onChange} onKeyPress={onKeyPressHandler}/>
            : <span onClick={activateEditMode}>{value}</span>
    );
}