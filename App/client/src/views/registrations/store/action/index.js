
import axios from 'axios'

// ** Toast Components
import { SuccessProgressToast, ErrorToast } from '../../list/Sidebar'
import {UpdateProgressToast} from '../../edit/Edit'
import { toast, Slide } from 'react-toastify'
import { ErrorToast as AlertComponent } from '../../list/Table'
// ** SweetAlerts
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ADD_REGISTRATIONS, DELETE_REGISTRATIONS, GET_ALL_DATA, GET_DATA, GET_REGISTRATIONS, UPDATE_REGISTRATIONS } from './actionTypes'
const MySwal = withReactContent(Swal)
// ** ActionTypes Constants

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    await axios.get('http://127.0.0.1:8000/api/registrations').then(response => {
      dispatch({
        type: GET_ALL_DATA,
        data: response.data.data
      })
      // console.log(response.data)
    })
  }
}

// ** Get data on page or row change
export const getData = params => {
  return async dispatch => {
    await axios.get(`http://127.0.0.1:8000/api/registrations`, params).then(response => {
    dispatch({
      type: GET_DATA,
      data: response.data,
      totalPages: response.data.total,
      params
    })
    })
  }
} 
// ** Get Final Marks
export const getRegistration = id => {
  return async dispatch => {
    await axios
      .get(`http://127.0.0.1:8000/api/registrations/${id}`)
      .then(response => {
        dispatch({
          type: GET_REGISTRATIONS,
          selectedRegistration: response.data
        })
      })
      .catch(err => console.log(err))
  }
}

// ** Add new Final Mark
export const addRegistration = registration => {
  return (dispatch, getState) => {
    axios
      .post('http://127.0.0.1:8000/api/registrations', registration)
      .then(response => {
        dispatch({
          type: ADD_REGISTRATIONS,
          registration
        })
      })
      .then(() => {
        toast.success(<SuccessProgressToast  mark = {'Mark'} />)        
        dispatch(getData(getState().registrations.params))
        dispatch(getAllData())
        
      })
      .catch(() => {
        toast.success(<ErrorToast/>)        
      })
    }
    //console.log(finalMark)
  }
  // ** Update Student
  export const updateRegistration = (registration, id) => {
    return (dispatch, getState) => {
      axios
        .put(`http://127.0.0.1:8000/api/registrations/${id}}`, registration)
        .then(response => {
          dispatch({
            type: UPDATE_REGISTRATIONS,
            registration
          })
          
        })
        .then(() => {
          toast.success(<UpdateProgressToast/>)        
          dispatch(getData(getState().registrations.params))
          dispatch(getAllData())
          
        })
        .catch(err => console.log(err))
      }
    }
  // ** Delete Student
  export const deleteRegistration = id => {
    return (dispatch, getState) => {
       MySwal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          customClass: {
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-danger ml-1'
          },
          buttonsStyling: false
        }).then(function (result) {
          if (result.value) {
            axios.delete(`http://127.0.0.1:8000/api/registrations/${id}`)
            .then(() => {
                dispatch({
                type: DELETE_REGISTRATIONS
                })
                MySwal.fire({
                  icon: 'success',
                  title: 'Deleted!',
                  text: 'Your record has been deleted.',
                  customClass: {
                    confirmButton: 'btn btn-success'
                  }
                })
              }).catch(() => {
                MySwal.fire('Failed!',
                'There was something wrong.',
                'warning')
              })
          }
        })      
      .then(() => {
        dispatch(getData(getState().registrations.params))
        dispatch(getAllData())
      }).catch(err => console.log(err))
  }
}

