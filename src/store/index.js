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

// Initial State
export const initialState = {
    weekArr: [], filteredTaskArr: [], onRemove: "", today: 0, tasksArr: [
        { id: "1", date: "Mon Apr 17 2023", hour: 8 },
        { id: "2", date: "Mon Apr 17 2023", hour: 12 },
        { id: "3", date: "Mon Apr 17 2023", hour: 16 },

        { id: "4", date: "Tue Apr 18 2023", hour: 9 },
        { id: "5", date: "Tue Apr 18 2023", hour: 13 },
        { id: "6", date: "Tue Apr 18 2023", hour: 17 },

        { id: "7", date: "Wed Apr 19 2023", hour: 10 },
        { id: "8", date: "Wed Apr 19 2023", hour: 14 },
        { id: "9", date: "Wed Apr 19 2023", hour: 18 },

        { id: "10", date: "Thu Apr 20 2023", hour: 11 },
        { id: "11", date: "Thu Apr 20 2023", hour: 15 },
        { id: "12", date: "Thu Apr 20 2023", hour: 19 },

        { id: "13", date: "Fri Apr 21 2023", hour: 12 },
        { id: "14", date: "Fri Apr 21 2023", hour: 16 },
        { id: "15", date: "Fri Apr 21 2023", hour: 20 },

        { id: "16", date: "Sat Apr 22 2023", hour: 5 },
        { id: "17", date: "Sat Apr 22 2023", hour: 6 },
        { id: "18", date: "Sat Apr 22 2023", hour: 7 },

        { id: "19", date: "Sun Apr 23 2023", hour: 5 },
        { id: "20", date: "Sun Apr 23 2023", hour: 6 },
        { id: "21", date: "Sun Apr 23 2023", hour: 7 },

        { id: "22", date: "Mon Apr 24 2023", hour: 8 },
        { id: "23", date: "Mon Apr 24 2023", hour: 12 },
        { id: "24", date: "Mon Apr 24 2023", hour: 16 },

        { id: "25", date: "Tue Apr 25 2023", hour: 9 },
        { id: "26", date: "Tue Apr 25 2023", hour: 13 },
        { id: "27", date: "Tue Apr 25 2023", hour: 17 },

        { id: "28", date: "Wed Apr 26 2023", hour: 10 },
        { id: "29", date: "Wed Apr 26 2023", hour: 14 },
        { id: "30", date: "Wed Apr 26 2023", hour: 18 },

        { id: "31", date: "Thu Apr 27 2023", hour: 11 },
        { id: "32", date: "Thu Apr 27 2023", hour: 15 },
        { id: "33", date: "Thu Apr 27 2023", hour: 19 },

        { id: "34", date: "Fri Apr 28 2023", hour: 12 },
        { id: "35", date: "Fri Apr 28 2023", hour: 16 },
        { id: "36", date: "Fri Apr 28 2023", hour: 20 },

        { id: "37", date: "Sat Apr 29 2023", hour: 5 },
        { id: "38", date: "Sat Apr 29 2023", hour: 6 },
        { id: "39", date: "Sat Apr 29 2023", hour: 7 },

        { id: "40", date: "Sun Apr 30 2023", hour: 5 },
        { id: "41", date: "Sun Apr 30 2023", hour: 6 },
        { id: "42", date: "Sun Apr 30 2023", hour: 7 },
    ],
};