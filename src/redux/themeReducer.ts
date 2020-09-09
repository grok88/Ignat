import React from 'react';

export type ThemeReducerStateType = typeof InitialState;

// export type ThemeType =  'light' | 'dark' | 'green';

type ThemeReducerType = ReturnType<typeof setThemeAC>;

const InitialState = {
    theme: 'light'
}

export const themeReducer = (state: ThemeReducerStateType = InitialState, action: ThemeReducerType): ThemeReducerStateType => {
    switch (action.type) {
        case 'SET_THEME':
            return {
                ...state,
                theme: action.theme
            }
        default:
            return state;
    }
}

export const setThemeAC = (theme: string) => {
    return {
        type: "SET_THEME",
        theme
    } as const
}

