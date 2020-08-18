import React from 'react';
import {priorityListType, filterType} from '../../App';
import { MyButton } from '../../common/button/MyButton';

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
                            <MyButton title={'x'} type={'red'}
                                    onClickHandler={() => {
                                deleteItem(list.id)
                            }}/>
                            {/*<button  onClick={() => {*/}
                            {/*    deleteItem(list.id)*/}
                            {/*}}>delete*/}
                            {/*</button>*/}
                        </li>
                    })
                }
            </ul>
            <div>
                {/*<button onClick={onChangeAllFilter}>All</button>*/}
                {/*<button onClick={onChangeHightFilter}>Hight</button>*/}
                {/*<button onClick={onChangeMiddleFilter}>Middle</button>*/}
                {/*<button onClick={onChangeLowFilter}>Low</button>*/}
                <MyButton type={'default'} title={'All'} onClickHandler={onChangeAllFilter}/>
                <MyButton type={'default'} title={'Hight'} onClickHandler={onChangeHightFilter}/>
                <MyButton type={'default'} title={'Middle'} onClickHandler={onChangeMiddleFilter}/>
                <MyButton type={'default'} title={'Low'} onClickHandler={onChangeLowFilter}/>
            </div>
        </div>
    );
}
export default PriorityList;