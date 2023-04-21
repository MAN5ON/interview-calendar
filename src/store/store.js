export default function reducer(state, action) {
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
        case "removeDate":
            return {
                ...state,
            }
        default:
            return state
    }
}