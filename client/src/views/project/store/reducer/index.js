import { ADD_PROJECT, ARCHIVE, DELETE_PROJECT, GET_ALL_DATA, GET_DATA, GET_PROJECT, RESTORE_PROJECT, UPDATE_PROJECT } from "../action/actionTypes"

// ** Initial State
const initialState = {
  allData: [],
  data: [],
  selectedProject: null
}

const projects = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DATA:
      return { ...state, allData: action.data }
    case GET_DATA:
      return {
        ...state,
        data: action.data
      }
    case GET_PROJECT:
      return { ...state, selectedProject: action.selectedProject }
    case ADD_PROJECT:
      return { ...state }
    case UPDATE_PROJECT:
      return { ...state }
    case DELETE_PROJECT:
      return { ...state }
    case ARCHIVE:
      return { ...state }
    case RESTORE_PROJECT:
      return { ...state }
    default:
      return { ...state }
  }
}
export default projects
