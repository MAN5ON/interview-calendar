import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    date: new Date()
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        prevWeek: (state) => {

        },

        nextWeek: (state) => {

        },

        daysInMonth: (state) => {

        },

    },
})
export const { increment, decrement, incrementByAmount } = calendarSlice.actions

export default calendarSlice.reducer