import React from 'react';
import styles from './App.module.css';
import {HashRouter, Route} from 'react-router-dom';
import {PreJunior} from './components/preJunior/PreJunior';
import {Junior} from './components/Junior/Junior';
import {JuniorHard} from './components/Junior+/Junior+';
import {Navbar} from './components/navbar/Navbar';

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
        <HashRouter>
            <Navbar/>
            <main role="main">
                <div className={styles.app}>
                    {/*<Route exact path={'/'} render={() => <Main/>}/>*/}
                    <Route path={'/prejunior'} render={() => <PreJunior/>}/>
                    <Route path={'/junior'} render={() => <Junior/>}/>
                    <Route path={'/junior+'} render={() => <JuniorHard/>}/>
                </div>
            </main>
        </HashRouter>
    );
}

export default App;

