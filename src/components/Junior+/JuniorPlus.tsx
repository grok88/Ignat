import React, { useState, useCallback } from 'react';
import styles from './JuniorPlus.module.css'
import { Radio, RadioItemType } from '../../common/radio/Radio';
import { useSelector, useDispatch } from 'react-redux';
import { AppRootStateType } from '../../redux/store';
import { ThemeReducerStateType, setThemeAC } from '../../redux/themeReducer';

export const JuniorPlus = () => {
    //less 12
    const dispatch = useDispatch();
    const theme = useSelector<AppRootStateType,ThemeReducerStateType>(state => state.theme);

    const radioItems: RadioItemType[] = [
        {
            value: 'light',
            label: 'light theme',
            id: 'radio-1'
        },
        {
            value: 'dark',
            label: 'dark theme',
            id: 'radio-2'
        },
        {
            value: 'green',
            label: 'green theme',
            id: 'radio-3'
        },
    ];
    const onChangeChecked = useCallback((value: string) => {
        dispatch(setThemeAC(value));
    },[]);

    return (
        <div className={styles.JuniorPlusBlock + ' ' +  styles[theme.theme]
        }>
            <h2 className={styles.title}>JuniorPlus</h2>
            <div className={styles.JuniorPlus}>
                <div className={styles.less12}>
                    <h2>Lesson 12 - Change Theme</h2>
                    <Radio name={'theme'} items={radioItems} value={theme.theme} onChange={onChangeChecked}/>
                </div>
            </div>
        </div>
    );
}