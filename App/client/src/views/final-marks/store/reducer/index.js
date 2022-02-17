import { ADD_FINAL_MARKS, ARCHIVE, DELETE_FINAL_MARKS, GET_ALL_DATA, GET_DATA, GET_FINAL_MARKS, RESTORE_FINAL_MARKS, UPDATE_FINAL_MARKS } from "../action/actionTypes"

// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  selectedFinalMark: null
}

const finalMarks = (state = initialState, action) => {
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
    case GET_FINAL_MARKS:
      return { ...state, selectedFinalMark: action.selectedFinalMark }
    case ADD_FINAL_MARKS:
      return { ...state  }
    case UPDATE_FINAL_MARKS:
        return { ...state }
    case DELETE_FINAL_MARKS:
      return { ...state }
    case ARCHIVE:
      return { ...state }
    case RESTORE_FINAL_MARKS:
      return { ...state}
    default:
      return { ...state }
  }
}
export default  finalMarks
