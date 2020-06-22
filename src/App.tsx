import React from 'react';
import './App.css';
import DisplayTelegram from './components/display-telega/DisplayTelegtam';

function App() {
    return (
        <div className="App">
            <DisplayTelegram fullName={'Александр Горячко'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquam aperiam architecto aspernatur at autem commodi consequuntur culpa cumque dolorem, dolores eius est eveniet exercitationem fuga, magni natus neque, nisi non nostrum omnis pariatur placeat praesentium quam quia quod rem reprehenderit rerum sequi similique sint vitae voluptate! At, deleniti!'} addedTime={'16:47'}/> <DisplayTelegram fullName={'Александр Горячко'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquam aperiam architecto aspernatur at autem commodi consequuntur culpa cumque dolorem, dolores eius est eveniet exercitationem fuga, magni natus neque, nisi non nostrum omnis pariatur placeat praesentium quam quia quod rem reprehenderit rerum sequi similique sint vitae voluptate! At, deleniti!'} addedTime={'16:47'}/> <DisplayTelegram fullName={'Александр Горячко'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquam aperiam architecto aspernatur at autem commodi consequuntur culpa cumque dolorem, dolores eius est eveniet exercitationem fuga, magni natus neque, nisi non nostrum omnis pariatur placeat praesentium quam quia quod rem reprehenderit rerum sequi similique sint vitae voluptate! At, deleniti!'} addedTime={'16:47'}/>
        </div>
    );
}

export default App;
