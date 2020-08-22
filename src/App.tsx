import React, {useState} from 'react';
import styles from './App.module.css';

import DisplayTelegram from './components/display-telega/DisplayTelegtam';
import {v1} from 'uuid';
import PriorityList from './components/priority-list/PriorityList';
import Lesson3 from './components/lesson-3/Lesson3';
import {AllCustomComponent} from './components/lesson4/AllCustomComponent';
import {HashRouter, Route} from 'react-router-dom';
import {PreJunior} from './components/preJunior/PreJunior';
import {Junior} from './components/Junior/Junior';
import {JuniorHard} from './components/Junior+/Junior+';
import {Main} from './components/main/Main';

//TS
export type priorityListType = {
    id: string,
    title: string,
    priority: string
}
export type stateType = Array<priorityListType>;
export type filterType = 'all' | 'hight' | 'middle' | 'low';

function App() {
    return (
        <div className={styles.app}>
            <HashRouter>
                <Route exact path={'/'} render={() => <Main/>}/>
                <Route path={'/prejunior'} render={() => <PreJunior/>}/>
                <Route path={'/junior'} render={() => <Junior/>}/>
                <Route path={'/junior+'} render={() => <JuniorHard/>}/>
            </HashRouter>
        </div>
    );
}

export default App;

