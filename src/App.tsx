import React, {useState} from 'react';
import './App.css';
import DisplayTelegram from './components/display-telega/DisplayTelegtam';
import {v1} from 'uuid';
import PriorityList from './components/priority-list/PriorityList';

//TS
export type priorityListType = {
    id: string,
    title: string,
    priority: string
}
export type stateType = Array<priorityListType>;
export type filterType = 'all' | 'hight' | 'middle' | 'low';

function App() {
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

    if(filter === 'hight'){
        filteredState = filteredState.filter(list => list.priority === 'hight');
    }
    if(filter === 'middle'){
        filteredState = filteredState.filter(list => list.priority === 'middle');
    }
    if(filter === 'low'){
        filteredState = filteredState.filter(list => list.priority === 'low');
    }
    //changr filter
    const changeFilter = (value:filterType) => {
        setFilter(value);
    }

    //delete priority list
    const deleteItem = (id: string) => {
        setState(state.filter(list => list.id !== id));
    }

    return (
        <div className="App">
            <DisplayTelegram fullName={'Александр Горячко'}
                             text={'Lorem ipsum dolor sit amet, consecteturuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu adipisicing elit. Accusantium alias aliquam aperiam architecto aspernatur at autem commodi consequuntur culpa cumque dolorem, dolores eius est eveniet exercitationem fuga, magni natus neque, nisi non nostrum omnis pariatur placeat praesentium quam quia quod rem reprehenderit rerum sequi similique sint vitae voluptate! At, deleniti!'}
                             addedTime={'16:47'}/>
            <PriorityList state={filteredState} deleteItem={deleteItem} changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
