import React, {useState, useReducer} from 'react';
import styles from './Junior.module.css'
import {EditableSpan} from '../../common/editableSpan/EditableSpan';
import {saveState, restoreState} from '../../settings/localStorage/localStorage';
import {MyButton} from '../../common/button/MyButton';
import {Select} from '../../common/select/Select';
import {Radio, RadioItemType} from '../../common/radio/Radio';
import {hwReducer, sort, check} from '../../redux/homeWorkReducer';
import {Lesson8} from '../lesson8/lesson8';
import {MyTime} from '../time/MyTime';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {InitialStateType, setLoading} from '../../redux/loadingReducer';
import Preloader from '../../assets/preloader/Preloader';

export const Junior = () => {

    //redux
    const dispatch = useDispatch();
    const loader = useSelector<AppRootStateType, InitialStateType>(state => state.loading);
    console.log(loader.loading)

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
    const [selectValue, setSelectValue] = useState<string>("Alex");
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
    //lesson8
    let [people, dispatchToPeople] = useReducer(hwReducer, [
        {name: 'Alex', age: 32, id: '1'},
        {name: 'Sveta', age: 18, id: '2'},
        {name: 'Igor', age: 15, id: '3'},
        {name: 'Boris', age: 18, id: '4'},
        {name: 'Tanya', age: 35, id: '5'},
    ]);

    const sortArray = (payload: 'up' | 'down') => {
        dispatchToPeople(sort(payload));
    }
    const sortByAge = (age: number) => {
        dispatchToPeople(check(age));
    }
    //10
    const toggleLoader = () => {
        dispatch(setLoading(true));
        setTimeout(() => {
            dispatch(setLoading(false))
        }, 3000)
    }
    if (loader.loading) {
        return <Preloader/>
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
                <div className={styles.less8}>
                    <h2>Lesson 8</h2>
                    <Lesson8 items={people} sort={sortArray} sortByAge={sortByAge}/>
                </div>
                <div className={styles.less9}>
                    <h2>Lesson 9 - TIME</h2>
                    {/*{now.toLocaleString("ru", options)}*/}
                    <MyTime/>
                </div>
                <div className={styles.less10}>
                    <h2>Lesson 10 - PRELOADER</h2>
                    <MyButton title={'Change Loader'} type={'default'} onClickHandler={toggleLoader}/>
                </div>
            </div>
        </div>
    );
}