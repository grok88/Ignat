import React from 'react';
import {createStore, combineReducers} from 'redux';
import {loadingReducer} from './loadingReducer';

const RootReducer = combineReducers({
    loading: loadingReducer
});

export type AppRootStateType = ReturnType<typeof RootReducer>;

export const store = createStore(RootReducer);
// @ts-ignore
window.store = store;
