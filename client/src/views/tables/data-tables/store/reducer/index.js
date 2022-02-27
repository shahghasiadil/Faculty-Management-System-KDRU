// ** Initial State
const initialState = {
  data: [],
  total: 1,
  params: {},
  allData: []
}

const DataTablesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        allData: action.allData,
        data: action.data,
        total: action.totalPages,
        params: action.params
      }
    default:
      return state
  }
}

export default DataTablesReducer
