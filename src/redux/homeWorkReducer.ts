export type HwReducerStateType = Array<{ id: string, name: string, age: number }>

type Payload = 'up' | 'down';
type SortACType = {
    type: 'SORT';
    payload: Payload;
}
type CheckACType = {
    type: 'CHECK';
    payload: number;
}

type actionType = SortACType | CheckACType;

const initialState: HwReducerStateType = [];

export const hwReducer = (state: HwReducerStateType = initialState, action: actionType) => {
    switch (action.type) {
        case 'SORT':
            if (action.payload === 'up') {
                return state.map(elem => ({...elem})).sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    // a должно быть равным b
                    return 0;
                })
            } else if (action.payload === 'down') {
                return state.map(elem => ({...elem})).sort((a, b) => {
                    if (a.name < b.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    // a должно быть равным b
                    return 0;
                })
            }
        case 'CHECK':
            return state.filter(item => item.age === action.payload)
        default :
            return state;
    }
};

export const sort = (payload: Payload): SortACType => {
    return {
        type: 'SORT',
        payload
    }
}
export const check = (payload: number): CheckACType => {
    return {
        type: 'CHECK',
        payload
    }
}