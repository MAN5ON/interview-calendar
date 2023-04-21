import { createSlice } from '@reduxjs/toolkit'

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        date: new Date(),
        today: new Date(),
    },
    reducers: {
        prevWeek: (state) => {
            state.date = new Date(
                state.date.getFullYear(),
                state.date.getMonth(),
                state.date.getDate() - 7
            );
        },
        nextWeek: (state) => {
            state.date = new Date(
                state.date.getFullYear(),
                state.date.getMonth(),
                state.date.getDate() + 7
            );
        },
        pickDay: (state, action) => {
            state.date = new Date(action.payload);
        },
    },
});

export const { prevWeek, nextWeek, pickDay } = calendarSlice.actions;

export default calendarSlice.reducer;