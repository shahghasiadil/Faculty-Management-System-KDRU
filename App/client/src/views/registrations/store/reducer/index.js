import { ADD_REGISTRATIONS, ARCHIVE, DELETE_REGISTRATIONS, GET_ALL_DATA, GET_DATA, GET_REGISTRATIONS, RESTORE_REGISTRATIONS, UPDATE_REGISTRATIONS } from "../action/actionTypes"

// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  selectedMidTermMark: null
}

const registrations = (state = initialState, action) => {
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
    case GET_REGISTRATIONS:
      return { ...state, selectedMidTermMark: action.selectedMidTermMark }
    case ADD_REGISTRATIONS:
      return { ...state  }
    case UPDATE_REGISTRATIONS:
        return { ...state }
    case DELETE_REGISTRATIONS:
      return { ...state }
    case ARCHIVE:
      return { ...state }
    case RESTORE_REGISTRATIONS:
      return { ...state}
    default:
      return { ...state }
  }
}
export default  registrations
