import axios from 'axios'

// ** Toast Components
import { SuccessProgressToast} from '../../list/Sidebar'
import {UpdateProgressToast} from '../../edit/Edit'
import { toast, Slide } from 'react-toastify'
import { ErrorToast as AlertComponent } from '../../list/Table'
// ** SweetAlerts
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
// ** ActionTypes Constants
import { ADD_SCHEDULE, ARCHIVE, DELETE_SCHEDULE, GET_ALL_DATA, GET_DATA, GET_SCHEDULE, RESTORE_SCHEDULE, UPDATE_SCHEDULE } from './actionTypes'

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    await axios.get('http://127.0.0.1:8000/api/schedules').then(response => {
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
    await axios.get(`http://127.0.0.1:8000/api/schedules`, params).then(response => {
    dispatch({
      type: GET_DATA,
      data:response.data.data,
      params
    })
    })
  }
} 
// ** Get Student
export const getSchedule = id => {
  return async dispatch => {
    await axios
      .get(`http://127.0.0.1:8000/api/schedules/${id}`)
      .then(response => {
        dispatch({
          type: GET_SCHEDULE,
          selectedSchedule: response.data
        })
      })
      .catch(err => console.log(err))
  }
}

// ** Add new student
export const addSchedule = Schedule => {
  console.log(Schedule)
  return (dispatch, getState) => {
    axios
      .post('http://127.0.0.1:8000/api/schedules', Schedule)
      .then(response => {
        dispatch({
          type: ADD_SCHEDULE,
          Schedule
        })

      })
      .then(() => {
        toast.success(<SuccessProgressToast/>)
        dispatch(getData(getState().Schedules.params))
        dispatch(getAllData())
        
      })
      .catch(() => {
      })
    }
  }
  // ** Update Student
  export const updateSchedule = (Schedule, id) => {
    return (dispatch, getState) => {
      axios
        .put(`http://127.0.0.1:8000/api/schedules/${id}`, Schedule)
        .then(response => {
          dispatch({
            type: UPDATE_SCHEDULE,
            Schedule
          })
          
        })
        .then(() => {
          toast.success(<UpdateProgressToast/>)        
          dispatch(getData(getState().Schedules.params))
          dispatch(getAllData())
          
        })
        .catch(err => console.log(err))
      }
    }
  // ** Delete Student
  export const deleteSchedule = id => {
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
            axios.delete(`http://127.0.0.1:8000/api/schedules/schedule/${id}`)
            .then(() => {
                dispatch({
                type: DELETE_SCHEDULE
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
        dispatch(getData(getState().Schedules.params))
        dispatch(getAllData())
      }).catch(err => console.log(err))
  }
}
// ** Move to Recycle bin student
export const archiveSchedule = id => {
  return (dispatch, getState) => {
    axios.delete(`http://127.0.0.1:8000/api/schedules/${id}`).then(() => {
      dispatch({
        type:ARCHIVE
      })
    }).then(() => {
      dispatch(getData(getState().Schedules.params))
      dispatch(getAllData())
      toast.success(<AlertComponent id = {id}/>,
        { transition: Slide, autoClose: 10000 }
        )
     
    }).catch(err => console.log(err))
  }
}
// ** Restore Student
export const restoreSchedule = id => {
  return (dispatch, getState) => {
    axios.get(`http://127.0.0.1:8000/api/schedule/${id}/restore`).then(() => {
      dispatch({
        type:RESTORE_SCHEDULE
      })
    }).then(() => {
      dispatch(getData(getState().Schedules.params))
      dispatch(getAllData())
    }).catch(err => console.log(err))
  }
}
