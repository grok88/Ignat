import React, {useState} from 'react';
import styles from './Junior.module.css'
import {EditableSpan} from '../../common/editableSpan/EditableSpan';
import {saveState, restoreState} from '../../settings/localStorage/localStorage';
import {MyButton} from '../../common/button/MyButton';

export const Junior = () => {
    // useEffect(()=> {
    //     saveState<StateType>('test', {x:'Alex', y:32});
    //     const state: StateType = restoreState<StateType>("test", {x: "", y: 0});
    //     console.log(state);
    // },[]);

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
    const onChangeValueДЫ = (newValue: string) => {
        setValueLS(newValue);
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
            </div>
        </div>
    );
}