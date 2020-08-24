import React, {useState} from 'react';
import styles from './Junior.module.css'
import {EditableSpan} from '../../common/editableSpan/EditableSpan';
import {saveState, restoreState} from '../../settings/localStorage/localStorage';
import {MyButton} from '../../common/button/MyButton';
import {Select} from '../../common/select/Select';
import {Radio, RadioItemType} from '../../common/radio/Radio';

export const Junior = () => {

    //less6 - editableSpan
    const [valueES, setValueES] = useState<string>('Lesson 6 editableSpam');

    const onChangeValueES = (newValue: string) => {
        setValueES(newValue);
    }
    //less6 - localStorage
    const [valueLS, setValueLS] = useState<string>('Lesson 6 localStorage');

    type StateType = { valueLS: string }
    const addToLocalStorage = () => {
        saveState<StateType>('test', {valueLS});
    }
    const restoreFromLocalStorage = () => {
        const state: StateType = restoreState<StateType>("test", {valueLS: 'Lesson 6 example'});
        setValueLS(state.valueLS);
    }


    //less 7
    //select
    const [selectValue, setSelectValue] = useState<string>("Jora");
    const items = [
        "Alex",
        "Gor",
        "Jora",
        "Anyfriy",
    ]
    const onChangeSelect = (value: string) => {
        setSelectValue(value);
    }
    //radio
    const [CheckedValue, setCheckedValue] = useState<string>("2");
    const radioItems: RadioItemType[] = [
        {
            value: '1',
            label: 'Radio button 1',
            id: 'radio-1'
        },
        {
            value: '2',
            label: 'Radio button 2',
            id: 'radio-2'
        },
        {
            value: '3',
            label: 'Radio button 3',
            id: 'radio-3'
        },
    ];
    const onChangeChecked = (value: string) => {
        setCheckedValue(value);
    }
    return (
        <div className={styles.JuniorBlock}>
            <h2>Junior</h2>
            <div className={styles.Junior}>
                <div className={styles.less6}>
                    <h2>Lesson 6</h2>
                    <div className={styles.less6_1}>
                        <h3>Lesson6_1 - EditableSpan</h3>
                        <EditableSpan value={valueES} onChange={onChangeValueES}/>
                    </div>
                    <div className={styles.less6_2}>
                        <h3>Lesson6_2 - localStorage</h3>
                        <EditableSpan value={valueLS} onChange={setValueLS}/>
                        <MyButton title={'save'} type={'default'} onClickHandler={addToLocalStorage}/>
                        <MyButton title={'restore'} type={'default'} onClickHandler={restoreFromLocalStorage}/>
                    </div>
                </div>
                <div className={styles.less7}>
                    <h2>Lesson 7 - Select</h2>
                    <Select onChange={onChangeSelect} items={items} value={selectValue}/>
                    <h2>Lesson 7 - Radio</h2>
                    <Radio name={'car'} items={radioItems} value={CheckedValue} onChange={onChangeChecked}/>
                </div>
            </div>
        </div>
    );
}