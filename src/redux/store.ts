import React from 'react';
import {createStore, combineReducers} from 'redux';
import {loadingReducer} from './loadingReducer';
import { themeReducer } from './themeReducer';

const RootReducer = combineReducers({
    loading: loadingReducer,
    theme:themeReducer
});

export type AppRootStateType = ReturnType<typeof RootReducer>;

export const store = createStore(RootReducer);
// @ts-ignore
window.store = store;
