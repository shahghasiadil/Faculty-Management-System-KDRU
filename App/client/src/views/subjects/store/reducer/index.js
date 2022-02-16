import { ADD_SUBJECT, ARCHIVE, DELETE_SUBJECT, GET_ALL_DATA, GET_DATA, GET_SUBJECT, RESTORE_SUBJECT, UPDATE_SUBJECT } from "../action/actionTypes"

// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  selectedSubject: null
}

const subjects = (state = initialState, action) => {
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
    case GET_SUBJECT:
      return { ...state, selectedSubject: action.selectedSubject }
    case ADD_SUBJECT:
      return { ...state  }
    case UPDATE_SUBJECT:
        return { ...state }
    case DELETE_SUBJECT:
      return { ...state }
    case ARCHIVE:
      return { ...state }
    case RESTORE_SUBJECT:
      return { ...state}
    default:
      return { ...state }
  }
}
export default subjects
