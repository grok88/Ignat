import React from 'react';
import {priorityListType, filterType} from '../../App';

type PriorityListPropsType = {
    state: Array<priorityListType>,
    deleteItem: (id: string) => void,
    changeFilter: (value: filterType) => void
}

const PriorityList = (props: PriorityListPropsType) => {
    let {state, deleteItem, changeFilter} = props;
    const onChangeAllFilter = () => {
        changeFilter('all');
    }
    const onChangeHightFilter = () => {
        changeFilter('hight');
    }
    const onChangeMiddleFilter = () => {
        changeFilter('middle');
    }
    const onChangeLowFilter = () => {
        changeFilter('low');
    }
    return (
        <div>
            <h2>Lesson2</h2>
            <ul>
                {
                    state.map(list => {
                        return <li key={list.id}>
                            {list.title}
                            <button onClick={() => {
                                deleteItem(list.id)
                            }}>x
                            </button>
                        </li>
                    })
                }
            </ul>
            <div>
                <button onClick={onChangeAllFilter}>All</button>
                <button onClick={onChangeHightFilter}>Hight</button>
                <button onClick={onChangeMiddleFilter}>Middle</button>
                <button onClick={onChangeLowFilter}>Low</button>
            </div>
        </div>
    );
}
export default PriorityList;