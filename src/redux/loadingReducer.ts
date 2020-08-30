import React from 'react';

 export type InitialStateType = {
    loading: boolean;
}
type SetLoadingType = {
    type: 'SET_LOADING';
    loading: boolean;
}
type LoadingReducerType = SetLoadingType;

const InitialState = {
    loading: false
}

export const loadingReducer = (state: InitialStateType = InitialState, action: LoadingReducerType): InitialStateType => {
    switch (action.type) {
        case "SET_LOADING": {
            return {...state, loading: action.loading}
        }
        default:
            return state;
    }
}

export const setLoading = (loading: boolean): SetLoadingType => {
    return {
        type: "SET_LOADING",
        loading
    }
}

