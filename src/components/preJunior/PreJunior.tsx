import React, {useState} from 'react';
import styles from './PreJunior.module.css'
import DisplayTelegram from '../display-telega/DisplayTelegtam';
import PriorityList from '../priority-list/PriorityList';
import {filterType, priorityListType} from '../../App';
import {v1} from 'uuid';
import Lesson3 from '../lesson-3/Lesson3';
import {AllCustomComponent} from '../lesson4/AllCustomComponent';

export const PreJunior = () => {
    let [state, setState] = useState<Array<priorityListType>>([
        {id: v1(), title: 'react', priority: 'hight'},
        {id: v1(), title: 'work', priority: 'hight'},
        {id: v1(), title: 'anime', priority: 'low'},
        {id: v1(), title: 'games', priority: 'middle'},
        {id: v1(), title: 'js', priority: 'hight'},
    ]);
    let [filter, setFilter] = useState<filterType>('all');

    //filtered
    let filteredState = state;

    if (filter === 'hight') {
        filteredState = filteredState.filter(list => list.priority === 'hight');
    }
    if (filter === 'middle') {
        filteredState = filteredState.filter(list => list.priority === 'middle');
    }
    if (filter === 'low') {
        filteredState = filteredState.filter(list => list.priority === 'low');
    }
    //changr filter
    const changeFilter = (value: filterType) => {
        setFilter(value);
    }

    //delete priority list
    const deleteItem = (id: string) => {
        setState(state.filter(list => list.id !== id));
    }

    return (
        <div className={styles.preJuniorBlock}>
            <h2>PreJunior</h2>
            <div className={styles.preJunior}>
                <div className={styles.less1}>
                    <DisplayTelegram fullName={'Александр Горячко'}
                                     text={'Lorem ipsum dolor sit amet, consecteturuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu adipisicing elit. '}
                                     addedTime={'16:47'}/>
                </div>
                <div className={styles.less2}>
                    <PriorityList state={filteredState} deleteItem={deleteItem} changeFilter={changeFilter}/>
                </div>
                <div className={styles.less3}>
                    <Lesson3/>
                </div>
                <div className={styles.less4}>
                    <AllCustomComponent/>
                </div>
            </div>
        </div>
    );
}