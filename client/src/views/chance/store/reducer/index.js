import { ADD_CHANCE, ARCHIVE, DELETE_CHANCE, GET_ALL_DATA, GET_DATA, GET_CHANCE, RESTORE_CHANCE, UPDATE_CHANCE } from "../action/actionTypes"

// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  selectedChance: null
}

const chances = (state = initialState, action) => {
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
    case GET_CHANCE:
      return { ...state, selectedChance: action.selectedChance }
    case ADD_CHANCE:
      return { ...state  }
    case UPDATE_CHANCE:
        return { ...state }
    case DELETE_CHANCE:
      return { ...state }
    case ARCHIVE:
      return { ...state }
    case RESTORE_CHANCE:
      return { ...state}
    default:
      return { ...state }
  }
}
export default  chances
