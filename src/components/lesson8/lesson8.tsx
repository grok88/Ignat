import React from 'react';
import styles from './lesson8.module.css'
import {HwReducerStateType} from '../../redux/homeWorkReducer';
import {MyButton} from '../../common/button/MyButton';

type Lesson8PropsType = {
    items: HwReducerStateType;
    sort: (payload: 'up' | 'down') => void
    sortByAge: (age: number) => void;
}
export const Lesson8 = (props: Lesson8PropsType) => {
    const {items, sort, sortByAge} = props;

    const sortHandler = (payload: 'up' | 'down') => {
        sort(payload);
    }
    const sortByAgeHundler = (age: number) => {
        sortByAge(age);
    }

    return (
        <div>
            <ul>
                {
                    items.map(item => {
                        return <li key={item.id}>Name:{item.name}, Age:{item.age}, Id:{item.id}</li>
                    })
                }
            </ul>
            <div>
                <MyButton title={'Sort up'} type={'default'} onClickHandler={() => sortHandler('up')}/>
                <MyButton title={'Sort down'} type={'default'} onClickHandler={() => sortHandler('down')}/>
                <MyButton title={'Sort by age'} type={'default'} onClickHandler={() => sortByAgeHundler(18)}/>
            </div>
        </div>
    );
}