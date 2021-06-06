import axios from 'axios'

// ** Get User Profile
export const getUserProfile = () => {
  return dispatch => {
    return axios.get('/apps/chat/users/profile-user').then(res => {
      return dispatch({
        type: 'GET_USER_PROFILE',
        userProfile: res.data
      })
    })
  }
}

// ** Get Chats & Contacts
export const getChatContacts = () => {
  return dispatch => {
    axios.get('/apps/chat/chats-and-contacts').then(res => {
      dispatch({
        type: 'GET_CHAT_CONTACTS',
        data: res.data
      })
    })
  }
}

// ** Select Chat
export const selectChat = id => {
  return dispatch => {
    axios.get('/apps/chat/get-chat', { id }).then(res => {
      dispatch({ type: 'SELECT_CHAT', data: res.data })
      dispatch(getChatContacts())
    })
  }
}

// ** Send Msg
export const sendMsg = obj => {
  return dispatch => {
    axios.post('/apps/chat/send-msg', { obj }).then(res => {
      dispatch({ type: 'SEND_MSG', data: res.data })
      dispatch(selectChat(obj.contact.id))
    })
  }
}
