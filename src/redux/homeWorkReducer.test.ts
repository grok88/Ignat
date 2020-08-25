import {HwReducerStateType, hwReducer, sort, check} from './homeWorkReducer';

let startState: HwReducerStateType = [];

beforeEach(() => {
    startState = [
        {name: 'Alex', age: 32, id: '1'},
        {name: 'Sveta', age: 18, id: '2'},
        {name: 'Igor', age: 15, id: '3'},
    ];
});

test('Array should be sorted UP by names', () => {
    const action = sort('up');
    const endState = hwReducer(startState, action);

    expect(endState[0].name).toBe('Alex');
    expect(endState[1].name).toBe('Igor');
    expect(endState[2].name).toBe('Sveta');
});

test('Array should be sorted DOWN by names', () => {
    const action = sort('down');
    const endState = hwReducer(startState, action);

    expect(endState[0].name).toBe('Sveta');
    expect(endState[1].name).toBe('Igor');
    expect(endState[2].name).toBe('Alex');
});
test('Array should be return only 18 years old people', () => {
    const action = check(18);
    const endState = hwReducer(startState, action);

    expect(endState.length).toBe(1);
    expect(endState[0].name).toBe('Sveta');
    expect(endState[0].id).toBe('2');
    expect(endState[0].age).toBe(18);
});