import { ADD_EXAM_SCHEDULE, ARCHIVE, DELETE_EXAM_SCHEDULE, GET_ALL_DATA, GET_DATA, GET_EXAM_SCHEDULE, RESTORE_EXAM_SCHEDULE, UPDATE_EXAM_SCHEDULE } from "../action/actionTypes"

// ** Initial State
const initialState = {
  allData: [],
  data: [],
  params: {},
  selectedExamSchedule: null
}

const ExamSchedules = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DATA:
      return { ...state, allData: action.data }
    case GET_DATA:
      return {
        ...state,
        data: action.data,
        params:action.params
      }
    case GET_EXAM_SCHEDULE:
      return { ...state, selectedExamSchedule: action.selectedExamSchedule }
    case ADD_EXAM_SCHEDULE:
      return { ...state  }
    case UPDATE_EXAM_SCHEDULE:
        return { ...state }
    case DELETE_EXAM_SCHEDULE:
      return { ...state }
    case ARCHIVE:
      return { ...state }
    case RESTORE_EXAM_SCHEDULE:
      return { ...state}
    default:
      return { ...state }
  }
}
export default ExamSchedules
