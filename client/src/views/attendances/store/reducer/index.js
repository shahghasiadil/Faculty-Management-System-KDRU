import { GET_STUDENTS, RESEST_ATTENDANCE, ADD_ATTENDANCE, ARCHIVE, DELETE_ATTENDANCE, GET_ALL_DATA, GET_DATA, GET_ATTENDANCE, RESTORE_ATTENDANCE, UPDATE_ATTENDANCE } from "../action/actionTypes"

// ** Initial State
const initialState = {
    allData: [],
    data: [],
    selectedAttendance: null,
    students: null
}

const attendance = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DATA:
            return { ...state, allData: action.data }
        case GET_DATA:
            return {
                ...state,
                data: action.data
            }
        case GET_ATTENDANCE:
            return { ...state, selectedAttendance: action.selectedAttendance }
        case RESEST_ATTENDANCE:
            return { ...state, selectedAttendance: null }
        case GET_STUDENTS:
            return { ...state, students: action.students }
        case ADD_ATTENDANCE:
            return { ...state }
        case UPDATE_ATTENDANCE:
            return { ...state }
        case DELETE_ATTENDANCE:
            return { ...state }
        case ARCHIVE:
            return { ...state }
        case RESTORE_ATTENDANCE:
            return { ...state }
        default:
            return { ...state }
    }
}
export default attendance
