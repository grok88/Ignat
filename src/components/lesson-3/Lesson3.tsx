import React, {useState, ChangeEvent, KeyboardEvent} from 'react';
import {v1} from 'uuid';

const Lesson3 = () => {
    let arr = [];
    let [count, setCount] = useState<number>(0);
    let [value, setValue] = useState<string>('');


    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        setValue(value);
    }
    const sayName = () => {
        if (value.trim().length !== 0) {
            addToArray();
            alert(value);
            setValue('');
        }
    }
    const addToArray = () => {
        let newItem = {id: v1(), name: value}
        arr.push(newItem);
        setCount(count => count + 1);
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            sayName();
        }
    }
    return (
        <div>
            <h2>Lesson3</h2>
            <div>
                <input type="text" value={value} onChange={onChangeValue} onKeyPress={onKeyPressHandler}/>
            </div>
            <div>
                <button onClick={sayName}>Button</button>
            </div>
            <div>
                <span>count name - {count}</span>
            </div>
        </div>
    );
}
export default Lesson3;