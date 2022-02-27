// **  Initial State
const initialState = {
  userData: {}
}

const authReducer = (state = { initialState, loading: false }, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { loading: true }
    case 'LOGIN':
      return {
        ...state,
        loading: false,
        userData: action.data,
        [action.config.storageTokenKeyName]:
          action[action.config.storageTokenKeyName],
        [action.config.storageRefreshTokenKeyName]:
          action[action.config.storageRefreshTokenKeyName]
      }
    case 'LOGOUT':
      const obj = { ...action }
      delete obj.type
      return { ...state, userData: {}, ...obj }
    default:
      return state
  }
}

export default authReducer
