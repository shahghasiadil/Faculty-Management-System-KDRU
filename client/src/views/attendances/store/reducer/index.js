import { GET_ALL_DATA, GET_DATA, GET_STUDENTS } from "../action/actionTypes"

// ** Initial State
const initialState = {
  allData: [],
  data: [],
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
    case GET_STUDENTS:
      return { ...state, students: action.students }
    default:
      return { ...state }
  }
}
export default attendance
