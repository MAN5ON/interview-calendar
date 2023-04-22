import { createContext } from 'react';

// StateContext
export const StateContext = createContext();

// Reducer
export const reducer = (state, action) => {
    switch (action.type) {
        case "changeWeek":
            return {
                ...state,
                weekArr: action.payload
            };
        case "setToday":
            return {
                ...state,
                today: action.payload
            };
        case "addTask":
            return {
                ...state,
                tasksArr: action.payload
            };
        case "filterTasks":
            return {
                ...state,
                filteredTaskArr: action.payload
            };
        case "setRemove":
            return {
                ...state,
                onRemove: action.payload
            };
        case "removeTask":
            return {
                ...state,
                tasksArr: action.payload,
                onRemove: ""
            };
        default:
            return state
    }
}
