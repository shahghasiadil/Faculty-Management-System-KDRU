import { ADD_TEACHER, DELETE_TEACHER, GET_ALL_DATA, GET_DATA, GET_TEACHER, RESTORE_TEACHER, UPDATE_TEACHER } from "../action/actionTypes"

// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  selectedTeacher: null
}

const teachers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DATA:
      return { ...state, allData: action.data }
    case GET_DATA:
      return {
        ...state,
        data: action.data,
        total: action.totalPages,
        params:action.params
      }
    case GET_TEACHER:
      return { ...state, selectedTeacher: action.selectedTeacher }
    case ADD_TEACHER:
      return { ...state}
    case UPDATE_TEACHER:
        return { ...state }
    case DELETE_TEACHER:
      return { ...state }
    case ADD_TEACHER:
      return { ...state }
    case RESTORE_TEACHER:
      return { ...state}
    default:
      return { ...state }
  }
}
export default teachers
