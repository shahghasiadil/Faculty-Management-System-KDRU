import { ADD_STUDENT, ARCHIVE, DELETE_STUDENT, GET_ALL_DATA, GET_DATA, GET_STUDENT, RESTORE_STUDENT, UPDATE_STUDENT } from "../action/actionTypes"

// ** Initial State
const initialState = {
  allData: [],
  data: [],
  studentInfo: {
    account: {},
    personal: {},
    tazkira: {},
    address: {},
    relative: {},
    kankor: {}
  },
  total: 1,
  params: {},
  selectedStudent: null
}

const students = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DATA:
      return { ...state, allData: action.data }
    case GET_DATA:
      return {
        ...state,
        data: action.data,
        total: action.totalPages,
        params: action.params
      }
    case GET_STUDENT:
      return { ...state, selectedStudent: action.selectedStudent }
    case ADD_STUDENT:
      return { ...state }
    case UPDATE_STUDENT:
      return { ...state }
    case DELETE_STUDENT:
      return { ...state }
    case ARCHIVE:
      return { ...state }
    case RESTORE_STUDENT:
      return { ...state }
    default:
      return { ...state }
  }
}
export default students
