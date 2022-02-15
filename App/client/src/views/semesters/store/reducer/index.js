import { ADD_SEMESTER, ARCHIVE, DELETE_SEMESTER, GET_ALL_DATA, GET_DATA, GET_SEMESTER, RESTORE_SEMESTER, UPDATE_SEMESTER } from "../action/actionTypes"

// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  selectedSemester: null
}

const semesters = (state = initialState, action) => {
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
    case GET_SEMESTER:
      return { ...state, selectedSemester: action.selectedSemester}
    case ADD_SEMESTER:
      return { ...state  }
    case UPDATE_SEMESTER:
        return { ...state }
    case DELETE_SEMESTER:
      return { ...state }
    case ARCHIVE:
      return { ...state }
    case RESTORE_SEMESTER:
      return { ...state}
    default:
      return { ...state }
  }
}
export default semesters
