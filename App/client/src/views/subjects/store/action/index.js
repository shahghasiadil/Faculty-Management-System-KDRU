import axios from 'axios'

// ** Toast Components
import { SuccessProgressToast, ErrorToast } from '../../list/Sidebar'
import {UpdateProgressToast} from '../../edit/Edit'
import { toast, Slide } from 'react-toastify'
import { ErrorToast as AlertComponent } from '../../list/Table'

// ** SweetAlerts
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

// ** ActionTypes Constants
import { ADD_SUBJECT, ARCHIVE, DELETE_SUBJECT, GET_ALL_DATA, GET_DATA, GET_SUBJECT, RESTORE_SUBJECT, UPDATE_SUBJECT } from './actionTypes'

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    await axios.get('http://127.0.0.1:8000/api/subjects').then(response => {
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
    await axios.get(`http://127.0.0.1:8000/api/subjects`, params).then(response => {
    dispatch({
      type: GET_DATA,
      data:response.data.data,
      totalPages: response.data.total,
      params
    })
    })
  }
}
 
// ** Get subject
export const getSubject = id => {
  return async dispatch => {
    await axios
      .get(`http://127.0.0.1:8000/api/subjects/${id}`)
      .then(response => {
        dispatch({
          type: GET_SUBJECT,
          selectedSubject: response.data
        })
      })
      .catch(err => console.log(err))
  }
}

// ** Add new subject
export const addSubject = subject => {
  return (dispatch, getState) => {
    axios
      .post('http://127.0.0.1:8000/api/subjects', subject)
      .then(response => {
        dispatch({
          type: ADD_SUBJECT,
          subject
        })
      })
      .then(() => {
        toast.success(<SuccessProgressToast name={subject.name} />)        
        dispatch(getData(getState().subjects.params))
        dispatch(getAllData())
        
      })
      .catch(() => {
        toast.success(<ErrorToast/>)        
      })
    }
  }
  // ** Update subject
  export const updateSubject = (subject, id) => {
    return (dispatch, getState) => {
      axios
        .put(`http://127.0.0.1:8000/api/subjects/${id}`, subject)
        .then(response => {
          dispatch({
            type: UPDATE_SUBJECT,
            subject
          })
          
        })
        .then(() => {
          toast.success(<UpdateProgressToast/>)        
          dispatch(getData(getState().subject.params))
          dispatch(getAllData())
          
        })
        .catch(err => console.log(err))
      }
    }
  // ** Delete subject
  export const deleteSubject = id => {
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
            axios.delete(`http://127.0.0.1:8000/api/subjects/subject/${id}`)
            .then(() => {
                dispatch({
                type: DELETE_SUBJECT
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
        dispatch(getData(getState().subjects.params))
        dispatch(getAllData())
      }).catch(err => console.log(err))
  }
}
// ** Move to Recycle bin subject
export const archiveSubject = id => {
  return (dispatch, getState) => {
    axios.delete(`http://127.0.0.1:8000/api/subjects/${id}`).then(() => {
      dispatch({
        type:ARCHIVE
      })
    }).then(() => {
      dispatch(getData(getState().subjects.params))
      dispatch(getAllData())
      toast.success(<AlertComponent id = {id}/>,
        { transition: Slide, autoClose: 10000 }
        )
     
    }).catch(err => console.log(err))
  }
}
// ** Restore subject
export const restoreSubject = id => {
  return (dispatch, getState) => {
    axios.get(`http://127.0.0.1:8000/api/subjects/${id}/restore`).then(() => {
      dispatch({
        type:ARCHIVE
      })
    }).then(() => {
      dispatch(getData(getState().subjects.params))
      dispatch(getAllData())
    }).catch(err => console.log(err))
  }
}
