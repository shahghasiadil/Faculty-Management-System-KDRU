import { ADD_MID_TERM_MARKS, ARCHIVE, DELETE_MID_TERM_MARKS, GET_ALL_DATA, GET_DATA, GET_MID_TERM_MARKS, RESTORE_MID_TERM_MARKS, UPDATE_MID_TERM_MARKS } from "../action/actionTypes"

// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  selectedMidTermMark: null
}

const midTermMarks = (state = initialState, action) => {
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
    case GET_MID_TERM_MARKS:
      return { ...state, selectedMidTermMark: action.selectedMidTermMark }
    case ADD_MID_TERM_MARKS:
      return { ...state  }
    case UPDATE_MID_TERM_MARKS:
        return { ...state }
    case DELETE_MID_TERM_MARKS:
      return { ...state }
    case ARCHIVE:
      return { ...state }
    case RESTORE_MID_TERM_MARKS:
      return { ...state}
    default:
      return { ...state }
  }
}
export default  midTermMarks
