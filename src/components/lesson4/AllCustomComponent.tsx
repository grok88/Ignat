import React, {useState} from 'react';
import {MyCheckBox} from '../../common/checkbox/MyCheckBox';
import {MyInput} from '../../common/input/MyInput';
import {MyButton} from '../../common/button/MyButton';

export const AllCustomComponent = () => {
    //checkbox
    const [check, setCheck] = useState<boolean>(false);
    const setCheckValue = (value: boolean) => {
        setCheck(value);
    }

    //input
    let [value, setValue] = useState<string>('');

    const onChangeValue = (value: string) => {
        setValue(value);
    }
    const onKeyPressHandler = (keyNumber: number) => {
        if (keyNumber === 13) {
            console.log('press')
        }
    }
    //button
    const onClickButton = () => {
        alert('Button click');
    }
    const onDeleteButton = () => {
        alert('Button delete');
    }
    return (
        <div>
            <h2>Lesson4</h2>
            <div>
                <h3>My input</h3>
                    <MyInput value={value} onChange={onChangeValue} onKeyPress={onKeyPressHandler}/>
            </div>
            <div>
                <h3>My button</h3>
                <MyButton type={'default'} title={'All'} onClickHandler={onClickButton}/>
                <MyButton title={'delete'} type={'red'}
                          onClickHandler={onDeleteButton}/>
            </div>
            <div>
                <h3>My checkbox</h3>
                    <MyCheckBox check={check} onChange={setCheckValue} customLabel={'check1'}/>
            </div>

        </div>
    );
}