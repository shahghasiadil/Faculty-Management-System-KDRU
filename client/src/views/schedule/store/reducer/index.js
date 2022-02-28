import { GET_SCHEDULE } from "../action/actionTypes"

// ** Initial State
const initialState = {
  allData: [],
  data: [],
  schedule: null
}

const schedule = (state = initialState, action) => {
  switch (action.type) {
    case GET_SCHEDULE:
      return { ...state, schedule: action.schedule }
    default:
      return { ...state }
  }
}
export default schedule
