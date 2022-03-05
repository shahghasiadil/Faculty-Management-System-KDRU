import { ADD_SCHEDULE, ARCHIVE, DELETE_SCHEDULE, GET_ALL_DATA, GET_DATA, GET_SCHEDULE, RESTORE_SCHEDULE, UPDATE_SCHEDULE } from "../action/actionTypes"

// ** Initial State
const initialState = {
    allData: [],
    data: [],
    selectedSchedule: null
}

const Schedules = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DATA:
            return { ...state, allData: action.data }
        case GET_DATA:
            return {
                ...state,
                data: action.data
            }
        case GET_SCHEDULE:
            return { ...state, selectedSchedule: action.selectedSchedule }
        case ADD_SCHEDULE:
            return { ...state }
        case UPDATE_SCHEDULE:
            return { ...state }
        case DELETE_SCHEDULE:
            return { ...state }
        case ARCHIVE:
            return { ...state }
        case RESTORE_SCHEDULE:
            return { ...state }
        default:
            return { ...state }
    }
}
export default Schedules
